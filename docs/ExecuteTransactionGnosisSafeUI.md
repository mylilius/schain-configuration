# Executing Transactions using Gnosis SAFE UI on L1

This document is most likely viewed as a follow up to some of the other documentation such as:
   - [AssignRole](./AssignRole.md)
   - [FreeContractDeployment](./FreeContractDeployment.md)
   - [SFuelConfigurationProcess](./SFuelConfigurationProcess.md)

If you are reading this before any of the other documents and are confused, please head back to [Initial Configuration](./InitialConfigurationProcess.md)

## Executing a Transaction
1. The current scripts to not execute transactions, however, in the future they may. For now, head to the [Gnosis Safe dApp](https://gnosis-safe.io) and enter your SAFE. Make sure you are using the SAFE that is the SKALE Chain owner. If you are unsure if it is, you can utilize the [CheckRoles](./CheckRoles.md) guide to check this information.
2. Copy the output from the console which should be a long hex string that starts with 0x and probably has a whole bunch of 0 (zero)'s.
3. In Gnosis Safe, click <b>New Transaction</b>, <b>Contract Interaction</b>, and at the bottom of the window flip <b> Use custom data (hex encoded)</b> on.
4. Paste the console output into the <b>ABI</b> field, set the Value to 0 and then paste the <b>Message Proxy Contract</b> address into the to field. 
    - Rinkeby: <i>0x656fb12abab353FB1875a4e3Dc4D70179CB85BA4</i>
    - Mainnet: <i>0x8629703a9903515818C2FeB45a6f6fA5df8Da404</i>
    - <b>Note: Make sure to double check these addresses before using in case they have changed</b>
5. Click review and then follow the Gnosis Safe UI to complete the transaction. If there is only 1 signer it should send right away and then be viewable on the SKALE Chain explorer shortly after; if there are multiple signers needed, the last required signer will pay for and execute the transaction.