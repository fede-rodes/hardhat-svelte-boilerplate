<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { clickOutsideDialog } from "@actions/click-outside-dialog";
  import closeIcon from "@assets/close.svg";
  import { Divider } from "@components/divider";

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
  class="p-0 bg-highlight rounded-lg"
  on:keydown={handleKeyDown}
  on:outclick={handleClose}
>
  <!-- Header -->
  <div class="flex items-center px-6 py-4">
    <div class="w-6 h-6" />
    <h3 class="flex-1 text-base lg:text-xl text-body font-semibold text-center">
      <slot name="header" />
    </h3>
    <button class="hover:bg-primary-100 rounded" on:click={handleClose}>
      <img src={closeIcon} class="w-6 h-6" alt="Close icon" />
      <span class="sr-only">Close modal</span>
    </button>
  </div>
  <Divider />
  <!-- Body -->
  <div class="p-6">
    <slot name="body" />
  </div>
</dialog>
