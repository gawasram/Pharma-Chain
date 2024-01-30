const HDWalletProvider = require('@truffle/hdwallet-provider');

// Replace with your Alchemy API key and mnemonic
const alchemyApiKey = 'SDksrP7ZZd3MiUGnFwT8gzRHf715RS6m';
const mnemonic = 'ankle either actor enough gesture view fiction rural party latin width velvet'; 

module.exports = {
  networks: {
      development: {
        host: "127.0.0.1", // Localhost (default for Ganache)
        port: 8545,       // Standard Ethereum port (default for Ganache)
        network_id: "*",  // Any network (default for Ganache)
        gas: 6721975,     // Gas limit (set to Ganache's default)
      },
    // development: {
    //   host: "127.0.0.1",
    //   port: 7545,
    //   network_id: "*",
    //   gas: 30000000,
    //   from: '0xbb4cc6d93AEF0C9e9447627972d8bd8B82B800b3',
    // },
    sepolia: {
      provider: () => new HDWalletProvider('2a16a2960cdbfa99ef50b59579f25728748b296b0ebd2e7b776b05e28c1aa661', `https://eth-sepolia.g.alchemy.com/v2/1Dlzm_Fl1n-QYw-8O1LeK46I8Ye0mp09`),
      network_id: 11155111, // Sepolia's network id on Alchemy
      gas: 30000000,
      confirmations: 2,
      timeoutBlocks: 2000,
      skipDryRun: true,
      networkCheckTimeout: 100000
    },
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './src/build/',
  compilers: {
    solc: {
      version: "0.6.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 100
        }
      }
    }
  }
}
