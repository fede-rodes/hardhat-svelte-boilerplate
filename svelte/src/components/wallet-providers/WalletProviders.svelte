<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import MetamaskIcon from "@/assets/Metamask.svg";
  import CoinbaseIcon from "@/assets/Coinbase.svg";
  import OperaWalletIcon from "@/assets/OperaWallet.svg";
  import WalletConnectIcon from "@/assets/WalletConnect.svg";
  import FormaticIcon from "@/assets/Formatic.svg";
  import { Button } from "@/components/button";

  const WALLET_PROVIDERS = [
    { name: "MetaMask", icon: MetamaskIcon },
    { name: "Coinbase Wallet", icon: CoinbaseIcon },
    { name: "Opera Wallet", icon: OperaWalletIcon },
    { name: "WalletConnect", icon: WalletConnectIcon },
    { name: "Formatic", icon: FormaticIcon },
  ];

  const dispatch = createEventDispatcher();

  async function handleConnect(walletName: string) {
    dispatch("connect", {
      walletName,
    });
  }
</script>

<ul class="space-y-3">
  {#each WALLET_PROVIDERS as { name, icon }}
    <li>
      <Button
        fullWidth
        class="flex items-center justify-center space-x-3"
        on:click={() => {
          handleConnect(name);
        }}
      >
        <img src={icon} class="h-5" alt={`${name} icon`} />

        <span class="text-center">{name}</span>
      </Button>
    </li>
  {/each}
</ul>
