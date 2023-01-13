import { writable } from "svelte/store";

export type Connexion = {
  account: string | undefined;
  connected: boolean;
  error: any;
  loading: boolean;
};

function createConnexion() {
  const { subscribe, set, update } = writable<Connexion>({
    account: undefined,
    connected: false,
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
            error: new Error("MetaMask is not in scope"),
          }));
          return;
        }

        update((c) => ({ ...c, loading: true }));

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        set({
          account: accounts[0],
          connected: true,
          error: undefined,
          loading: false,
        });
      } catch (error) {
        set({
          account: undefined,
          connected: false,
          error,
          loading: false,
        });
      }
    },
    // disconnect: () => update((n) => n - 1),
  };
}

export const connexion = createConnexion();
