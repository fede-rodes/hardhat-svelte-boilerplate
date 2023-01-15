// import type { Action, ActionReturn } from "svelte/types/runtime/action";

// export const clickOutside: Action<HTMLDivElement, undefined> = (node) => {
//   // export function clickOutside(node: HTMLElement): ActionReturn<undefined> {
//   const handleClick = (event) => {
//     if (!node.contains(event.target)) {
//       node.dispatchEvent(new CustomEvent("outclick"));
//     }
//   };

//   document.addEventListener("click", handleClick, true);

//   return {
//     destroy() {
//       document.removeEventListener("click", handleClick, true);
//     },
//   };
// };
export function clickOutside(node: HTMLElement): { destroy: () => void } {
  const handleClick = (event: MouseEvent) => {
    if (!node.contains(event.target as HTMLElement)) {
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
