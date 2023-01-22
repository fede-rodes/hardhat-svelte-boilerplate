<script lang="ts">
  import type { ComponentProps } from "svelte";
  import { Button } from ".";

  type $$Props = ComponentProps<Button>;

  export let intent: $$Props["intent"];
  export let size: $$Props["size"];
  export let fullWidth: $$Props["fullWidth"];
</script>

<Button {intent} {size} {fullWidth}>I&apos;m the label</Button>
