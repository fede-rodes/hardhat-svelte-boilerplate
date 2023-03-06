<script lang="ts">
  import "@/styles/app.css";
  import { Header } from "@/components/header";
  import { WalletModal } from "@/components/wallet-modal";
</script>

<Header />

<main>
  <slot />

  <WalletModal />
</main>
