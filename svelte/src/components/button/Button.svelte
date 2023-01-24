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

  const buttonVariants = cva(
    ["flex", "items-center", "font-bold", "rounded-lg"],
    {
      variants: {
        intent: {
          primary: [
            "text-gray-900",
            "bg-gray-50",
            "hover:bg-gray-100",
            "dark:bg-gray-600",
            "dark:hover:bg-gray-500",
            "dark:text-white",
          ],
        },
        size: {
          small: ["text-sm", "p2"],
          medium: ["text-base", "p3"],
        },
        fullWidth: {
          true: ["w-full"],
        },
        disabled: {
          true: ["cursor-not-allowed", "bg-gray-100", "dark:bg-gray-500"],
        },
      },
    }
  );
</script>

<button
  type="button"
  class={buttonVariants({ intent, size, fullWidth, disabled })}
  {disabled}
  on:click
  {...$$restProps}
>
  <slot />
</button>
