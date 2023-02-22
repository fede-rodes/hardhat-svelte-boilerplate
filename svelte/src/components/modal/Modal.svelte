<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { clickOutsideDialog } from "@/actions/click-outside-dialog";
  import CloseIcon from "@/assets/Close.svelte";
  import { Divider } from "@/components/divider";

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
  on:keydown={handleKeyDown}
  on:outclick={handleClose}
>
  <!-- Header -->
  <div class="flex items-center px-6 py-4">
    <h3 class="flex-1 text-center ml-6">
      <slot name="header" />
    </h3>

    <button
      class="hover:bg-secondary-100 rounded-full p-1"
      on:click={handleClose}
    >
      <CloseIcon class="w-6 h-6 text-body" />
    </button>
  </div>

  <Divider />

  <!-- Body -->
  <div class="p-6">
    <slot name="body" />
  </div>
</dialog>
