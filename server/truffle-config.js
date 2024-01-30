const HDWalletProvider = require('@truffle/hdwallet-provider');
const path = require("path");
const mnemonic = 'ankle either actor enough gesture view fiction rural party latin width velvet'; // Replace with your mnemonic

module.exports = {
    contracts_build_directory: path.join(__dirname, "./src/contracts"),
    networks: {
        develop: {
            port: 7545
        },
        sepolia: {
            provider: () => new HDWalletProvider(mnemonic, `https://eth-sepolia.g.alchemy.com/v2/SDksrP7ZZd3MiUGnFwT8gzRHf715RS6m`),
            network_id: 11155111, // Sepolia's network id
            gas: 5500000,        // Gas limit used for deploys
            confirmations: 2,    // # of confs to wait between deployments
            timeoutBlocks: 200,  // # of blocks before a deployment times out
            skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
        },
    },
    // other configurations...
};
