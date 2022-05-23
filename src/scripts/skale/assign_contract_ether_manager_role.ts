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
 * @file assign_contract_ether_manager_role.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import * as Config from '../../config';
import AssignL2 from './assign_l2';

const ENABLED: boolean = Config.ASSIGN_CONTRACT_ETHER_BASE;
const FROM: string = Config.ASSIGN_CONTRACT_ETHER_BASE_FROM;
const CONTRACT_ADDRESS: string = Config.ASSIGN_CONTRACT_ETHER_BASE_ADDRESS;
const CHAINS: string = Config.ASSIGN_CONTRACT_ETHER_BASE_CHAINS;

function main() {
    const assignL2: AssignL2 = new AssignL2();
    if (ENABLED) {
        assignL2.assignEtherBaseManagerRole(true, CHAINS, FROM, CONTRACT_ADDRESS);
    }
}

main();
