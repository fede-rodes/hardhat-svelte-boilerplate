<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { shortenAddress } from "$utils/shorten-address";
  import svelteLogo from "$assets/svelte.svg";
  import { Button } from "$components/button";

  export let account: Address | undefined;

  const dispatch = createEventDispatcher();

  function handleLogin() {
    dispatch("login");
  }
</script>

<nav
  class="
    fixed top-0 left-0 h-16 w-full z-20
  bg-white border-b border-gray-200
  dark:bg-gray-900 dark:border-gray-600
    px-2 sm:px-4 py-2.5
    flex flex-wrap items-center justify-between
  "
>
  <a href="/">
    <img src={svelteLogo} class="h-6 sm:h-9" alt="Svelte Logo" />
  </a>

  {#if account != null}
    {shortenAddress(account)}
  {:else}
    <Button size="small" on:click={handleLogin}>Connect wallet</Button>
  {/if}
</nav>
