import { writable } from "svelte/store";
import type { Connexion } from "@typings/types";

const provider = window.ethereum;

// TODO: read MetaMask docs https://docs.metamask.io/guide/ethereum-provider.html#using-the-provider
function createStore() {
  const { subscribe, set, update } = writable<Connexion>({
    account: undefined,
    isConnected: false,
    error: undefined,
    loading: false,
  });

  return {
    subscribe,
    connect: async () => {
      try {
        if (!provider?.isMetaMask) {
          update((c) => ({
            ...c,
            error: new Error("MetaMask is not installed."),
          }));
          return;
        }

        update((c) => ({ ...c, loading: true }));

        const accounts = <Address[]>await provider.request({
          method: "eth_requestAccounts",
        });

        if (accounts.length === 0) {
          update((c) => ({
            ...c,
            error: new Error("No account found."),
            loading: false,
          }));
          return;
        }

        set({
          account: accounts[0],
          isConnected: true,
          error: undefined,
          loading: false,
        });
      } catch (error: unknown) {
        set({
          account: undefined,
          isConnected: false,
          error: new Error("Something went wrong."),
          loading: false,
        });
      }
    },
    disconnect: () => {
      set({
        account: undefined,
        isConnected: false,
        error: undefined,
        loading: false,
      });
    },
  };
}

export const metamask = createStore();

if (provider?.isMetaMask) {
  // Connect account on landing or reload
  // const accounts = (await window.ethereum.request({
  //   method: "eth_requestAccounts",
  // })) as Address[];

  // if (accounts.length > 0) {
  //   metamask.connect();
  // }

  // Disconnect on accounts changed
  provider.on("accountsChanged", metamask.disconnect);
}
