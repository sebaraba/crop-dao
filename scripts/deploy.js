const hre = require('hardhat');

async function main() {
  const Campaign = await hre.ethers.getContractFactory("Campaign");
  const campaignContract = await Campaign.deploy(
    "Campaign for Dogs",
    10000000000000,
    "This campaign will help all the stray dogs by providing them food and shelter",
    "0xaC1dcd58450DcAA0E114Cd702f3D4a8507579A3d",
    1668963554
  );
    
  await campaignContract.deployed();
  console.log("Factory deployed to:", campaignContract.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.log(error);
    process.exit(1);
});