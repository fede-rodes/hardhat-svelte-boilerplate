<script lang="ts">
  import "@styles/app.css";
  import { metamask } from "@stores/metamask";
  import { Header } from "@components/header";
  import { Modal } from "@components/modal";
  import { Providers } from "@components/providers";

  let isOpen = false;
  let error: string | undefined;

  function handleOpen() {
    isOpen = true;
  }
  function handleClose() {
    isOpen = false;
  }
  function handleConnect(event: CustomEvent) {
    if (event.detail.provider === "MetaMask") {
      metamask.connect();
    } else {
      error = "Ops! This provider is not supported yet.";
    }
  }

  $: {
    if ($metamask.isConnected) {
      handleClose();
    }
  }
  $: error = $metamask?.error?.message;
</script>

<Header account={$metamask.account} on:login={handleOpen} />

<main>
  <slot />

  <Modal {isOpen} on:close={handleClose}>
    <svelte:fragment slot="header">Connect wallet</svelte:fragment>
    <svelte:fragment slot="body">
      <Providers on:connect={handleConnect} {error} />
    </svelte:fragment>
  </Modal>
</main>
