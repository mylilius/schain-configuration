# Free Contract Deployment

Before any technical walk-through, it is best to understand what Free Contract Deployment is.

Free Contract Deployment provides <b>ANYONE</b> the ability to launch a contract on your SKALE Chain without your knowledge. While this is not the end of the world as they still need S-Fuel, depending on your limits, faucets, etc. available; individuals may be able to use this with malicious intent. For chains that utilize a large amount of contracts this may be a necessity which is why the SFuelContracts smart contracts were devised and written. 

If you are the only dApp on your SKALE Chain best practices would dictate you to keep Free Contract Deployment <b>OFF</b> in order to provide the greatest level of security for users.
## Enabling from Layer 1 (Mainnet/Rinkeby)

### Enabling Free Contract Deployment
   1. Make sure your SKALE chain configuration is properly setup in the [.env](../env) file. You will need to have all of the proper chain details assigned in order to properly generate the data. 
   2. Inside the [.env](../env) file set ENABLE_FREE_CONTRACT_DEPLOYMENT to true and if you are only using one chain set ENABLE_FREE_CONTRACT_DEPLOYMENT_CHAINS to chainA
   3. Run ```npm run fcd:enable```
   4. Continue to <b>Execute Transaction</b> below

### Disabling Free Contract Deployment
1. Make sure your SKALE chain configuration is properly setup in the [.env](../env) file. You will need to have all of the proper chain details assigned in order to properly generate the data. 
   2. Inside the [.env](../env) file set ENABLE_FREE_CONTRACT_DEPLOYMENT to false and if you are only using one chain set ENABLE_FREE_CONTRACT_DEPLOYMENT_CHAINS to chainA 
   3. Run ```npm run fcd:disable```
   4. Continue to <b>Execute Transaction</b> below

### Executing the Transaction
1. Copy the hex output from the console. It should start with 0x and have a lot of 0's (zeroes)
2. Go to the [Execute Transaction](./ExecuteTransactionGnosisSafeUI.md) and follow the directions to complete this setup