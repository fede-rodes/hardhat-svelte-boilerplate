<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { metamask } from "../../stores/metamask";
  import { shortenAddress } from "../../utils/shorten-address";
  import svelteLogo from "../../assets/svelte.svg";
  import { Button } from "../button";

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("connect");
  }
</script>

<nav
  class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
>
  <div class="flex flex-wrap items-center justify-between">
    <a href="/" class="flex items-center">
      <img src={svelteLogo} class="h-6 mr-3 sm:h-9" alt="Svelte Logo" />
      <span
        class="self-center text-xl font-semibold whitespace-nowrap text-black dark:text-white hidden sm:block"
      >
        Brand
      </span>
    </a>
    {#if $metamask.account != null}
      {shortenAddress($metamask.account)}
    {:else}
      <Button type="button" size="md" on:click={handleClick}>
        Connect wallet
      </Button>
    {/if}
  </div>
</nav>
