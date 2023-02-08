import { writable } from "svelte/store";
import type { Connexion } from "@typings/types";
import { metamask } from "@stores/metamask";

function createStore() {
  const { subscribe, set } = writable<Connexion>({
    account: undefined,
    isConnected: false,
    provider: undefined,
    chainId: undefined,
    error: undefined,
    loading: false,
  });

  let connectedWallet: string | undefined;

  metamask.subscribe(set);

  return {
    subscribe,
    connect: async (walletName: string) => {
      if (walletName === "MetaMask") {
        return metamask.connect(() => {
          connectedWallet = walletName;
        });
      }

      set({
        account: undefined,
        isConnected: false,
        provider: undefined,
        chainId: undefined,
        error: new Error(`Ops! ${walletName} is not integrated yet.`),
        loading: false,
      });
    },
    disconnect: () => {
      if (connectedWallet === "MetaMask") metamask.disconnect();
    },
  };
}

export const wallet = createStore();
