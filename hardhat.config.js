require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');

const Config = require('./sfuel/config');
// import * as Config from './sfuel/config';

module.exports = {
	networks: {
		testSkaleChainA: {
			allowUnlimitedContractSize: true,
			loggingEnabled: true,
			gasPrice: 10000000,
			timeout: 100000,
			url: Config.CHAIN_A_RPC_URL,
			accounts: [Config.CHAIN_A_OWNER],
		},
		testSkaleChainB: {
			allowUnlimitedContractSize: true,
			loggingEnabled: true,
			gasPrice: 10000000,
			timeout: 100000,
			url: Config.CHAIN_B_RPC_URL,
			accounts: [Config.CHAIN_B_OWNER],
		},
		localhost: {
			url: 'http://127.0.0.1:8545',
			accounts: ['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'],
		  }
	},
	solidity: "0.8.9",
	paths: {
		sources: "./sfuel/contracts",
		// tests: "./sfuel/tests",
		cache: "./sfuel/cache",
		artifacts: "./sfuel/artifacts"
	  },
}