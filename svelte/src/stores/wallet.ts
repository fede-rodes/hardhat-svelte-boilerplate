import { writable } from "svelte/store";
import type { Web3Provider } from "@ethersproject/providers";
import type { WalletId } from "@/typings/types";
import { metamask } from "@/stores/metamask";

type State = {
  provider: Web3Provider | undefined;
  loading: boolean;
  error: string | undefined;
  isConnected: boolean;
  account: Address | undefined;
  chainId: number | undefined;
};

// TODO
let ethers: any;

const initialState: State = {
  provider: undefined,
  loading: false,
  error: undefined,
  isConnected: false,
  account: undefined,
  chainId: undefined,
};

function createStore() {
  const { subscribe, set, update } = writable<State>({ ...initialState });

  let connectedWalletId: WalletId | undefined;

  // Update wallet store based on MetaMask store changes.
  metamask.subscribe(async (data) => {
    // No data present means MetaMask got disconnected.
    if (ethers == null || data == null) {
      set({ ...initialState });
      connectedWalletId = undefined;
      return;
    }

    // MetaMask is connected.
    try {
      const provider = new ethers.providers.Web3Provider(data.injected);
      const network = await provider.getNetwork();

      set({
        provider,
        loading: false,
        error: undefined,
        isConnected: true,
        account: data.account,
        chainId: network.chainId,
      });
    } catch (error) {
      update((s) => ({
        ...s,
        error: error?.message || "Unknown error occurred.",
      }));
    }
  });

  return {
    subscribe,
    connect: async function (walletId: WalletId): Promise<void> {
      update((s) => ({ ...s, loading: true, error: undefined }));

      try {
        // Lazy load ethers
        if (ethers == null) {
          ethers = (await import("ethers")).ethers;
        }

        if (walletId != "metamask") {
          update((s) => ({
            ...s,
            loading: false,
            error: `Ops! ${walletId} has not been integrated yet.`,
          }));
          return;
        }

        if (walletId === "metamask") {
          await metamask.connect();
          connectedWalletId = "metamask";
        }
      } catch (error) {
        update((s) => ({
          ...s,
          error: error?.message || "Unknown error occurred.",
        }));
      } finally {
        update((s) => ({ ...s, loading: false }));
      }
    },
    disconnect: function (): void {
      if (connectedWalletId === "metamask") {
        metamask.disconnect();
      }
    },
    switchChain: async function (chainId: number): Promise<void> {
      update((s) => ({ ...s, loading: true, error: undefined }));

      try {
        if (connectedWalletId === "metamask") {
          await metamask.switchChain(chainId);
        }
      } catch (error) {
        update((s) => ({
          ...s,
          error: error?.message || "Unknown error occurred.",
        }));
      } finally {
        update((s) => ({ ...s, loading: false }));
      }
    },
  };
}

export const wallet = createStore();
