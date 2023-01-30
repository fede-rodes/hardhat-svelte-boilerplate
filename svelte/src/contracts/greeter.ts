import { Contract, providers } from "ethers";
import type { Signer } from "ethers";
import * as artifact from "@artifacts/contracts/Greeter.sol/Greeter.json";

const GREETER_CONTRACT_ADDRESS = import.meta.env.VITE_GREETER_CONTRACT_ADDRESS;

console.log(GREETER_CONTRACT_ADDRESS);

export class Greeter extends Contract {
  constructor(signerOrProvider?: providers.Provider | Signer) {
    super(GREETER_CONTRACT_ADDRESS, artifact.abi, signerOrProvider);
  }

  async greet_(): Promise<string> {
    return this.greet();
  }

  async setGreeting_(greeting: string): Promise<void> {
    const setGreetingTx = await this.setGreeting(greeting);
    return setGreetingTx.wait();
  }
}
