<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { clickOutsideDialog } from "@actions/click-outside-dialog";
  import CloseIcon from "@assets/Close.svelte";
  import { Divider } from "@components/divider";
  import { Button } from "@components/button";

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
  class="p-0 bg-highlight rounded-lg backdrop:bg-transparent/70"
  on:keydown={handleKeyDown}
  on:outclick={handleClose}
>
  <!-- Header -->
  <div class="flex items-center px-6 py-4">
    <div class="w-6 h-6" />
    <h3 class="flex-1 text-base lg:text-xl text-body font-semibold text-center">
      <slot name="header" />
    </h3>
    <button on:click={handleClose}>
      <CloseIcon class="w-6 h-6 text-body" />
    </button>
  </div>
  <Divider />
  <!-- Body -->
  <div class="p-6">
    <slot name="body" />
  </div>
</dialog>
