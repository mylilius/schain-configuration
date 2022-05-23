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
 * @file assign_l2.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import GlobalController from '../../controller';
import * as Config from '../../config';

/// Used for Assigning a Contract to SFuelContracts or SFuelContractsUpgradeable
import assignContractToEtherbase from './etherbase/assign_contract';
import assert from 'assert';

class AssignL2 {

    private controller: GlobalController = new GlobalController();

    public assignEtherBaseManagerRole(isContract: boolean, chains: string, from: string, contractAddress?: string, userAddresses?: string[]) {
        if (isContract) {
            assert(contractAddress != undefined);
            if (chains === 'both') {
                this._assignToContract(contractAddress, 'chainA', from);
                this._assignToContract(contractAddress, 'chainB', from);
            } else {
                this._assignToContract(contractAddress, chains, from);
            }
        } else {
            assert(userAddresses != undefined);
            assert(userAddresses.length > 0);
            if (chains === 'both') {
                this._assignToUsers(userAddresses, 'chainA', from);
                this._assignToUsers(userAddresses, 'chainB', from);
            } else {
                this._assignToUsers(userAddresses, chains, from);
            }
        }
    }
    
    private _assignToContract(contractAddress: string, chain: string, from: string) {
        assignContractToEtherbase(contractAddress, chain, this.controller, from);
    }
    private _assignToUsers(userAddresses: string[], chain: string, from: string) {
        for (const _userAddress of userAddresses) {
            assignContractToEtherbase(_userAddress, chain, this.controller, from);
        }
    }

}

export default AssignL2;