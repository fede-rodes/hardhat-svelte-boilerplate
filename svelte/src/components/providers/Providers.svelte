<script lang="ts" context="module">
  import metamaskIcon from "@assets/metamask.svg";
  import coinbaseIcon from "@assets/coinbase.svg";
  import operaWalletIcon from "@assets/opera_wallet.svg";
  import walletConnectIcon from "@assets/wallet_connect.svg";
  import formaticIcon from "@assets/formatic.svg";

  export const WALLETS = [
    { name: "MetaMask", icon: metamaskIcon },
    { name: "Coinbase Wallet", icon: coinbaseIcon },
    { name: "Opera Wallet", icon: operaWalletIcon },
    { name: "WalletConnect", icon: walletConnectIcon },
    { name: "Formatic", icon: formaticIcon },
  ];
</script>

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Button } from "@components/button";

  export let error: string | undefined;

  const dispatch = createEventDispatcher();

  function handleClick(provider: string) {
    dispatch("connect", {
      provider,
    });
  }
</script>

<p class="text-sm font-normal text-accent">
  Connect with one of our available wallet providers.
</p>
<ul class="my-4 space-y-3">
  {#each WALLETS as { name, icon }}
    <li>
      <Button
        fullWidth
        klass="flex items-center space-x-3"
        on:click={() => {
          handleClick(name);
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
  <p class="text-sm font-normal text-danger">
    ERROR: {error}
  </p>
{/if}
