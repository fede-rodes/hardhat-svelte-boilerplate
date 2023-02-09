<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { shortenAddress } from "@utils/shorten-address";
  import SvelteLogo from "@assets/Svelte.svg";
  import { DarkMode } from "@components/dark-mode";
  import { Button } from "@components/button";

  export let account: Address | undefined;

  const dispatch = createEventDispatcher();

  function handleLogin() {
    dispatch("login");
  }
</script>

<nav
  class="
    fixed top-0 left-0 h-16 w-full z-20
    bg-background border-b border-muted
    px-2 sm:px-4 py-2
    flex flex-wrap items-center justify-between
  "
>
  <a href="/">
    <img src={SvelteLogo} class="h-6 sm:h-9" alt="Svelte logo" />
  </a>

  <div class="flex items-center space-x-3">
    <DarkMode />
    {#if account != null}
      <span>{shortenAddress(account)}</span>
    {:else}
      <Button size="small" on:click={handleLogin}>Connect wallet</Button>
    {/if}
  </div>
</nav>
