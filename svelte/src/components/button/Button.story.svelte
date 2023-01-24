<script lang="ts">
  import type { ComponentProps } from "svelte";
  import { Button } from ".";

  type $$Props = ComponentProps<Button>;
</script>

<Button {...$$props}>I&apos;m the label</Button>
