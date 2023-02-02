require("dotenv").config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  paths: {
    artifacts: "./svelte/src/artifacts",
  },
  networks: {
    hardhat: {
      // See: https://hardhat.org/hardhat-network/docs/metamask-issue
      chainId: 1337,
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts:
        process.env.GOERLI_PRIVATE_KEY != null
          ? [process.env.GOERLI_PRIVATE_KEY]
          : [],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
