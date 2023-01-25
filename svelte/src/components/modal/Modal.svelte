<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { clickOutsideDialog } from "$actions/click-outside-dialog";
  import closeIcon from "$assets/close.svg";

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

<dialog
  bind:this={dialog}
  use:clickOutsideDialog
  class="p-0"
  on:keydown={handleKeyDown}
  on:outclick={handleClose}
>
  <!-- Content -->
  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
    <button
      type="button"
      class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
      on:click={handleClose}
    >
      <img src={closeIcon} class="w-5 h-5" alt="Close icon" />
      <span class="sr-only">Close modal</span>
    </button>
    <!-- Header -->
    <div class="px-6 py-4 border-b rounded-t dark:border-gray-600">
      <h3
        class="text-base font-semibold text-gray-900 lg:text-xl dark:text-white"
      >
        <slot name="header" />
      </h3>
    </div>
    <!-- Body -->
    <div class="p-6">
      <slot name="body" />
    </div>
  </div>
</dialog>
