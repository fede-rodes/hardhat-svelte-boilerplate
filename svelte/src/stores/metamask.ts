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
          error: new Error("No accounts found."),
          loading: false,
        }));
        return;
      }

      update((c) => ({
        ...c,
        account: accounts[0],
        isConnected: true,
        loading: false,
      }));
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
