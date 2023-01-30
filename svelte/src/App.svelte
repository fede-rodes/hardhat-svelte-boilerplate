<script lang="ts">
  import { onMount } from "svelte";
  import { ethers } from "ethers";
  import { Greeter } from "@contracts/greeter";
  import { wallet } from "@stores/wallet";
  import { Layout } from "@components/layout";

  let greet = "";

  onMount(async function () {
    if (window.ethereum == null) {
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const greeter = new Greeter(provider);

    greet = await greeter.greet_();
  });
</script>

<Layout>
  {#if $wallet.isConnected}
    Greeter.sol says: &ldquo;{greet}&rdquo;
  {:else}
    <h3>Connect wallet</h3>
  {/if}
</Layout>
