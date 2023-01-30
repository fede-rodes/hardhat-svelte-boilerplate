export type Connexion = {
  account: Address | undefined;
  isConnected: boolean;
  error: Error | undefined;
  loading: boolean;
};
