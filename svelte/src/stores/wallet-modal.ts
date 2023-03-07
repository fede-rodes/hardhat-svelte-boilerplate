import { writable } from "svelte/store";

/**
 * @summary Keeps track of wallet modal open/close state.
 */
function createStore() {
  const { subscribe, set } = writable<{ isOpen: boolean }>({ isOpen: false });

  return {
    subscribe,
    open: function (): void {
      set({ isOpen: true });
    },
    close: function (): void {
      set({ isOpen: false });
    },
  };
}

export const walletModal = createStore();
