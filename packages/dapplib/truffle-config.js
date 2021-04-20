require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift rice saddle proof hockey area bone sure'; 
let testAccounts = [
"0x626afa7dc238d5b7c9adf662a888b1668de17e6684460efa5a3e3819c3bacadb",
"0x418d5ce56004557eb0a226e0794b7b046fd113764e0459b9d27c64ad82ac26e2",
"0x74213838fea439d12131f43969d76aa22cf5d857c046d340324b26cef950ccda",
"0x77a472ec509352fafde53e242d53a2b6d5782307f8c075af97c6f018203b15ec",
"0x3d8ec29dc6636b8a50e8dfcdacb9f8070aa8a24caca64f016e5a4feb46113209",
"0xf3bc69453679f02878bdea35d562a1cc3b8083f254485476bdfdd83c6bf40f93",
"0xe1e16a1799a5c0079aa153c1cd41f5c9e1d39feacb5944b34721c3e5d866df48",
"0x1330983c0a7c039033259c5d78a25203101689d835287240185e35dbc47d8360",
"0xebeaaac9752fe2bc65fb138cb324e01b209de7843ec130af2372e71c646aa83d",
"0x59cd1c0c94457a16cb6b09bba49c19a3ab41e79d68e851e7ee2cebe9aa7ebbbe"
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
