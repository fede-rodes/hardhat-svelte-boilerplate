<script lang="ts">
  import "@/styles/app.css";
  import { wallet } from "@/stores/wallet";
  import { Header } from "@/components/header";
  import { Modal } from "@/components/modal";
  import { Providers } from "@/components/providers";

  let isOpen = false;
  let error: string | undefined;

  function handleOpen() {
    isOpen = true;
  }
  function handleClose() {
    isOpen = false;
    error = undefined;
  }
  async function handleConnect(event: CustomEvent) {
    error = undefined;
    try {
      await wallet.connect(event.detail.walletName);
    } catch (error_: any) {
      error = error_ || "Something went wrong.";
    }
  }

  $: {
    if ($wallet.isConnected) {
      handleClose();
    }
  }
</script>

<Header account={$wallet.account} on:login={handleOpen} />

<main>
  <slot login={handleOpen} />

  <Modal {isOpen} on:close={handleClose}>
    <svelte:fragment slot="header">Connect wallet</svelte:fragment>
    <svelte:fragment slot="body">
      <Providers {error} on:connect={handleConnect} />
    </svelte:fragment>
  </Modal>
</main>
