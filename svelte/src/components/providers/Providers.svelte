<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import MetamaskIcon from "@/assets/Metamask.svg";
  import CoinbaseIcon from "@/assets/Coinbase.svg";
  import OperaWalletIcon from "@/assets/OperaWallet.svg";
  import WalletConnectIcon from "@/assets/WalletConnect.svg";
  import FormaticIcon from "@/assets/Formatic.svg";
  import { Button } from "@/components/button";

  const WALLETS = [
    { name: "MetaMask", icon: MetamaskIcon },
    { name: "Coinbase Wallet", icon: CoinbaseIcon },
    { name: "Opera Wallet", icon: OperaWalletIcon },
    { name: "WalletConnect", icon: WalletConnectIcon },
    { name: "Formatic", icon: FormaticIcon },
  ];

  export let error: string | undefined;

  const dispatch = createEventDispatcher();

  async function handleConnect(walletName: string) {
    dispatch("connect", {
      walletName,
    });
  }
</script>

<p class="text-sm text-accent">
  Connect with one of our available wallet providers.
</p>

<ul class="my-4 space-y-3">
  {#each WALLETS as { name, icon }}
    <li>
      <Button
        fullWidth
        class="flex items-center space-x-3"
        on:click={() => {
          handleConnect(name);
        }}
      >
        <img src={icon} class="h-5" alt={`${name} icon`} />

        <span class="flex-1 text-center">{name}</span>

        <div class="h-5 w-5" />
      </Button>
    </li>
  {/each}
</ul>

{#if error != null}
  <p class="text-sm text-danger">
    ERROR: {error}
  </p>
{/if}
