// SPDX-License-Identifier: APGL-3.0

/**
 *   SFuelRegistry.sol - SChain Configuration
 *   Copyright (C) 2022-Present Lilius, Inc
 *   @author TheGreatAxios
 *
 *   SFuelRegistry is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Affero General Public License as published
 *   by the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   SFuelRegsitry is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Affero General Public License for more details.
 *
 *   You should have received a copy of the GNU Affero General Public License
 *   along with SFuelContracts.  If not, see <https://www.gnu.org/licenses/>.
 *
 */

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/AccessControlEnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";

contract SFuelRegistryUpgradeable is AccessControlEnumerableUpgradeable {

    using SafeMathUpgradeable for uint256;

    uint256 currentContract;

    mapping(uint256 => SFuelContract) private contracts;
    mapping(address => uint256) private addressSlot;

    bytes32 public constant WRITER_ROLE = keccak256('WRITER_WROLE');

    address public constant PRE_DEPLOYED = 0xD244519000000000000000000000000000000000;

    struct SFuelContract {
        address owner;
        address contractAddress;
        uint256 timestamp;
        string dAppName;
        string contractType;
        bool isActive;
    }

	modifier onlyWriter() {
		require(hasRole(WRITER_ROLE, msg.sender), "WRITER_ROLE Required");
		_;
	}

    function initialize(address _eoa) external initializer {
        AccessControlEnumerableUpgradeable.__AccessControlEnumerable_init();
        AccessControlEnumerableUpgradeable._grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        grantRole(WRITER_ROLE, PRE_DEPLOYED);
        grantRole(DEFAULT_ADMIN_ROLE, PRE_DEPLOYED);
        grantRole(WRITER_ROLE, _eoa);
        grantRole(DEFAULT_ADMIN_ROLE, _eoa);
        renounceRole(DEFAULT_ADMIN_ROLE, msg.sender);
        currentContract = 0;

    }

    function addContract(address contractAddress, string memory dAppName, string memory contractType) external onlyWriter {
        SFuelContract memory _sFuelContract = SFuelContract(msg.sender, contractAddress, block.timestamp, dAppName, contractType, true);
        contracts[currentContract] = _sFuelContract;
        addressSlot[contractAddress] = currentContract;
        currentContract.add(1);
    }

    function removeContract(address contractAddress) external onlyWriter {
        uint256 _addressSlot = addressSlot[contractAddress];
        SFuelContract storage _contract = contracts[_addressSlot];
        require(_contract.owner == msg.sender, "You cannot delete this contract");
        delete contracts[addressSlot[contractAddress]];
    }
}