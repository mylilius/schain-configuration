// SPDX-License-Identifier: APGL-3.0

/**
 *   SFuelContracts.sol - SChain Configuration
 *   Copyright (C) 2022-Present Lilius, Inc
 *   @author TheGreatAxios
 *
 *   SFuelContracts is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Affero General Public License as published
 *   by the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   SFuelContracts is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Affero General Public License for more details.
 *
 *   You should have received a copy of the GNU Affero General Public License
 *   along with SFuelContracts.  If not, see <https://www.gnu.org/licenses/>.
 */

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/access/IAccessControlEnumerable.sol";
import "../interfaces/IEtherbase.sol";

contract SFuelContracts is AccessControlEnumerable {

	/// @notice This is the role for a whitelisted contract
	/// @dev Required for a contract to ping onlyWhitelisted
	bytes32 public constant IS_WHITELISTED_CONTRACT = keccak256('IS_WHITELISTED_CONTRACT');

	/// @notice This is the role required to add a contract to whitelist
	/// @dev Required for an admin to manager whitelist
	bytes32 public constant WHITELIST_MANAGER_ROLE = keccak256('WHITELIST_MANAGER_ROLE');

	/// @notice This is the role required to manage the balances needed
	/// @dev Required for an admin to manager whitelist
	bytes32 public constant CONTRACT_MANAGER_ROLE = keccak256('CONTRACT_MANAGER_ROLE');

	/// @notice This is the role required to manage the active state of the contract
	/// @dev Required for an admin to pause the faucet
	/// @dev This should ideally be defined to a multisig
	bytes32 public constant ACTIVE_MANAGER_ROLE = keccak256('ACTIVE_MANAGER_ROLE');

	uint256 private MIN_USER_BALANCE;
	uint256 private MIN_CONTRACT_BALANCE;

	bool isPaused;
	/**
	*
	* Events
	*
	**/
	event EtherDeposit(address indexed sender, uint256 value);
	event ContractFilled(address indexed caller, uint256 value);
	event RoleGranted(address indexed reciever, address indexed caller, bytes32 indexed role);
	event RoleRemoved(address indexed removed, address indexed caller, bytes32 indexed role);
	event RetrievedSFuel(address indexed reciever, address indexed whitelistedContract, uint256 amount);
	event ReturnedSFuel(address indexed returner, address indexed whitelistedContract, uint256 amount);
	
	/// Post Deployment Requirements
	/// Add Contract to Etherbase ETHER_MANAGER_ROLE
	/// Seed Contract with fillContract();
	constructor() {
		_grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
		_grantRole(WHITELIST_MANAGER_ROLE, msg.sender);
		_grantRole(CONTRACT_MANAGER_ROLE, msg.sender);
		_grantRole(ACTIVE_MANAGER_ROLE, msg.sender);
		
		MIN_USER_BALANCE = 0.001 ether;
		MIN_CONTRACT_BALANCE = MIN_USER_BALANCE * 10 ** 6;
		isPaused = false;
	}

	/** Modifiers **/
	modifier onlyWhitelisted() { 
		require (hasRole(IS_WHITELISTED_CONTRACT, msg.sender), 'IS_WHITELISTED Required');
		_;
	}

	modifier onlyWhitelistManager() {
		require(hasRole(WHITELIST_MANAGER_ROLE, msg.sender), "WHITELIST_MANAGER_ROLE Required");
		_;
	}

	modifier onlyContractManager() {
		require(hasRole(CONTRACT_MANAGER_ROLE, msg.sender), "CONTRACT_MANAGER_ROLE Required");
		_;
	}

	modifier onlyActiveManager() {
		require(hasRole(ACTIVE_MANAGER_ROLE, msg.sender), "ACTIVE_MANAGER_ROLE Required");
		_;
	}

	modifier onlyDefaultAdmin() {
		require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "DEFAULT_ADMIN_ROLE Required");
		_;
	}

	modifier isActive() {
		require(!isPaused, "Contract is Paused");
		_;
	}
	
	/** Modifiers **/

	/// @notice Used by other contracts as a function to top up S-Fuel
	/// @dev msg.sender must be whitelisted to complete, onlyWhitelisted requires [msg.sender] to be contract
	/// @param _retriever Address of User
	function retrieveSFuel(address payable _retriever) external payable isActive onlyWhitelisted {
		uint256 _retrieverBalance = _getBalance(_retriever);
		/// Retrieve
		_retriever.transfer(1 ether);
		// if (_retrieverBalance < MIN_USER_BALANCE) {
		// 	uint256 _amount = _calculateRetrieval(_retrieverBalance);
		// 	_retriever.transfer(_amount);
		// 	emit RetrievedSFuel(_retriever, msg.sender, _amount);
		// }
		/// Send Back
		// if (_retrieverBalance > MIN_USER_BALANCE) {
		// 	uint256 _amount = _calculateReturn(_retrieverBalance);
		// 	payable(address(this)).transfer(_amount);
		// 	emit ReturnedSFuel(_retriever, msg.sender, _amount);
		// }
		// _fillContract();
	} 

	function _calculateRetrieval(uint256 _currentBalance) internal view returns (uint256) {
		return MIN_USER_BALANCE - _currentBalance;
	}

	function _calculateReturn(uint256 _currentBalance) internal view returns (uint256) {
		return _currentBalance - MIN_USER_BALANCE;
	}
	
	
	// /** ETHERBASE FUNCTIONS */
    function _getEtherbase() internal pure returns (IEtherbase) {
        return IEtherbase(_getEtherbaseAddress());
    }


	function _getEtherbaseAddress() internal pure returns (address payable) {
        return payable(0xd2bA3e0000000000000000000000000000000000);
    }

	/** END ETHERBASE Functions */

	/// @notice Gets User Balance of S-Fuel
	/// @dev Explain to a developer any extra details
	/// @param _address Ethereum Address
	/// @return uint256 returns their balance
    function _getBalance(address _address) internal view returns (uint256) {
        return _address.balance;
    }
	
	/** Balance Check Functions */
	/// Allows Checking of S-Fuel Balance
	function getBalance() external view returns (uint256) {
		return msg.sender.balance;
	}

	/// Allows Retrieval of This Contract Balance
	function getContractBalance() external view returns (uint256) {
		return address(this).balance;
	}

	receive() external payable {
        emit EtherDeposit(msg.sender, msg.value);
    }

	/// @dev Allows Depsoit of Ether
    fallback() external payable {
        if (msg.value > 0) {
            emit EtherDeposit(msg.sender, msg.value);
		}
    }
	
	/** "Administrative Functions" */
	/*** Contract Manager Functions */
	function _calculateFillUp(uint256 _currentBalance) internal view returns (uint256) {
		return MIN_CONTRACT_BALANCE - _currentBalance;
	}

	function _fillContract() internal isActive {
		uint256 _currentBalance = _getBalance(address(this));
		uint256 _requestAmount = _calculateFillUp(_currentBalance);
		_getEtherbase().partiallyRetrieve(payable(address(this)), _requestAmount);
		require(_getBalance(address(this)) == MIN_CONTRACT_BALANCE, "Error Filling Up");
		emit ContractFilled(msg.sender, _requestAmount);
	}

	function fillContract() external {
		_fillContract();
		
	}
}