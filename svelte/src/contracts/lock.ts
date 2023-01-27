import { Contract, providers, utils, BigNumber } from "ethers";
import type { Signer } from "ethers";
import * as artifact from "@artifacts/contracts/Lock.sol/Lock.json";

const LOCK_CONTRACT_ADDRESS = import.meta.env.VITE_LOCK_CONTRACT_ADDRESS;

export class Lock extends Contract {
  constructor(signerOrProvider?: providers.Provider | Signer) {
    super(LOCK_CONTRACT_ADDRESS, artifact.abi, signerOrProvider);
  }

  /**
   * Query ETH to TTD exchange rate.
   * @returns string representing the amount of TTD
   * that you can buy with 1 ETH.
   */
  async getETH2TTD(): Promise<string> {
    // Amount of TTD that you can buy with 1 ETH measured in
    // cTTD units (0.01 TTD = cTTD).
    const rate = (await this.BUY_RATE()) as BigNumber;
    const decimals = await token.getDecimals();
    return utils.formatUnits(rate, decimals);
  }

  /**
   * Query TTD to ETH exchange rate.
   * @returns string representing the fraction of ETH
   * that you can buy with 1 TTD.
   */
  async getTTD2ETH(): Promise<string> {
    // Amount of ETH that you get when selling 1 TTD
    // measured in wei.
    const rate = (await this.SELL_RATE()) as BigNumber;
    return utils.formatEther(rate);
  }

  /**
   * Query total buys.
   * @returns string representing the amount of buys
   * performed on the DEX.
   */
  async getTotalBuys(): Promise<string> {
    const count = (await this.buysCount()) as BigNumber;
    return count.toString();
  }

  /**
   * Query total sells.
   * @returns string representing the amount of sells
   * performed on the DEX.
   */
  async getTotalSells(): Promise<string> {
    const count = (await this.sellsCount()) as BigNumber;
    return count.toString();
  }
}
