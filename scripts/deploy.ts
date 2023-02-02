import hre, { ethers } from "hardhat";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function main() {
  console.log("Deploying contract...");
  console.log(
    `Using network ${hre.network.name} (${hre.network.config.chainId})`
  );

  const signers = await ethers.getSigners();
  const admin = signers[0];

  const greeting = "Hello, world!";
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.connect(admin).deploy(greeting);
  await greeter.deployed();

  console.log(`Greeter contract deployed to ${greeter.address}`);

  if (hre.network.name === "hardhat") {
    console.log("Skipping contract's Etherscan verification");
  } else {
    console.log("Waiting before verification");
    await sleep(30_000);
    console.log("Verifying contract on Etherscan");

    await hre
      .run("verify:verify", {
        address: greeter.address,
        constructorArguments: [greeting],
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
