import { writable } from "svelte/store";

export type Connexion = {
  account: Address | undefined;
  isConnected: boolean;
  error: any;
  loading: boolean;
};

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
        if (window.ethereum == null) {
          update((c) => ({
            ...c,
            error: new Error("MetaMask is not installed"),
          }));
          return;
        }

        update((c) => ({ ...c, loading: true }));

        const accounts = (await window.ethereum.request({
          method: "eth_requestAccounts",
        })) as Address[];

        if (accounts.length === 0) {
          update((c) => ({
            ...c,
            error: new Error("No account found"),
          }));
          return;
        }

        set({
          account: accounts[0],
          isConnected: true,
          error: undefined,
          loading: false,
        });
      } catch (error) {
        set({
          account: undefined,
          isConnected: false,
          error,
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

if (window.ethereum != null) {
  // Connect account on landing or reload
  // const accounts = (await window.ethereum.request({
  //   method: "eth_requestAccounts",
  // })) as Address[];

  // if (accounts.length > 0) {
  //   metamask.connect();
  // }

  // Disconnect on accounts changed
  window.ethereum.on("accountsChanged", async () => {
    metamask.disconnect();
  });
}
