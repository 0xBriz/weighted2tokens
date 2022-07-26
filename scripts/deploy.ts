import { ethers } from "hardhat";

//const VAULT = '0xc37c34eA9CA579aDF279A16C547e801ed722F3b5'
const VAULT_GOERLI = '0x0Cc23b51B3A89728c85a63c819E8283e353FC86c';

async function main() {
    await deployFactory()
}

async function deployFactory() {
    const WeightedPool2TokensFactory = await ethers.getContractFactory("WeightedPool2TokensFactory");
    const contract = await WeightedPool2TokensFactory.deploy(VAULT_GOERLI);
    await contract.deployed();
    console.log("WeightedPool2TokensFactory: ", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
