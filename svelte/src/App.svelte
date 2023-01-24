<script lang="ts">
  import "./app.css";
  import { metamask } from "$stores/metamask";
  import { Header } from "$components/header";
  import { Modal } from "$components/modal";
  import { Providers } from "$components/providers";

  let isOpen = false;

  function handleOpen() {
    isOpen = true;
  }
  function handleClose() {
    isOpen = false;
  }
  function handleConnect(event: CustomEvent) {
    if (event.detail.provider === "MetaMask") {
      metamask.connect();
    }
  }

  $: {
    if ($metamask.isConnected) {
      handleClose();
    }
  }
</script>

<Header account={$metamask.account} on:login={handleOpen} />

<main>
  <Modal {isOpen} on:close={handleClose}>
    <svelte:fragment slot="header">Connect wallet</svelte:fragment>
    <svelte:fragment slot="body">
      <Providers on:connect={handleConnect} />
    </svelte:fragment>
  </Modal>
</main>
