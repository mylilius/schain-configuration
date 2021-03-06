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
	- [x] Chain A State and Init
	- [x] Chain B State and Init
	- [x] Etherbase Contract State and Init
	- [x] Marionette Contract State and Init
	- [x] Config Controller Contract State and Init
	- [x] Message Proxy Contract State and Init

###### PDMSG = Pre Deployed Multi Sig

- [ ] Scripts
	- [x] roles
		- [x] Checks Core Roles on Mainnet
		- [x] Checks Core Roles on sChain
		- [x] Chain A Prints to Outputs
		- [x] Chain B Chain Prints to Outputs
	- [ ] L1Assigner (Assign Roles L1)
		- [x] Uses mutlisig to generate encodeData for assigning a role on sChain to pre-deployed multisig
		- [ ] A. Use Gnosis Safe ABI to send encodedTx
		- [ ] B. Use Gnosis Safe UI to send EncodedTx
		- [ ] Check Role on sChain
	- [x] free_contract_deployment (Free Contract Deployment)
		- [x] Enables/Disables Free Contract Deployment using MultiSig L1
	- [x] SFuel Contract Deployment
		- [x] Contracts -> Fixed
		- [x] Contracts -> Upgradeable
		- [x] Users -> Fixed
		- [x] Users -> Upgradeable
- [ ] Scripts/Services
	- [x] Marionette Port
	- [x] Multisig Port
	- [x] Etherbase
		- [x] Default Admin Role
		- [x] Etherbase - predeploy only temporarily
	- [ ] ConfigController
		- [ ] Default Admin Role
		- [ ] MTM Admin Role
		- [ ] Deployer Role
	- [ ] IMA? @CW
- [x] Smart Contracts
	- [x] SFuelContracts.sol
	- [x] SFuelContractsUpgradeable.sol
	- [x] SFuelUsers.sol
	- [x] SFuelUsersUpgradeable.sol
	- [x] NFTFixed -> LiliNFT.sol
	- [x] NFTUpgradeable -> LiliNFTUpgradeable.sol
- [ ] Documentation
   - [ ] [Assign Roles](/docs/AssignRole.md)
   - [x] [Execute Gnosis Safe UI Tx](/docs/ExecuteTransactionGnosisSafeUI.md)
   - [x] [Free Contract Deployment](/docs/FreeContractDeployment.md)
   - [x] [Initial Configuration](/docs/InitialConfigurationProcess.md)
   - [x] [SFuel Information](/docs/SFuel.md)
   - [x] [SFuel Configuration](/docs/SFuelConfigurationProcess.md)
- [ ] Testing
	- [ ] Smart Contracts
	- [ ] Scripts
	- [ ] Automate Role Checks

### Licenses

All abis and addresses are public domain due to the nature of blockchain. 
The code in this repository is licensed under AGPL-3.0-or-later from Lilius, Inc and the author TheGreatAxios.

The smart contract ABIs in src/config/abis.ts and other interfaces throughout derive from smart contracts from [SKALE Network](https://github.com/skalenetwork) which are also licensed under AGPL-3.0-or-later.

Other interfaces and contracts derive from OpenZeppelin and are licensed under their licensing which is MIT.

By using this repository and any of the code you agree to the license found in LICENSE.