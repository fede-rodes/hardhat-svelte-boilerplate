import { writable } from "svelte/store";
// import type { providers } from "ethers";
// import { ethers } from "ethers";
import type { Connexion } from "@/typings/types";
import { metamask } from "@/stores/metamask";

// TODO
let ethers: any;

function createStore() {
  const { subscribe, set } = writable<Connexion>({
    account: undefined,
    isConnected: false,
    provider: undefined,
    chainId: undefined,
    loading: false,
  });

  // Update wallet store state based on MetaMask store changes
  metamask.subscribe(async (data) => {
    // No data present means MetaMask is disconnected
    if (ethers == null || data == null) {
      set({
        account: undefined,
        isConnected: false,
        provider: undefined,
        chainId: undefined,
        loading: false,
      });
      return;
    }

    // MetaMask is connected
    const provider = new ethers.providers.Web3Provider(data.injected);
    const network = await provider.getNetwork();

    set({
      provider,
      account: data.account,
      isConnected: true,
      chainId: network.chainId,
      loading: false,
    });
  });

  return {
    subscribe,
    connect: async (walletName: string): Promise<void> => {
      // Lazy load ethers
      if (ethers == null) {
        ethers = (await import("ethers")).ethers;
      }
      if (walletName === "MetaMask") {
        return metamask.connect();
      }
      throw new Error(`Ops! ${walletName} is not integrated yet.`);
    },
    disconnect: () => {
      metamask.disconnect();
    },
    switchChain: async (chainId: number): Promise<void> => {
      return metamask.switchChain(chainId);
    },
  };
}

export const wallet = createStore();
