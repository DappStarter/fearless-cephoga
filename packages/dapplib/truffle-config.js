require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain hole idea drop supply seed'; 
let testAccounts = [
"0x4457f7daa18b23decf00a15b19f465f34b6a1334084c1a738603511de284fa05",
"0x09df56c32c5fd6f227d8c09946a0dc0a790a25418600d829528647e5f9f961c8",
"0x52351455373585bc3f42a8f1df10c5ddb2f6a7a70b9e5553913f31d0b6b00afd",
"0x14e80da282bb9b211570d4ec30737f3038aa548743f6153b22d42fdf24b9a419",
"0xe69f9c19484b5a0f5024ea93e4d564be6479743eea795e90ff76d33c02c8b6ef",
"0xc33be650c04164d91e6a843a520a5c4852c43290a66dad6a76a048433e124413",
"0xa4aeb91e4ba951f0c179ee9988fcad5e83cadb8e4ad7b969f62e751de624617a",
"0x31f3ab44dc139ad34aaa1cc55dda1271e12cbe1f92d2fb94ce78378654249b70",
"0x51997f6fd95f9812ed6637e53d19e86de2a42e9c428d655450d144e11a80df74",
"0xee83eb798da788783abc5b11752bccd55917ec9381a13eafdb7acc89dcf0932c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
