<script lang="ts">
  import { wallet } from "@/stores/wallet";
  import { walletModal } from "@/stores/wallet-modal";
  import { Modal } from "@/components/modal";
  import { WalletProviders } from "@/components/wallet-providers";

  let error: string | undefined;

  function handleClose() {
    walletModal.close();
    error = undefined;
  }
  async function handleConnect(event: CustomEvent) {
    error = undefined;
    try {
      await wallet.connect(event.detail.walletName);
    } catch (error_: any) {
      error = error_?.message || "Something went wrong.";
    }
  }

  $: {
    if ($wallet.isConnected) {
      handleClose();
    }
  }
</script>

<Modal isOpen={$walletModal.isOpen} on:close={handleClose}>
  <svelte:fragment slot="header">Connect wallet</svelte:fragment>
  <svelte:fragment slot="body">
    <p class="text-sm text-accent">
      Connect with one of our available wallet providers.
    </p>

    <div class="my-4">
      <WalletProviders on:connect={handleConnect} />
    </div>

    {#if error != null}
      <p class="text-sm text-danger">
        ERROR: {error}
      </p>
    {/if}
  </svelte:fragment>
</Modal>
