const CHAIN_ID = import.meta.env.VITE_CHAIN_ID;
const INFURA_API_KEY = import.meta.env.VITE_INFURA_API_KEY;

/**
 * @link https://github.com/ethereum-lists/chains
 */
export const NETWORKS = {
  1: {
    name: "Ethereum Mainnet",
    chain: "ETH",
    rpc: [`https://mainnet.infura.io/v3/${INFURA_API_KEY}`],
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
  5: {
    name: "Goerli",
    chain: "ETH",
    rpc: [`https://goerli.infura.io/v3/${INFURA_API_KEY}`],
    faucets: [
      "http://fauceth.komputing.org?chain=5&address=${ADDRESS}",
      "https://goerli-faucet.slock.it?address=${ADDRESS}",
      "https://faucet.goerli.mudit.blog",
    ],
    nativeCurrency: {
      name: "Goerli Ether",
      symbol: "ETH",
      decimals: 18,
    },
    infoURL: "https://goerli.net/#about",
    shortName: "gor",
    chainId: 5,
    networkId: 5,
    ens: {
      registry: "0x112234455c3a32fd11230c42e7bccd4a84e02010",
    },
    explorers: [
      {
        name: "etherscan-goerli",
        url: "https://goerli.etherscan.io",
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

export const network = NETWORKS[CHAIN_ID];
