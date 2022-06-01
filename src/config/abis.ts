/**
 * @license
 * 
 * Schain Configuration
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * @file abis.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/


export interface IABI {
    [key: string]: any;
}

export const ABIs_SCHAIN: IABI = {
	etherbase: [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "EtherReceived",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "EtherSent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ETHER_MANAGER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getRoleMember",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleMemberCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "schainOwner",
                "type": "address"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "partiallyRetrieve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "receiver",
                "type": "address"
            }
        ],
        "name": "retrieve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
],
	marionette: [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "EtherReceived",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "EtherSent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "output",
                "type": "bytes"
            }
        ],
        "name": "FunctionCallResult",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "version",
                "type": "uint8"
            }
        ],
        "name": "Initialized",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "ACCESS_VIOLATION",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "IMA_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PUPPETEER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "encodeFunctionCall",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "execute",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getRoleMember",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleMemberCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "ima",
                "type": "address"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "postMessage",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "target",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "sendEth",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
]
,
	configController: [
	  {
	    "anonymous": false,
	    "inputs": [
	      {
	        "indexed": true,
	        "internalType": "bytes32",
	        "name": "role",
	        "type": "bytes32"
	      },
	      {
	        "indexed": true,
	        "internalType": "bytes32",
	        "name": "previousAdminRole",
	        "type": "bytes32"
	      },
	      {
	        "indexed": true,
	        "internalType": "bytes32",
	        "name": "newAdminRole",
	        "type": "bytes32"
	      }
	    ],
	    "name": "RoleAdminChanged",
	    "type": "event"
	  },
	  {
	    "anonymous": false,
	    "inputs": [
	      {
	        "indexed": true,
	        "internalType": "bytes32",
	        "name": "role",
	        "type": "bytes32"
	      },
	      {
	        "indexed": true,
	        "internalType": "address",
	        "name": "account",
	        "type": "address"
	      },
	      {
	        "indexed": true,
	        "internalType": "address",
	        "name": "sender",
	        "type": "address"
	      }
	    ],
	    "name": "RoleGranted",
	    "type": "event"
	  },
	  {
	    "anonymous": false,
	    "inputs": [
	      {
	        "indexed": true,
	        "internalType": "bytes32",
	        "name": "role",
	        "type": "bytes32"
	      },
	      {
	        "indexed": true,
	        "internalType": "address",
	        "name": "account",
	        "type": "address"
	      },
	      {
	        "indexed": true,
	        "internalType": "address",
	        "name": "sender",
	        "type": "address"
	      }
	    ],
	    "name": "RoleRevoked",
	    "type": "event"
	  },
	  {
	    "inputs": [],
	    "name": "DEFAULT_ADMIN_ROLE",
	    "outputs": [
	      {
	        "internalType": "bytes32",
	        "name": "",
	        "type": "bytes32"
	      }
	    ],
	    "stateMutability": "view",
	    "type": "function"
	  },
	  {
	    "inputs": [],
	    "name": "DEPLOYER_ADMIN_ROLE",
	    "outputs": [
	      {
	        "internalType": "bytes32",
	        "name": "",
	        "type": "bytes32"
	      }
	    ],
	    "stateMutability": "view",
	    "type": "function"
	  },
	  {
	    "inputs": [],
	    "name": "DEPLOYER_ROLE",
	    "outputs": [
	      {
	        "internalType": "bytes32",
	        "name": "",
	        "type": "bytes32"
	      }
	    ],
	    "stateMutability": "view",
	    "type": "function"
	  },
	  {
	    "inputs": [],
	    "name": "MTM_ADMIN_ROLE",
	    "outputs": [
	      {
	        "internalType": "bytes32",
	        "name": "",
	        "type": "bytes32"
	      }
	    ],
	    "stateMutability": "view",
	    "type": "function"
	  },
	  {
	    "inputs": [
	      {
	        "internalType": "bytes32",
	        "name": "role",
	        "type": "bytes32"
	      }
	    ],
	    "name": "getRoleAdmin",
	    "outputs": [
	      {
	        "internalType": "bytes32",
	        "name": "",
	        "type": "bytes32"
	      }
	    ],
	    "stateMutability": "view",
	    "type": "function"
	  },
	  {
	    "inputs": [
	      {
	        "internalType": "bytes32",
	        "name": "role",
	        "type": "bytes32"
	      },
	      {
	        "internalType": "uint256",
	        "name": "index",
	        "type": "uint256"
	      }
	    ],
	    "name": "getRoleMember",
	    "outputs": [
	      {
	        "internalType": "address",
	        "name": "",
	        "type": "address"
	      }
	    ],
	    "stateMutability": "view",
	    "type": "function"
	  },
	  {
	    "inputs": [
	      {
	        "internalType": "bytes32",
	        "name": "role",
	        "type": "bytes32"
	      }
	    ],
	    "name": "getRoleMemberCount",
	    "outputs": [
	      {
	        "internalType": "uint256",
	        "name": "",
	        "type": "uint256"
	      }
	    ],
	    "stateMutability": "view",
	    "type": "function"
	  },
	  {
	    "inputs": [
	      {
	        "internalType": "bytes32",
	        "name": "role",
	        "type": "bytes32"
	      },
	      {
	        "internalType": "address",
	        "name": "account",
	        "type": "address"
	      }
	    ],
	    "name": "grantRole",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	  },
	  {
	    "inputs": [
	      {
	        "internalType": "bytes32",
	        "name": "role",
	        "type": "bytes32"
	      },
	      {
	        "internalType": "address",
	        "name": "account",
	        "type": "address"
	      }
	    ],
	    "name": "hasRole",
	    "outputs": [
	      {
	        "internalType": "bool",
	        "name": "",
	        "type": "bool"
	      }
	    ],
	    "stateMutability": "view",
	    "type": "function"
	  },
	  {
	    "inputs": [
	      {
	        "internalType": "bytes32",
	        "name": "role",
	        "type": "bytes32"
	      },
	      {
	        "internalType": "address",
	        "name": "account",
	        "type": "address"
	      }
	    ],
	    "name": "renounceRole",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	  },
	  {
	    "inputs": [
	      {
	        "internalType": "bytes32",
	        "name": "role",
	        "type": "bytes32"
	      },
	      {
	        "internalType": "address",
	        "name": "account",
	        "type": "address"
	      }
	    ],
	    "name": "revokeRole",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	  },
	  {
	    "inputs": [
	      {
	        "internalType": "bytes4",
	        "name": "interfaceId",
	        "type": "bytes4"
	      }
	    ],
	    "name": "supportsInterface",
	    "outputs": [
	      {
	        "internalType": "bool",
	        "name": "",
	        "type": "bool"
	      }
	    ],
	    "stateMutability": "view",
	    "type": "function"
	  },
	  {
	    "inputs": [],
	    "name": "enableMTM",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	  },
	  {
	    "inputs": [],
	    "name": "disableMTM",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	  },
	  {
	    "inputs": [],
	    "name": "enableFreeContractDeployment",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	  },
	  {
	    "inputs": [],
	    "name": "disableFreeContractDeployment",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	  },
	  {
	    "inputs": [
	      {
	        "internalType": "address",
	        "name": "addr",
	        "type": "address"
	      }
	    ],
	    "name": "addToWhitelist",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	  },
	  {
	    "inputs": [
	      {
	        "internalType": "address",
	        "name": "addr",
	        "type": "address"
	      }
	    ],
	    "name": "removeFromWhitelist",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	  },
	  {
	    "inputs": [
	      {
	        "internalType": "address",
	        "name": "addr",
	        "type": "address"
	      }
	    ],
	    "name": "isAddressWhitelisted",
	    "outputs": [
	      {
	        "internalType": "bool",
	        "name": "",
	        "type": "bool"
	      }
	    ],
	    "stateMutability": "view",
	    "type": "function"
	  },
	  {
	    "inputs": [],
	    "name": "isMTMEnabled",
	    "outputs": [
	      {
	        "internalType": "bool",
	        "name": "",
	        "type": "bool"
	      }
	    ],
	    "stateMutability": "view",
	    "type": "function"
	  },
	  {
	    "inputs": [],
	    "name": "isFCDEnabled",
	    "outputs": [
	      {
	        "internalType": "bool",
	        "name": "",
	        "type": "bool"
	      }
	    ],
	    "stateMutability": "view",
	    "type": "function"
	  }
	],
    fileStorage: [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "ALLOCATOR_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "DEFAULT_ADMIN_ROLE",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "EMPTY_INDEX",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "MAX_BLOCK_COUNT",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "MAX_FILESIZE",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "MEGABYTE",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "STORAGE_SPACE_SLOT",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleAdmin",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
            }
          ],
          "name": "getRoleMember",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            }
          ],
          "name": "getRoleMemberCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "grantRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "hasRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "renounceRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "revokeRole",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "userAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "reservedSpace",
              "type": "uint256"
            }
          ],
          "name": "reserveSpace",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "directoryPath",
              "type": "string"
            }
          ],
          "name": "createDirectory",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "directoryPath",
              "type": "string"
            }
          ],
          "name": "deleteDirectory",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "filePath",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "fileSize",
              "type": "uint256"
            }
          ],
          "name": "startUpload",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "filePath",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "position",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "uploadChunk",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "filePath",
              "type": "string"
            }
          ],
          "name": "finishUpload",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "filePath",
              "type": "string"
            }
          ],
          "name": "deleteFile",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "storagePath",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "position",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "length",
              "type": "uint256"
            }
          ],
          "name": "readChunk",
          "outputs": [
            {
              "internalType": "bytes32[32768]",
              "name": "chunk",
              "type": "bytes32[32768]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "storagePath",
              "type": "string"
            }
          ],
          "name": "listDirectory",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "bool",
                  "name": "isFile",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "size",
                  "type": "uint256"
                },
                {
                  "internalType": "enum FileStorage.FileStatus",
                  "name": "status",
                  "type": "uint8"
                },
                {
                  "internalType": "bool[]",
                  "name": "isChunkUploaded",
                  "type": "bool[]"
                }
              ],
              "internalType": "struct FileStorage.ContentInfo[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "storagePath",
              "type": "string"
            }
          ],
          "name": "getFileStatus",
          "outputs": [
            {
              "internalType": "enum FileStorage.FileStatus",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "storagePath",
              "type": "string"
            }
          ],
          "name": "getFileSize",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "fileSize",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getTotalStorageSpace",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getTotalReservedSpace",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "getReservedSpace",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "getOccupiedSpace",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getMaxContentCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getMaxChunkSize",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]
};

export const ABIs_MAINNET: IABI = {
    messageProxy: [
        {
            "type": "event",
            "anonymous": false,
            "name": "ExtraContractRegistered",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "contractAddress",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "ExtraContractRemoved",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "chainHash",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "contractAddress",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "GasCostMessageHeaderWasChanged",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "oldValue",
                    "indexed": false
                },
                {
                    "type": "uint256",
                    "name": "newValue",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "GasCostMessageWasChanged",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "oldValue",
                    "indexed": false
                },
                {
                    "type": "uint256",
                    "name": "newValue",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "GasLimitWasChanged",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "oldValue",
                    "indexed": false
                },
                {
                    "type": "uint256",
                    "name": "newValue",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "OutgoingMessage",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "dstChainHash",
                    "indexed": true
                },
                {
                    "type": "uint256",
                    "name": "msgCounter",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "srcContract",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "dstContract",
                    "indexed": false
                },
                {
                    "type": "bytes",
                    "name": "data",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "PostMessageError",
            "inputs": [
                {
                    "type": "uint256",
                    "name": "msgCounter",
                    "indexed": true
                },
                {
                    "type": "bytes",
                    "name": "message",
                    "indexed": false
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleAdminChanged",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "previousAdminRole",
                    "indexed": true
                },
                {
                    "type": "bytes32",
                    "name": "newAdminRole",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleGranted",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "RoleRevoked",
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "account",
                    "indexed": true
                },
                {
                    "type": "address",
                    "name": "sender",
                    "indexed": true
                }
            ]
        },
        {
            "type": "event",
            "anonymous": false,
            "name": "VersionUpdated",
            "inputs": [
                {
                    "type": "string",
                    "name": "oldVersion",
                    "indexed": false
                },
                {
                    "type": "string",
                    "name": "newVersion",
                    "indexed": false
                }
            ]
        },
        {
            "type": "function",
            "name": "CHAIN_CONNECTOR_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "CONSTANT_SETTER_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "DEFAULT_ADMIN_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "EXTRA_CONTRACT_REGISTRAR_ROLE",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "MAINNET_HASH",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "MESSAGES_LENGTH",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "addConnectedChain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "communityPool",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "connectedChains",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": "incomingMessageCounter"
                },
                {
                    "type": "uint256",
                    "name": "outgoingMessageCounter"
                },
                {
                    "type": "bool",
                    "name": "inited"
                }
            ]
        },
        {
            "type": "function",
            "name": "contractManagerOfSkaleManager",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "gasLimit",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getContractRegisteredLength",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getContractRegisteredRange",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "uint256",
                    "name": "from"
                },
                {
                    "type": "uint256",
                    "name": "to"
                }
            ],
            "outputs": [
                {
                    "type": "address[]",
                    "name": "contractsInRange"
                }
            ]
        },
        {
            "type": "function",
            "name": "getIncomingMessagesCounter",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "fromSchainName"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getOutgoingMessagesCounter",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "targetSchainName"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleAdmin",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "bytes32",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMember",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "uint256",
                    "name": "index"
                }
            ],
            "outputs": [
                {
                    "type": "address",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "getRoleMemberCount",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                }
            ],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "grantRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "hasRole",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "headerMessageGasCost",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "initialize",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "contractManagerOfSkaleManagerValue"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeAllRegisteredContracts",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address[]",
                    "name": "contracts"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "initializeMessageProxy",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "uint256",
                    "name": "newGasLimit"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "isConnectedChain",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isContractRegistered",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "schainHash"
                },
                {
                    "type": "address",
                    "name": "contractAddress"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "isSchainOwner",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "sender"
                },
                {
                    "type": "bytes32",
                    "name": "schainHash"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "messageGasCost",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "uint256",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "postIncomingMessages",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "fromSchainName"
                },
                {
                    "type": "uint256",
                    "name": "startingCounter"
                },
                {
                    "type": "tuple[]",
                    "name": "messages",
                    "components": [
                        {
                            "type": "address",
                            "name": "sender"
                        },
                        {
                            "type": "address",
                            "name": "destinationContract"
                        },
                        {
                            "type": "bytes",
                            "name": "data"
                        }
                    ]
                },
                {
                    "type": "tuple",
                    "name": "sign",
                    "components": [
                        {
                            "type": "uint256[2]",
                            "name": "blsSignature"
                        },
                        {
                            "type": "uint256",
                            "name": "hashA"
                        },
                        {
                            "type": "uint256",
                            "name": "hashB"
                        },
                        {
                            "type": "uint256",
                            "name": "counter"
                        }
                    ]
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "postOutgoingMessage",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "targetChainHash"
                },
                {
                    "type": "address",
                    "name": "targetContract"
                },
                {
                    "type": "bytes",
                    "name": "data"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "registerExtraContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "extraContract"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "registerExtraContractForAll",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "extraContract"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeConnectedChain",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeExtraContract",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "schainName"
                },
                {
                    "type": "address",
                    "name": "extraContract"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "removeExtraContractForAll",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "extraContract"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "renounceRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "revokeRole",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "bytes32",
                    "name": "role"
                },
                {
                    "type": "address",
                    "name": "account"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "setCommunityPool",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "address",
                    "name": "newCommunityPoolAddress"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "setNewGasLimit",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "uint256",
                    "name": "newGasLimit"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "setNewHeaderMessageGasCost",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "uint256",
                    "name": "newHeaderMessageGasCost"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "setNewMessageGasCost",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "uint256",
                    "name": "newMessageGasCost"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "setVersion",
            "constant": false,
            "payable": false,
            "inputs": [
                {
                    "type": "string",
                    "name": "newVersion"
                }
            ],
            "outputs": []
        },
        {
            "type": "function",
            "name": "supportsInterface",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [
                {
                    "type": "bytes4",
                    "name": "interfaceId"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": ""
                }
            ]
        },
        {
            "type": "function",
            "name": "version",
            "constant": true,
            "stateMutability": "view",
            "payable": false,
            "inputs": [],
            "outputs": [
                {
                    "type": "string",
                    "name": ""
                }
            ]
        }
    ]
};