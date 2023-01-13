<script lang="ts">
  import { connexion } from "../../stores/connexion";
  import metamaskIcon from "../../assets/metamask.svg";
  import coinbaseIcon from "../../assets/coinbase.svg";
  import operaWalletIcon from "../../assets/opera_wallet.svg";
  import walletConnectIcon from "../../assets/wallet_connect.svg";
  import formaticIcon from "../../assets/formatic.svg";
  import { Modal } from "../modal";

  const WALLETS = [
    { name: "MetaMask", icon: metamaskIcon, class: "h-4" },
    { name: "Coinbase Wallet", icon: coinbaseIcon, class: "h-5" },
    { name: "Opera Wallet", icon: operaWalletIcon, class: "h-5" },
    { name: "WalletConnect", icon: walletConnectIcon, class: "h-5" },
    { name: "Formatic", icon: formaticIcon, class: "h-4" },
  ];
</script>

<Modal id="crypto-modal" on:close {...$$props}>
  <svelte:fragment slot="header">
    <h3
      class="text-base font-semibold text-gray-900 lg:text-xl dark:text-white"
    >
      Connect wallet
    </h3>
  </svelte:fragment>
  <svelte:fragment slot="body">
    <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
      Connect with one of our available wallet providers or create a new one.
    </p>
    <ul class="my-4 space-y-3">
      {#each WALLETS as wallet}
        <li>
          <button
            type="button"
            class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            on:click={connexion.connect}
          >
            <img
              src={wallet.icon}
              class={wallet.class}
              alt={`${wallet.name} icon`}
            />
            <span class="flex-1 ml-3 whitespace-nowrap">{wallet.name}</span>
          </button>
        </li>
      {/each}
    </ul>
    <!-- <div>
      <a
        href="#"
        class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
      >
        <svg
          aria-hidden="true"
          class="w-3 h-3 mr-2"
          focusable="false"
          data-prefix="far"
          data-icon="question-circle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          ><path
            fill="currentColor"
            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
          /></svg
        >
        Why do I need to connect with my wallet?</a
      >
    </div> -->
    <!-- TODO: display connexion error -->
  </svelte:fragment>
</Modal>
