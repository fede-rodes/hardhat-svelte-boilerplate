<script lang="ts">
  import type { ComponentProps } from "svelte";
  import { walletModal } from "@/stores/wallet-modal";
  import { Button } from "@/components/button";

  type $$Props = ComponentProps<Button>;
</script>

<Button {...$$props} disabled={$walletModal.isOpen} on:click={walletModal.open}>
  Connect wallet
</Button>
