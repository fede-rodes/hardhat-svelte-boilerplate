<script lang="ts">
  import "./app.css";
  import { Header } from "./components/header";
  import { Wallet } from "./components/wallet";

  /** Connect modal state */
  let isOpen = false;

  function handleConnect() {
    isOpen = true;
  }
</script>

<Header on:connect={handleConnect} />

<main>
  <!-- Main modal -->
  <div
    id="crypto-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
  >
    <div class="relative w-full h-full max-w-md md:h-auto">
      <Wallet />
    </div>
  </div>
</main>
