<script lang="ts">
  import { Button } from "@/components/button";
  import { Modal } from ".";

  let isOpen = false;

  function handleOpen() {
    isOpen = true;
  }
  function handleClose() {
    isOpen = false;
  }
</script>

<Button intent="primary" on:click={handleOpen}>Open modal</Button>

<Modal {isOpen} on:close={handleClose}>
  <svelte:fragment slot="header">
    <h3>Header</h3>
  </svelte:fragment>
  <svelte:fragment slot="body">
    <p>Body</p>
  </svelte:fragment>
</Modal>
