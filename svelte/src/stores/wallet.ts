import { writable } from "svelte/store";
import { ethers } from "ethers";
import type { Connexion } from "@/typings/types";
import { metamask } from "@/stores/metamask";

function createStore() {
  const { subscribe, set } = writable<Connexion>({
    account: undefined,
    isConnected: false,
    provider: undefined,
    chainId: undefined,
    loading: false,
  });

  metamask.subscribe(async (data) => {
    if (data == null) return;

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
    connect: async (walletName: string) => {
      if (walletName === "MetaMask") {
        return metamask.connect();
      }
      throw new Error(`Ops! ${walletName} is not integrated yet.`);
    },
    disconnect: () => {
      set({
        account: undefined,
        isConnected: false,
        provider: undefined,
        chainId: undefined,
        loading: false,
      });
    },
  };
}

export const wallet = createStore();
