<script lang="ts">
  import { onMount } from "svelte";
  import { ethers } from "ethers";
  import { Greeter } from "@contracts/greeter";
  import { wallet } from "@stores/wallet";
  import { Layout } from "@components/layout";
  import { Button } from "@components/button";

  let greet = "";
  let newGreeting = "";
  let disabled = false;

  onMount(async function () {
    if (window.ethereum == null) {
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const greeter = new Greeter(provider);

      greet = await greeter.greet_();
    } catch (error) {
      // TODO
    }
  });

  async function handleSubmit() {
    if (window.ethereum == null) {
      return;
    }

    disabled = true;

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const greeter = new Greeter(signer);

      await greeter.setGreeting_(newGreeting);
    } catch (error) {
      // TODO
    } finally {
      disabled = false;
    }
  }
</script>

<Layout let:login>
  {#if $wallet.isConnected}
    <p class="text-body">Greeter.sol says: &ldquo;{greet}&rdquo;</p>

    <form
      class="flex flex-col space-y-3"
      on:submit|preventDefault={handleSubmit}
    >
      <input
        type="text"
        bind:value={newGreeting}
        class="border border-red-100"
      />
      <Button type="submit" {disabled}>Update greeting</Button>
    </form>
  {:else}
    <Button on:click={login}>Connect wallet</Button>
  {/if}
</Layout>
