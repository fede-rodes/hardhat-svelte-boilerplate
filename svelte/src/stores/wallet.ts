import { writable } from "svelte/store";
import type { Connexion } from "@typings/types";
import { metamask } from "@stores/metamask";

function createStore() {
  const { subscribe, set } = writable<Connexion>({
    account: undefined,
    isConnected: false,
    error: undefined,
    loading: false,
  });

  metamask.subscribe(set);

  return {
    subscribe,
    connect: async (walletName: string) => {
      if (walletName === "MetaMask") {
        return metamask.connect();
      }
      set({
        account: undefined,
        isConnected: false,
        error: new Error(`Ops! ${walletName} is not integrated yet.`),
        loading: false,
      });
    },
    disconnect: () => {
      metamask.disconnect();
    },
  };
}

export const wallet = createStore();
