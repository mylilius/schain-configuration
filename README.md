# Calypso Configuration

## Process
- [x] Core Configuration
	- [x] Setup the Core Network Configuration in the environment variable file
	- [x] Setup the Core Network Imports in config folder
	- [x] Add predeployed contracts and ABIs to config folder
	- [x] Barrel Config
- [x] Utils Setup
	- [x] Setup Contract Util | Generates Ethers.js Contract from Predeployed ABI
	- [x] Setup Network Util | Stores RPC Information from Config
	- [x] Setup Networks Util | Stores all networks by name
	- [x] Setup Signer Util | Generates Wallet from Predeployed Multisig
	- [x] Web3 Util | Generates Web3Client from RPC
	- [x] Barrel Utils
- [x] Controller Setup
	- [x] Setup Controller Class
	- [x] Networks State and Init
	- [x] Calypso Chain State and Init
	- [x] MyLilius Chain State and Init
	- [x] Etherbase Contract State and Init
	- [x] Marionette Contract State and Init
	- [x] Config Controller Contract State and Init
	- [x] Message Proxy Contract State and Init

###### PDMSG = Pre Deployed Multi Sig

- [ ] Scripts
	- [ ] Roles.ts
		- [ ] Checks Core Roles on Mainnet
		- [ ] Checks Core Roles on sChain
		- [ ] MyLilius Chain Prints to Outputs
		- [ ] Calypso Chain Prints to Outputs
	- [ ] L1Assigner.ts
		- [ ] Uses mutlisig to generate encodeData for assigning a role on sChain to predeployed multisig
		- [ ] A. Use Gnosis Safe ABI to send encodedTx
		- [ ] B. Use Gnosis Safe UI to send EncodedTx
		- [ ] Check Role on sChain
	- [ ] FreeContractDeployment.ts
		- [ ] Enables/Disables Free Contract Deployment using PDMSG
	- [ ] SFuelDeploy.ts
		- [ ] Utilizes Pre Deployed MultiSig to Deploy SFuelContract
	- [ ] EtherbaseAssign.ts
		- [ ] Utilizes Predeploy MultiSig to assign SFuelDeployment to Etherbase as owner
	- [ ] SFuelMalicioius.ts
		- [ ] Deploys Copy of SFuelDeploy that is not whitelisted from randomly generated user
		- [ ] Attempts to pull S-Fuel

### Licenses

All abis and addresses are public domain due to the nature of blockchain. 
The code in this repository is licensed under AGPL-3.0-or-later from Lilius, Inc and the author TheGreatAxios.

The smart contract ABIs in src/config/abis.ts derive from smart contracts from [SKALE Network](https://github.com/skalenetwork) which are also licensed under AGPL-3.0-or-later.

By using this repository and any of the code you agree to the license found in LICENSE.