import { writable } from "svelte/store";
import type { ExternalProvider } from "@ethersproject/providers";

const injected = window.ethereum;

// https://docs.metamask.io/guide/ethereum-provider.html#using-the-provider
function createStore() {
  const { subscribe, set } = writable<
    { injected: ExternalProvider; account: Address } | undefined
  >();

  return {
    subscribe,
    connect: async function (): Promise<void> {
      if (!injected?.isMetaMask) {
        throw new Error("MetaMask is not installed.");
      }

      const accounts = (await injected.request({
        method: "eth_requestAccounts",
      })) as Address[];

      if (accounts.length === 0) {
        throw new Error("No accounts found.");
      }

      set({
        injected,
        account: accounts[0],
      });
    },
    disconnect: function () {
      set(undefined);
    },
    switchChain: async function (chainId: number): Promise<void> {
      if (!injected?.isMetaMask) {
        throw new Error("MetaMask is not installed.");
      }

      await injected.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      });
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

  // Reconnect on accounts or network change
  injected.on("accountsChanged", metamask.connect);
  injected.on("chainChanged", metamask.connect);
  injected.on("disconnect", metamask.disconnect);
}
