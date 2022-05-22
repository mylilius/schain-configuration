require("@nomiclabs/hardhat-waffle");
const Config = require('./config');

module.exports = {
	networks: {
		testSkaleChainA: {
			allowUnlimitedContractSize: true,
			loggingEnabled: true,
			gasPrice: 10000000,
			timeout: 100000,
			url: Config.CHAIN_A_RPC_URL,
			accounts: [],
		},
		testSkaleChainB: {
			allowUnlimitedContractSize: true,
			loggingEnabled: true,
			gasPrice: 10000000,
			timeout: 100000,
			url: Config.CHAIN_B_RPC_URL,
			accounts: [],
		}
	},
	solidity: "0.8.9"
}