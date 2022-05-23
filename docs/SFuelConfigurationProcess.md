# SFuel Configuration Process

## Process

1. Complete the [initial setup](./InitialConfigurationProcess.md) if you have not already done so
2. Read the [S-Fuel Information](./SFuel.md) document if you have not already done so
3. Choose whether you want to launch fixed or upgradeable contracts
    - Note the nice part about how the contract is configured is that you can always empty a contract and turn it to inactive to turn it off. If you choose to do so simply remove the contracts <b>ETHER_MANAGER_ROLE</b> from <b>ETHER_MANAGER_ROLE</b> and all other roles it may have and it should be effectively nullified
4. The account that will launch the contract must have <b>DEPLOYER_ROLE</b> assigned via the <b>ConfigController</b> contract assigned if <b>Free Contract Deployment</b> is not enabled.
   - You can enable Free Contract Deployment [Here](./FreeContractDeployment.md)
   - You can assign a role following this process [Here](./AssignRole.md)
5. Your [HardHat Config ](../hardhat.config.js) file will automatically update based on the setting of CHAIN A in the [.env](../env) file. If you are deploying any contracts that utilize [Ownable](https://docs.openzeppelin.com/contracts/4.x/api/access#Ownable) the private key that is set into the config accounts will be the owner of a contract. If you use the template for SFuel you will notice that the owner that launches it is initially assigned roles in the contract. This can be commented out, however, the initial launcher will by default by the <b>DEFAULT_ADMIN_ROLE</b> which is needed to assign other roles. 
   - Recommendation: Launch the contracts with a single owner before the chain is given to the public. Once launched assign a mutlisig wallet on the SKALE chain to be the <b>DEFAULT_ADMIN_ROLE</b> and then utilize that wallet to remove the initial owner. More scripts will be added in the future to handle this via scripting instead of encoded data via the UI.

### Choosing Fixed
   6. Set the [.env](../.env) files variable CONTRACT_MODE to be <b>```fixed```</b>


### Choosing Upgradeable
   6. Set the [.env](../.env) files variable CONTRACT_MODE to be <b>```upgradeable```</b>

### Deploying Contracts
   7. The network is set by default to localhost in the npm script for testing purposes. Run ```npx hardhat node``` in the root directory to deploy a local ethereum node for quick testing, or switch <i>localhost<i> to <i>chainA</i> or <i>chainB</i> if using a production or test SKALE chain.
   8. Run ```npm run sfuel:deploy:contracts``` to deploy the SFuelContracts contract

      ###### Optional Step: Use if you want to whitelist users for additional S-Fuel

   9. Run ```npm run sfuel:deploy:users``` to deploy the SFuelUsers contract

