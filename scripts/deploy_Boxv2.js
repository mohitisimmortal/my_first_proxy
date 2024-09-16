const { ethers, upgrades } = require('hardhat');
const PROXY_ADDR = "0xd41aAaaB5CCCf82786e63E93E2eB9D8563A12800";

async function main () {
  
  const BoxV2 = await ethers.getContractFactory('Boxv2');

  // Upgrade the proxy to BoxV2
  await upgrades.upgradeProxy(PROXY_ADDR, BoxV2);

  // Get the implementation address using the admin
  const implementationAddress = await upgrades.erc1967.getImplementationAddress(PROXY_ADDR);

  console.log("Box Upgraded to V2");
  console.log("Upgraded implementation address:", implementationAddress);
}

// Execute the main function and catch any errors
main().catch((error) => {
  console.error(error);
  process.exit(1);
});