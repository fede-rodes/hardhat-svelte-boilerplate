<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import svelteLogo from "../../assets/svelte.svg";
  import linkIcon from "../../assets/link.svg";

  const dispatch = createEventDispatcher();

  function handleConnect() {
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
        class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
      >
        Brand
      </span>
    </a>
    <button
      type="button"
      data-modal-target="crypto-modal"
      data-modal-toggle="crypto-modal"
      class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
      on:click={handleConnect}
    >
      <img src={linkIcon} class="w-4 h-4 mr-2" alt="Link icon" />
      Connect wallet
    </button>
  </div>
</nav>
