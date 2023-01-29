import { ethers } from "hardhat";

async function main() {
  const signers = await ethers.getSigners();
  const admin = signers[0];

  const greeting = "Hello, world!";
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.connect(admin).deploy(greeting);
  await greeter.deployed();

  console.log(`Greeter contract deployed to ${greeter.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
