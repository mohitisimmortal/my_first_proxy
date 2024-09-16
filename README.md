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
- Install dependencies:
npm install

- Deploy the Boxv1 contract behind a proxy:
npx hardhat run --network sepolia ./scripts/deploy_Boxv1.js

- Upgrade to Boxv2:
npx hardhat run --network sepolia ./scripts/deploy_Boxv2.js
