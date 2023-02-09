import { writable } from "svelte/store";
import type { ExternalProvider } from "@ethersproject/providers";

export type Data = {
  account: Address;
  injected: ExternalProvider;
};

const injected = window.ethereum;

// https://docs.metamask.io/guide/ethereum-provider.html#using-the-provider
function createStore() {
  const { subscribe, set } = writable<undefined | Data>();

  return {
    subscribe,
    connect: async () => {
      if (!injected?.isMetaMask) {
        throw new Error("MetaMask is not installed.");
      }

      const accounts = <Address[]>await injected.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length === 0) {
        throw new Error("No accounts found.");
      }

      set({
        account: accounts[0],
        injected,
      });
    },
    disconnect: () => {
      set(undefined);
    },
  };
}

export const metamask = createStore();

if (injected?.isMetaMask) {
  // Connect account on landing or reload
  // const accounts = (await window.ethereum.request({
  //   method: "eth_requestAccounts",
  // })) as Address[];

  // if (accounts.length > 0) {
  //   metamask.connect();
  // }

  // Disconnect on accounts or network change
  injected.on("accountsChanged", metamask.connect);
  injected.on("chainChanged", metamask.connect);
  injected.on("disconnect", metamask.disconnect);
}
