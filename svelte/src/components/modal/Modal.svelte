<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import closeIcon from "../../assets/close.svg";
  // import { clickOutside } from "../../actions/click_outside";

  export let isOpen = false;

  let dialog: HTMLDialogElement;

  const dispatch = createEventDispatcher();

  function handleClose() {
    dispatch("close");
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") handleClose();
  }

  $: {
    if (dialog != null) {
      if (isOpen) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }
  }
</script>

<!-- Main modal -->
<dialog
  bind:this={dialog}
  class="p-0 backdrop:bg-gray-400 backdrop:bg-opacity-50"
  on:keydown={handleKeyDown}
>
  <!-- Modal content -->
  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
    <button
      type="button"
      class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
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
</dialog>

<!-- use:clickOutside
  on:outclick={handleClose} -->
