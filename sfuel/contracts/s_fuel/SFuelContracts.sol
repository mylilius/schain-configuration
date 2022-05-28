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
 *
 *   Huge Acknowledgment to AP & CS for Guidance on this contract
 */

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import "../interfaces/IEtherbase.sol";


/// @title SFuel Whitelisting Contract
/// @author TheGreatAxios
/// @notice Allows S-Fuel to be guideded to the proper entities
/// @dev Utilizes Etherbase Under the Hood for Native S-Fuel
contract SFuelContracts is AccessControlEnumerable {

	using SafeMath for uint256;

	/// @notice This is the role for a whitelisted contract
	/// @dev Required for a contract to ping onlyWhitelisted
	bytes32 public constant IS_WHITELISTED_CONTRACT = keccak256('IS_WHITELISTED_CONTRACT');

	/// @notice This is the role required to add a contract to whitelist
	/// @dev Required for an admin to manager whitelist
	bytes32 public constant WHITELIST_MANAGER_ROLE = keccak256('WHITELIST_MANAGER_ROLE');

	/// @notice This is the role required to manage the balances needed
	/// @dev Required for an admin to manager whitelist
	bytes32 public constant CONTRACT_MANAGER_ROLE = keccak256('CONTRACT_MANAGER_ROLE');

	/// @notice The amount a user should have after being topped up
	/// @dev Can be updated by CONTRACT_MANAGER
	uint256 private MIN_USER_BALANCE;

	/// @notice Amount the contract should have after being filled up
	/// @dev Can be updated by CONTRACT_MANAGER
	uint256 private MIN_CONTRACT_BALANCE;

	/// @notice Allows contract to be paused in case of emergency
	/// @dev Can be updated by CONTRACT_MANAGER
	bool isPaused;

	/**
	*
	* Events
	*
	**/
	event EtherDeposit(address indexed sender, uint256 value);
	event ContractFilled(address indexed caller, uint256 value);
	event RetrievedSFuel(address indexed reciever, address indexed whitelistedContract, uint256 amount);
	event ReturnedSFuel(address indexed returner, address indexed whitelistedContract, uint256 amount);
	
	constructor() {
		_grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
		_grantRole(WHITELIST_MANAGER_ROLE, msg.sender);
		_grantRole(CONTRACT_MANAGER_ROLE, msg.sender);
		
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

	modifier onlyDefaultAdmin() {
		require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "DEFAULT_ADMIN_ROLE Required");
		_;
	}

	modifier isActive() {
		require(!isPaused, "Contract is Paused");
		_;
	}

	/// @notice Used by other contracts as a function to top up S-Fuel
	/// @dev msg.sender must be whitelisted to complete, onlyWhitelisted requires [msg.sender] to be contract
	/// @param _retriever Address of User
	function retrieveSFuel(address payable _retriever) external payable isActive onlyWhitelisted {
		if (getBalance(_retriever) < MIN_USER_BALANCE) {
			uint256 _retrievalAmount = MIN_USER_BALANCE.sub(getBalance(_retriever));
			require(getBalance(address(this)) >= _retrievalAmount, "Insufficent Balance in Contract");
			_retriever.transfer(_retrievalAmount);
			emit RetrievedSFuel(_retriever, msg.sender, _retrievalAmount);
		}
	}
	
	/// @notice Gets Etherbase Instance
	/// @return IEtherbase -> Instance to interact with
    function _getEtherbase() internal pure returns (IEtherbase) {
        return IEtherbase(payable(0xd2bA3e0000000000000000000000000000000000));
    }

	/// @notice Retrieves S-Fuel Balance
	/// @param _address ethereum address
	/// @return uint256 balance
	function getBalance(address _address) public view returns (uint256) {
		return _address.balance;
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
	
	/// @notice Allows CONTRACT_MANAGER to fill contract up
	/// @dev Must have ETHER_MANAGER_ROLE assigned on Etherbase
	function fillContract() external onlyContractManager {
		uint256 _currentBalance = getBalance(address(this));
		uint256 _requestAmount = MIN_CONTRACT_BALANCE.sub(_currentBalance);
		_getEtherbase().partiallyRetrieve(payable(address(this)), _requestAmount);
		require(getBalance(address(this)) == MIN_CONTRACT_BALANCE, "Error Filling Up");
		emit ContractFilled(msg.sender, _requestAmount);
	}

	/// @notice Allows CONTRACT_MANAGER to Pause/Unpause Contract
	/// @dev Must Have CONTRACT_MANAGER_ROLE
	function updateActiveState() external onlyContractManager {
		isPaused = !isPaused;
	}

}