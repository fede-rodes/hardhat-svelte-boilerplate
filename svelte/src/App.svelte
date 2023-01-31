<script lang="ts">
  import { onMount } from "svelte";
  import { ethers } from "ethers";
  import { Greeter } from "@contracts/greeter";
  import { wallet } from "@stores/wallet";
  import { Layout } from "@components/layout";
  import { Button } from "@components/button";

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

<Layout let:login>
  {#if $wallet.isConnected}
    <p class="text-body">Greeter.sol says: &ldquo;{greet}&rdquo;</p>
  {:else}
    <Button on:click={login}>Connect wallet</Button>
  {/if}
</Layout>
