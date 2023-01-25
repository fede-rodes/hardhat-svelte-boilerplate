<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import type { VariantProps } from "class-variance-authority";
  import { cva } from "class-variance-authority";

  type ButtonVariantProps = VariantProps<typeof buttonVariants>;

  export let intent: ButtonVariantProps["intent"] = "primary";
  export let size: ButtonVariantProps["size"] = "medium";
  export let fullWidth: ButtonVariantProps["fullWidth"] = false;
  export let disabled: ButtonVariantProps["disabled"] = false;
  export let klass = "";

  type $$Props = HTMLButtonAttributes &
    ButtonVariantProps & {
      klass?: string;
    };

  const buttonVariants = cva(["font-bold", "rounded-lg"], {
    variants: {
      intent: {
        primary: ["text-body", "bg-primary", "hover:bg-primary-100"],
      },
      size: {
        small: ["text-sm", "py-2", "px-4"],
        medium: ["text-base", "py-3", "px-6"],
      },
      fullWidth: {
        true: ["w-full"],
      },
      disabled: {
        true: ["cursor-not-allowed", "bg-primary-100"],
      },
    },
  });
</script>

<button
  type="button"
  class={`${buttonVariants({ intent, size, fullWidth, disabled })} ${klass}`}
  {disabled}
  on:click
  {...$$restProps}
>
  <slot />
</button>
