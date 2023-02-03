import { writable } from "svelte/store";
import { ethers } from "ethers";
import type { Connexion } from "@typings/types";
import { network } from "../config";

const injected = window.ethereum;

// TODO: read MetaMask docs https://docs.metamask.io/guide/ethereum-provider.html#using-the-provider
function createStore() {
  const { subscribe, set, update } = writable<Connexion>({
    account: undefined,
    isConnected: false,
    provider: undefined,
    wrongNetwork: false,
    error: undefined,
    loading: false,
  });

  return {
    subscribe,
    connect: async (callback?: () => void) => {
      try {
        if (!injected?.isMetaMask) {
          update((c) => ({
            ...c,
            error: new Error("MetaMask is not installed."),
          }));
          return;
        }

        const provider = new ethers.providers.Web3Provider(injected);

        update((c) => ({
          ...c,
          provider,
          loading: true,
        }));

        const accounts = <Address[]>await injected.request({
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

        const network_ = await provider.getNetwork();

        update((c) => ({
          ...c,
          account: accounts[0],
          isConnected: true,
          wrongNetwork: network.chainId === network_.chainId,
          loading: false,
        }));

        // Run arbitrary logic after successful connexion
        if (typeof callback === "function") {
          callback();
        }
      } catch (error) {
        set({
          account: undefined,
          isConnected: false,
          provider: undefined,
          wrongNetwork: false,
          error: new Error(error?.message || "Something went wrong."),
          loading: false,
        });
        return;
      }
    },
    disconnect: () => {
      set({
        account: undefined,
        isConnected: false,
        provider: undefined,
        wrongNetwork: false,
        error: undefined,
        loading: false,
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

  // Disconnect on accounts or network change
  injected.on("accountsChanged", metamask.connect);
  injected.on("chainChanged", metamask.connect);
}
