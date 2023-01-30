<script lang="ts">
  import "@styles/app.css";
  import { wallet } from "@stores/wallet";
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
    wallet.connect(event.detail.provider);
    // if (event.detail.provider === "MetaMask") {
    //   metamask.connect();
    // } else {
    //   error = "Ops! This provider is not supported yet.";
    // }
  }

  $: {
    if ($wallet.isConnected) {
      handleClose();
    }
  }
  $: error = $wallet?.error?.message;
</script>

<Header account={$wallet.account} on:login={handleOpen} />

<main>
  <slot />

  <Modal {isOpen} on:close={handleClose}>
    <svelte:fragment slot="header">Connect wallet</svelte:fragment>
    <svelte:fragment slot="body">
      <Providers on:connect={handleConnect} {error} />
    </svelte:fragment>
  </Modal>
</main>
