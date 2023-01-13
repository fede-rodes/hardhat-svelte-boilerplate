<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import closeIcon from "../../assets/close.svg";
  import { clickOutside } from "../../actions/click_outside";

  export let id: string;
  export let isOpen = false;

  const dispatch = createEventDispatcher();

  function handleClose() {
    dispatch("close");
  }
</script>

<!-- Main modal -->
<div
  {id}
  tabindex="-1"
  aria-hidden="true"
  class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
  class:hidden={!isOpen}
>
  <!-- use:clickOutside
  on:outclick={handleClose} -->
  <div class="relative w-full h-full max-w-md md:h-auto">
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <button
        type="button"
        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        data-modal-hide={id}
        on:click={handleClose}
      >
        <img src={closeIcon} class="w-5 h-5" alt="Close icon" />
        <span class="sr-only">Close modal</span>
      </button>
      <!-- Modal header -->
      <div class="px-6 py-4 border-b rounded-t dark:border-gray-600">
        <slot name="header" />
      </div>
      <!-- Modal body -->
      <div class="p-6">
        <slot name="body" />
      </div>
    </div>
  </div>
</div>
