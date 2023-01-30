/**
 * @link https://github.com/ethereum-lists/chains
 */
export const NETWORKS = {
  1: {
    name: "Ethereum Mainnet",
    chain: "ETH",
    rpc: ["https://mainnet.infura.io/v3/${INFURA_API_KEY}"],
    faucets: [],
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    features: [{ name: "EIP155" }, { name: "EIP1559" }],
    infoURL: "https://ethereum.org",
    shortName: "eth",
    chainId: 1,
    networkId: 1,
    icon: "ethereum",
    explorers: [
      {
        name: "etherscan",
        url: "https://etherscan.io",
        icon: "etherscan",
        standard: "EIP3091",
      },
    ],
  },
  1337: {
    name: "Geth Testnet",
    title: "Go Ethereum (Geth) Private Testnet",
    chain: "ETH",
    rpc: ["http://127.0.0.1:8545"],
    faucets: [],
    nativeCurrency: {
      name: "Geth Testnet Ether",
      symbol: "ETH",
      decimals: 18,
    },
    infoURL: "https://geth.ethereum.org",
    shortName: "geth",
    chainId: 1337,
    networkId: 1337,
  },
};
