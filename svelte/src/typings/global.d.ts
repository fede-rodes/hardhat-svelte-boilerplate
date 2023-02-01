import type { ExternalProvider } from "@ethersproject/providers";

declare global {
  interface Window {
    ethereum?: ExternalProvider & {
      isMetaMask: true;
      request: (request: {
        method: string;
        params?: Array<any>;
      }) => Promise<any>;
      on: (eventName: string, callback: () => void) => void;
    };
  }

  type Address = `0x${string}`;
}
