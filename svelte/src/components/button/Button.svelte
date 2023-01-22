<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import type { VariantProps } from "class-variance-authority";
  import { cva } from "class-variance-authority";

  type ButtonVariantProps = Required<VariantProps<typeof buttonVariants>>;

  export let intent: ButtonVariantProps["intent"];
  export let size: ButtonVariantProps["size"];
  export let fullWidth: ButtonVariantProps["fullWidth"];

  type $$Props = HTMLButtonAttributes & ButtonVariantProps;

  const buttonVariants = cva(
    ["flex", "items-center", "font-bold", "rounded-lg", "hover:shadow"],
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
        // disabled
        fullWidth: {
          true: ["w-full"],
        },
      },
      defaultVariants: {
        intent: "primary",
        size: "medium",
      },
    }
  );
</script>

<button
  class={buttonVariants({ intent, size, fullWidth })}
  on:click
  {...$$restProps}
>
  <slot />
</button>
