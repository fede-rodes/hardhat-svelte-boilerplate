<script lang="ts">
  import { onMount } from "svelte";
  import { ethers } from "ethers";
  import { Greeter } from "@contracts/greeter";
  import { wallet } from "@stores/wallet";
  import { Layout } from "@components/layout";
  import { Button } from "@components/button";
  import { network } from "./config";

  let greet = "";
  let newGreeting = "";
  let disabled = false;

  async function getGreeting() {
    try {
      const provider = new ethers.providers.JsonRpcProvider(network.rpc[0]);
      const greeter = new Greeter(provider);

      greet = await greeter.greet_();
    } catch (error) {
      // TODO
    }
  }

  async function handleSubmit() {
    if ($wallet.provider == null) {
      return;
    }

    disabled = true;

    try {
      const signer = $wallet.provider.getSigner();
      const greeter = new Greeter(signer);

      await greeter.setGreeting_(newGreeting);
      await getGreeting();
    } catch (error) {
      // TODO
    } finally {
      disabled = false;
    }
  }

  onMount(getGreeting);
</script>

<Layout let:login>
  <h3 class="text-base lg:text-xl text-body font-semibold text-center">
    Greeter.sol says: &ldquo;{greet}&rdquo;
  </h3>
  <div class="h-8" />
  <form class="flex flex-col space-y-3" on:submit|preventDefault={handleSubmit}>
    <input
      type="text"
      id="greeting"
      bind:value={newGreeting}
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Add a new greeting..."
      required
      disabled={!$wallet.isConnected || $wallet.wrongNetwork}
    />
    {#if $wallet.isConnected && $wallet.wrongNetwork}
      <Button type="button" {disabled}>Wrong network</Button>
    {:else if $wallet.isConnected}
      <Button type="submit" {disabled}>Update greeting</Button>
    {:else}
      <Button on:click={login}>Connect wallet</Button>
    {/if}
  </form>
</Layout>
