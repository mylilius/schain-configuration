// SPDX-License-Identifier: APGL-3.0

/**
 *   SFuelV3.sol - SChain Configuration
 *   Copyright (C) 2022-Present Lilius, Inc
 *   @author TheGreatAxios
 *
 *   SFuelV3 is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Affero General Public License as published
 *   by the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   SFuelV3 is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Affero General Public License for more details.
 *
 *   You should have received a copy of the GNU Affero General Public License
 *   along with SFuelV3.  If not, see <https://www.gnu.org/licenses/>.
 */

pragma solidity ^0.8.0;

import "../interfaces/IEtherbase.sol";

contract SFuelV3 {
    uint256 MAX_CONTRACT_BALANCE;
    uint256 MIN_CONTRACT_BALANCE;
    uint256 MIN_USER_BALANCE;

    constructor() {
        MIN_CONTRACT_BALANCE = 100000000000000 gwei;
        MAX_CONTRACT_BALANCE = 1 ether;
        MIN_USER_BALANCE = 1 * 10 ** 9;
    }

    function fillContract() external {
        uint256 _currentBalance = address(this).balance;
        IEtherbase _etherbase = _getEtherbase();
        _etherbase.partiallyRetrieve(payable(address(this)), MAX_CONTRACT_BALANCE - _currentBalance);
    }

    function refillEtherbase() external {
        _getEtherbaseAddress().transfer(address(this).balance);
    }

    /** ETHERBASE FUNCTIONS */
    function _getEtherbase() internal pure returns (IEtherbase) {
        return IEtherbase(_getEtherbaseAddress());
    }


	function _getEtherbaseAddress() internal pure returns (address payable) {
        return payable(0xd2bA3e0000000000000000000000000000000000);
    }


	function getContractBalance() external view returns (uint256) {
		return address(this).balance;
	}

	receive() external payable {
        // emit EtherDeposit(msg.sender, msg.value);
    }
}