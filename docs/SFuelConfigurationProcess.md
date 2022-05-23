# SFuel Configuration Process

## Process

1. Complete the [initial setup](./InitialConfigurationProcess.md) if you have not already done so
2. Read the [S-Fuel Information](./SFuel.md) document if you have not already done so
3. Choose whether you want to launch fixed or upgradeable contracts
    - Note the nice part about how the contract is configured is that you can always empty a contract and turn it to inactive to turn it off. If you choose to do so simply remove the contracts ETHER_MANAGER_ROLE from Etherbase and all other roles it may have and it should be effectively nullified
4. Your [HardHat Config ](../hardhat.config.js) file will automatically update based on the setting of CHAIN A in the [.env](../env) file, however, if you are deploying the contracts from a single wallet you will need to make sure the private key field is backed up. 
   - Note: If you choose to deploy 

### Choosing Fixed
   1. Set the [.env](../.env) files variable CONTRACT_MODE to be ```fixed```
### Choosing Upgradeable

   4. Run ```npm run sfuel:deploy:contracts``` to deploy the SFuelContracts contract

      ###### Optional Step

   5. Run ```npm run sfuel:deploy:users``` to deploy the SFuelUsers contract