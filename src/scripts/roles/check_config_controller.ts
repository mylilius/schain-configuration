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
 * @file check_config_controller.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import GlobalController from '../../controller';
import { Contract, utils } from 'ethers';
import fs from 'fs';
import path from 'path';
import { FileStorage } from '../../utils';
import * as Config from '../../config';

const FS = new FileStorage();

const DIVIDER: string = '----------------------';
const CONTRACT: string = 'configController';
const CHAIN_A: string = 'chainA';

const OUTPUT_NAME: string = CONTRACT + '_';

async function CheckConfigController(controller: GlobalController, chain: string) {

    let result: any = {
        originator: {},
        safe: {}
    };

    try {
         /// Get Potential Owners
        const public_key: string = controller.getSigner(chain === CHAIN_A).address;
        
        result['originator']['public_key'] = public_key;
        
        const safe_key: string = Config.MULTI_SIG;
        
        result['safe']['public_key'] = safe_key;

        /// Load Contract
        const contract: Contract = controller.getContract(CONTRACT, chain === CHAIN_A)!.contract;
        result['contractAddress'] = contract.address;

        // console.log("Contract: ", contract);

        const DEFAULT_ADMIN_ROLE = await contract.callStatic.DEFAULT_ADMIN_ROLE();
        const DEPLOYER_ADMIN_ROLE = await contract.callStatic.DEPLOYER_ADMIN_ROLE();
        const DEPLOYER_ROLE = await contract.callStatic.DEPLOYER_ROLE();
        const MTM_ADMIN_ROLE = await contract.callStatic.MTM_ADMIN_ROLE();

        const originator_is_default_admin_role = await contract.callStatic.hasRole(DEFAULT_ADMIN_ROLE, public_key);
        const originator_is_deployer_admin_role = await contract.callStatic.hasRole(DEPLOYER_ADMIN_ROLE, public_key);
        const originator_is_deployer_role = await contract.callStatic.hasRole(DEPLOYER_ROLE, public_key);
        const originator_is_mtm_role = await contract.callStatic.hasRole(MTM_ADMIN_ROLE, public_key);

        result['originator']['is_default_admin_role'] = originator_is_default_admin_role;
        result['originator']['is_deployer_admin_role'] = originator_is_deployer_admin_role;
        result['originator']['is_deployer_role'] = originator_is_deployer_role;
        result['originator']['is_mtm_role'] = originator_is_mtm_role;

        /// Check Roles on SAFE

        const safe_is_default_admin_role = await contract.callStatic.hasRole(DEFAULT_ADMIN_ROLE, public_key);
        const safe_is_deployer_admin_role = await contract.callStatic.hasRole(DEPLOYER_ADMIN_ROLE, public_key);
        const safe_is_deployer_role = await contract.callStatic.hasRole(DEPLOYER_ROLE, public_key);
        const safe_is_mtm_role = await contract.callStatic.hasRole(MTM_ADMIN_ROLE, public_key);

        result['safe']['is_default_admin_role'] = safe_is_default_admin_role;
        result['safe']['is_deployer_admin_role'] = safe_is_deployer_admin_role;
        result['safe']['is_deployer_role'] = safe_is_deployer_role;
        result['safe']['is_mtm_role'] = safe_is_mtm_role;

         /// Write to File
        const json = JSON.stringify(result);
        const dir_length = FS.getDirLength(__dirname, 'roles');
        const file_name = `_${dir_length}_${OUTPUT_NAME}_${chain}.json`;
        FS.writeFile(__dirname, 'roles', file_name, json);
    } catch (err: any) {
        throw new Error(err);
    }
}

export default CheckConfigController;