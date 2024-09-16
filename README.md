# My first Proxy Contract

Made my first upgradeable smart contract using OpenZeppelin's proxy pattern on the Sepolia testnet. The contract starts with Boxv1 and is then upgraded to Boxv2.

Features-
Proxy Contract: Deploy and interact with a proxy contract using OpenZeppelin's upgradeable contracts.
Upgradeable Contracts: Demonstrates upgrading from Boxv1 to Boxv2 using a proxy contract.

Contracts-
Boxv1: A simple contract with a setValue function.
Boxv2: Upgraded version with additional features or changes.

## How to Run
- Clone the repository.
- Create the .env File
  
Create a file named .env in the root of your project and add the following content:
ALCHEMY_API_KEY=your-alchemy-api-key
PRIVATE_KEY=your-ethereum-wallet-private-key
ETHERSCAN_API_KEY=your-etherscan-api-key
Replace the placeholders with your actual keys.

- Install dependencies:
npm install

- Deploy the Boxv1 contract behind a proxy:
npx hardhat run --network sepolia ./scripts/deploy_Boxv1.js

- Upgrade to Boxv2:
npx hardhat run --network sepolia ./scripts/deploy_Boxv2.js
