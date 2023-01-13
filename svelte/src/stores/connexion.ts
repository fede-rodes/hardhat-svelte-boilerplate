import { writable } from "svelte/store";
import type { Address } from "../globals";

// TODO: change name to metamask
export type Connexion = {
  account: Address | undefined;
  connected: boolean;
  error: any;
  loading: boolean;
};

// TODO: createStore
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
            error: new Error("MetaMask is not installed"),
          }));
          return;
        }

        update((c) => ({ ...c, loading: true }));

        const accounts = (await window.ethereum.request({
          method: "eth_requestAccounts",
        })) as Address[];

        if (accounts == null || accounts.length === 0) {
          update((c) => ({
            ...c,
            error: new Error("No account found"),
          }));
          return;
        }

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
    disconnect: () => {
      set({
        account: undefined,
        connected: false,
        error: undefined,
        loading: false,
      });
    },
  };
}

export const connexion = createConnexion();

// TODO
// Runs whenever the user changes account state
// window.ethereum.on('accountsChanged', async () => {
//     initialise();
// });
// Source: https://stackoverflow.com/questions/67856902/how-to-logout-of-metamask-account-using-web3-js
