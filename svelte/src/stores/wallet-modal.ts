import { writable } from "svelte/store";

/**
 * @summary Keeps track of wallet modal state.
 */
function createStore() {
  const { subscribe, set } = writable<{ isOpen: boolean }>({ isOpen: false });

  return {
    subscribe,
    open: (): void => {
      set({ isOpen: true });
    },
    close: (): void => {
      set({ isOpen: false });
    },
  };
}

export const walletModal = createStore();
