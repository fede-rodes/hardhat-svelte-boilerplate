import type { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

/**
 * Ethereum `Address`es in _ethers.js_ are represented as hexadecimal `string`s.
 * They always start with the `0x` prefix,
 * for example `0xbF115A5538290D234fA31e917241a58A20a847Bc`
 */
type Address = `0x${string}`;
