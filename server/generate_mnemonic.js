
const ethers = require('ethers');

function generateMnemonic() {
    const wallet = ethers.Wallet.createRandom();
    return wallet.mnemonic.phrase;
}

const mnemonic = generateMnemonic();
console.log('Generated Mnemonic:', mnemonic);
