# Role Assignments

## List of Roles
- SKALE Chain Owner
    - Set when the chain is deployed. 
    - Immutable -> Cannot be Changed
    - Should be set to a multi-signature wallet on mainnet
    - The owner on the chain itself will be the backup (originator) provided
- DEFAULT_ADMIN_ROLE
    - This is a role predefined by the access control contracts and will be available on all of the pre-deployed contracts. This role can only be assigned by Marionette and is required on a contract in order to set the control roles.
- Etherbase
    - ETHER_MANAGER_ROLE -> Can interact with pre-deployed Etherbase Contracts to retrieve S-Fuel
- ConfigController
    - DEPLOYER_ROLE -> Can Deploy Contracts on a SKALE Chain if Free Contract Deployment is disabled
    - DEPLOYER_ADMIN_ROLE ->
    - MTM_ADMIN_ROLE -> 

## Layer 1 - Mainnet/Rinkeby

This section is for assigning roles to a user on the SKALE chain in order to proceed with the Layer 2 - SKALE Chain section. SKALE Chains by default have no roles when deployed for a specific user account. The only "piece" that has roles is <b>Marionette</b> which is accessible using the process outlined here.



## Layer 2 - SKALE Chain

This section is for assigning roles to a contract or user on a SKALE Chain from the SKALE Chain. It will follow similar steps to the other assignments, however, a couple of configuration pieces must change.

### Assigning DEFAULT_ADMIN_ROLE to pre-deployed multisig

1. Run ```npx run msg:etherbase:default```

### Assigning ETHER_MANAGER_ROLE to pre-deployed multisig

2. Run ```npx run msg:etherbase:ether```

