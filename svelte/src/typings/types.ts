import type { Web3Provider } from "@ethersproject/providers";

export type Connexion = {
  account: Address | undefined;
  isConnected: boolean;
  provider: Web3Provider | undefined;
  chainId: number | undefined;
  loading: boolean;
};
