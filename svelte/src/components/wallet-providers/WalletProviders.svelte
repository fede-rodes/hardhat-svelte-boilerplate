<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { WalletId } from "@/typings/types";
  import MetamaskIcon from "@/assets/Metamask.svg";
  import CoinbaseIcon from "@/assets/Coinbase.svg";
  import OperaWalletIcon from "@/assets/OperaWallet.svg";
  import WalletConnectIcon from "@/assets/WalletConnect.svg";
  import FormaticIcon from "@/assets/Formatic.svg";
  import { Button } from "@/components/button";

  export let disabled = false;

  const WALLET_PROVIDERS: {
    id: WalletId;
    label: string;
    icon: string;
  }[] = [
    { id: "metamask", label: "MetaMask", icon: MetamaskIcon },
    { id: "coinbase_wallet", label: "Coinbase Wallet", icon: CoinbaseIcon },
    { id: "opera_wallet", label: "Opera Wallet", icon: OperaWalletIcon },
    { id: "wallet_connect", label: "WalletConnect", icon: WalletConnectIcon },
    { id: "formatic", label: "Formatic", icon: FormaticIcon },
  ];

  const dispatch = createEventDispatcher();

  async function handleConnect(walletId: WalletId) {
    dispatch("connect", { walletId });
  }
</script>

{#each WALLET_PROVIDERS as { id, label, icon }}
  <Button
    fullWidth
    {disabled}
    class="flex items-center justify-center space-x-3"
    on:click={() => {
      handleConnect(id);
    }}
  >
    <img src={icon} class="h-5" alt={`${label} icon`} />

    <span class="text-center">{label}</span>
  </Button>
{/each}
