# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

# Local Hardhat instance

Open a terminal and type

```
$ npx hardhat node
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/
```

On a new terminal, deploy and instance of the Lock.sol contract

```
npx hardhat run scripts/deploy.ts --network localhost
```

# How the project was setup

## Setup hardhat

```
mkdir hardhat
cd hardhat
npm init
npm install --save-dev hardhat
npx hardhat
```

## Create svelte app

cd into `hardhat` folder and run `npm init vite` selecting the `svelte` option.

## Install tailwindCSS

[https://tailwindcss.com/docs/guides/sveltekit](https://tailwindcss.com/docs/guides/sveltekit)

## tailwindCSS Components

[https://flowbite.com](https://flowbite.com)

## Connect with Metamask

[https://github.com/matiasfha/getting-started-fullstack-ethereum-development/tree/lesson09](https://github.com/matiasfha/getting-started-fullstack-ethereum-development/tree/lesson09)

[https://birdeatsbug.com/blog/build-a-dapp-with-ethers-and-sveltejs](https://birdeatsbug.com/blog/build-a-dapp-with-ethers-and-sveltejs)
