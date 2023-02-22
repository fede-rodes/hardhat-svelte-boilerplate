<script lang="ts">
  import { onMount } from "svelte";
  // import { ethers } from "ethers";
  import { Greeter } from "@/contracts/greeter";
  import { wallet } from "@/stores/wallet";
  import { Layout } from "@/components/layout";
  import { Button } from "@/components/button";
  import { chain } from "./config";

  let ethers: any;
  let greet = "";
  let newGreeting = "";
  let disabled = false;
  let error = "";

  async function getGreeting() {
    if (ethers == null) return;

    error = "";

    try {
      const provider = new ethers.providers.JsonRpcProvider(chain.rpc[0]);
      const greeter = new Greeter(provider);

      greet = await greeter.greet_();
    } catch (error_: any) {
      error = error_?.message || "Something went wrong when querying greeting";
    }
  }

  async function handleSubmit() {
    if ($wallet.provider == null) return;

    disabled = true;
    error = "";

    try {
      const signer = $wallet.provider.getSigner();
      const greeter = new Greeter(signer);

      await greeter.setGreeting_(newGreeting);
      await getGreeting();
    } catch (error_: any) {
      error =
        error_?.message || "Something went wrong when setting a new greeting";
    } finally {
      disabled = false;
    }
  }

  async function handleSwitch() {
    error = "";

    try {
      await wallet.switchChain(chain.chainId);
    } catch (error_: any) {
      error = error_?.message || "Something went wrong when switching chains";
    }
  }

  onMount(async () => {
    ethers = (await import("ethers")).ethers;
    await getGreeting();
  });
</script>

<Layout let:login>
  <h3 class="text-center">
    Greeter.sol says: &ldquo;{greet}&rdquo;
  </h3>

  <form
    class="flex flex-col space-y-3 my-8"
    on:submit|preventDefault={handleSubmit}
  >
    <input
      type="text"
      id="greeting"
      bind:value={newGreeting}
      placeholder="Add a new greeting..."
      required
      disabled={!$wallet.isConnected || $wallet.chainId != chain.chainId}
    />

    {#if $wallet.isConnected && $wallet.chainId !== chain.chainId}
      <Button intent="danger" on:click={handleSwitch}>Wrong network</Button>
    {:else if $wallet.isConnected}
      <Button type="submit" intent="primary" {disabled}>Update greeting</Button>
    {:else}
      <Button intent="primary" on:click={login}>Connect wallet</Button>
    {/if}

    {#if error != null && error.length > 0}
      <p class="text-danger">{error}</p>
    {/if}
  </form>

  <p class="text-center">Chain: {chain.name}</p>
</Layout>
