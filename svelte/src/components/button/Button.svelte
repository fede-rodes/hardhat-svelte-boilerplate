<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import type { VariantProps } from "class-variance-authority";
  import { cva } from "class-variance-authority";

  type ButtonVariantProps = VariantProps<typeof buttonVariants>;

  export let intent: ButtonVariantProps["intent"] = "primary";
  export let size: ButtonVariantProps["size"] = "medium";
  export let fullWidth: ButtonVariantProps["fullWidth"] = false;
  export let disabled: ButtonVariantProps["disabled"] = false;

  type $$Props = HTMLButtonAttributes & ButtonVariantProps;

  const buttonVariants = cva(["font-bold"], {
    variants: {
      intent: {
        primary: ["text-body", "bg-primary", "hover:bg-primary-100"],
      },
      size: {
        small: ["text-sm", "p-2", "rounded-lg"],
        medium: ["text-base", "py-3", "px-6", "rounded-lg"],
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
  {disabled}
  on:click
  {...$$restProps}
  class={buttonVariants({
    intent,
    size,
    fullWidth,
    disabled,
    class: $$props.class,
  })}
>
  <slot />
</button>
