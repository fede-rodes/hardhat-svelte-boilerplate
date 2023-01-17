import type { ActionReturn } from "svelte/action";

type Attributes = {
  "on:outclick": (e: CustomEvent<boolean>) => void;
};

export function clickOutsideDialog(
  node: HTMLElement
): ActionReturn<any, Attributes> {
  const handleClick = (event: MouseEvent) => {
    if (node === event.target) {
      node.dispatchEvent(new CustomEvent("outclick"));
    }
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    },
  };
}
