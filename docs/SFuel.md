# S-Fuel

   The S-Fuel contracts are designed to mitigate the amount of S-Fuel being collected by any given individual in order to protect the network. While it may seem that it is only valuable for a hub; S-Fuel Control is essential for a strong functioning SKALE chain. When gas is valueless, it needs to be controlled in a decentralized manner in order to align with the goals of an ecosystem, while further pushing for the security layer it was originally designed for. 

   ## Contracts
   
   The following is a dual usability model designed to facilitate the proper usage of S-Fuel throughout a chain without rendering inabilities and the need for a centralized account to get involved and send additional.

   Both contracts make delegate calls out the original Etherbase contract, meaning that any contract that is deployed to manage S-Fuel must be assigned the ETHER_MANAGER_ROLE on the SKALE Chain. Additionally, it is highly recommended that the existing checks on what a user can load are kept in place. 
   Lastly, I am researching additional security measures, but these contracts have no warranty and offer no liability protection. You use these at your own risk as stated in the [LICENSE](../LICENSE).

   ### Contract Whitelisting
   These smart contracts utilize 

   1. [SFuelContracts](../sfuel/contracts/s_fuel/SFuelContracts.sol)
   2. [SFuelContractsUpgradeable](../sfuel/contracts/s_fuel/SFuelContractsUpgradeable.sol)

   ### User Whitelisting
   1. [SFuelUsers](../sfuel/contracts/s_fuel/SFuelUsers.sol)
   2. [SFuelUsersUpgradeable](../sfuel/contracts/s_fuel/SFuelUsersUpgradeable.sol)