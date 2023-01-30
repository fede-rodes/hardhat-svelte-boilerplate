# Getting started

```
git clone git@github.com:fede-rodes/hardhat-svelte-boilerplate.git
cd hardhat-svelte-boilerplate
npm i
cd svelte
npm i
cp ./env.localhost ./env
```

From the root directory, open a terminal and type

```
npx hardhat node
```

(This will start a HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/)

On a new terminal, deploy and instance of the Greeter.sol contract

```
npx hardhat run scripts/deploy.ts --network localhost
```

Run the svelte app on a new terminal

```
cd svelte
npm run dev
```

Connect with MetaMask via `Localhost 8545` network

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
