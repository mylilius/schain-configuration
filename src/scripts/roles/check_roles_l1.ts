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
 * @file check_roles_l1.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/



import GlobalController from '../../controller';
import { Contract, utils } from 'ethers';
import fs from 'fs';
import path from 'path';
import { FileStorage } from '../../utils';

const FS = new FileStorage();

const DIVIDER: string = '----------------------';
const CONTRACT: string = 'messageProxy';
const CHAIN_A: string = 'chainA';

const OUTPUT_NAME: string = CONTRACT + '_';

async function CheckRolesL1(controller: GlobalController, chain: string) {

	/**
	 * 
	 * Check Chain Ownership on Mainnet - Calypso
	 * 
	**/

	let result: any = {
		originator: {},
		safe: {}
	};

	try {
		/// Load Chain Name
		const chain_name: string = controller.getSChainName(chain);
		result['chainName'] = chain_name;

		/// Hash Chain Name
		const s_chain_hash = utils.keccak256(utils.toUtf8Bytes(chain_name));
		result['chainHash'] = s_chain_hash;

		/// Get Potential Owner - Originator (Backup) & SAFE
		
		const public_key: string = controller.getSigner(chain === CHAIN_A).address;
		
		result['originator']['public_key'] = public_key;
		
		const safe_key: string = controller.getSafe(chain);
		
		result['safe']['public_key'] = safe_key;
		
		/// Load Contract
		const contract: Contract = controller.getContract(CONTRACT, chain === CHAIN_A)!.contract;
		result['contractAddress'] = contract.address;

		///  Check S Chain Ownership Assignments
		const originator_is_s_chain_owner: boolean = await contract.callStatic.isSchainOwner(public_key, s_chain_hash);
		result['originator']['isOwner'] = originator_is_s_chain_owner;

		const safe_is_s_chain_owner: boolean = await contract.callStatic.isSchainOwner(safe_key, s_chain_hash);
		result['safe']['isOwner'] = safe_is_s_chain_owner;

		/// 5 -> Load Roles
		const CHAIN_CONNECTOR_ROLE = await contract.callStatic.CHAIN_CONNECTOR_ROLE();
		const CONSTANT_SETTER_ROLE = await contract.callStatic.CONSTANT_SETTER_ROLE();
		const DEFAULT_ADMIN_ROLE = await contract.callStatic.DEFAULT_ADMIN_ROLE();
		const EXTRA_CONTRACT_REGISTRAR_ROLE = await contract.callStatic.EXTRA_CONTRACT_REGISTRAR_ROLE();

		const originator_is_chain_connector_role = await contract.callStatic.hasRole(CHAIN_CONNECTOR_ROLE, public_key);
		const originator_is_const_setter_role = await contract.callStatic.hasRole(CONSTANT_SETTER_ROLE, public_key);
		const originator_is_default_admin_role = await contract.callStatic.hasRole(DEFAULT_ADMIN_ROLE, public_key);
		const originator_is_extra_contract_registrar_role = await contract.callStatic.hasRole(EXTRA_CONTRACT_REGISTRAR_ROLE, public_key);

		result['originator']['is_chain_connector_role'] = originator_is_chain_connector_role;
		result['originator']['is_const_setter_role'] = originator_is_const_setter_role;
		result['originator']['is_default_admin_role'] = originator_is_default_admin_role;
		result['originator']['is_extra_contract_registrar_role'] = originator_is_extra_contract_registrar_role;

		const safe_is_chain_connector_role = await contract.callStatic.hasRole(CHAIN_CONNECTOR_ROLE, safe_key);
		const safe_is_const_setter_role = await contract.callStatic.hasRole(CONSTANT_SETTER_ROLE, safe_key);
		const safe_is_default_admin_role = await contract.callStatic.hasRole(DEFAULT_ADMIN_ROLE, safe_key);
		const safe_is_extra_contract_registrar_role = await contract.callStatic.hasRole(EXTRA_CONTRACT_REGISTRAR_ROLE, safe_key);

		result['safe']['is_chain_connector_role'] = safe_is_chain_connector_role;
		result['safe']['is_const_setter_role'] = safe_is_const_setter_role;
		result['safe']['is_default_admin_role'] = safe_is_default_admin_role;
		result['safe']['is_extra_contract_registrar_role'] = safe_is_extra_contract_registrar_role;

		
		
		const json = JSON.stringify(result);
		const dir_length = FS.getDirLength(__dirname, 'roles');
		const file_name = `_${dir_length}_${OUTPUT_NAME}_${chain}.json`;
		FS.writeFile(__dirname, 'roles', file_name, json);
		// fs.writeFileSync(path.join(__dirname, '../../../outputs/roles/', `_${numberOfTests}_${OUTPUT_NAME}_${chain}.json`), json);

		

	} catch (err: any) {
		throw Error(err);
	}
}

export default CheckRolesL1;