<script lang="ts">
  import type { ComponentProps } from "svelte";
  import { walletModal } from "@/stores/wallet-modal";
  import { Button } from "@/components/button";

  type $$Props = ComponentProps<Button>;
</script>

<Button {...$$props} on:click={walletModal.open}>Connect wallet</Button>
