import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  paths: {
    artifacts: "./svelte/src/artifacts",
  },
  // See: https://hardhat.org/hardhat-network/docs/metamask-issue
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
};

export default config;
