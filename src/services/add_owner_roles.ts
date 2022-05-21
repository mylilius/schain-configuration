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
 * @file add_owner_roles.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import GlobalController from '../controller';
import { utils, Contract } from 'ethers';

export const addOwnerRoles = async(controller: GlobalController): Promise<void> => {
	console.log(controller.getContract('messageProxy'));
	const contract: Contract = controller.getContract('messageProxy')!.contract;
	
	const CHAIN_CONNECTOR_ROLE = await contract.callStatic.CHAIN_CONNECTOR_ROLE();
	const CONSTANT_SETTER_ROLE = await contract.callStatic.CONSTANT_SETTER_ROLE();
	const DEFAULT_ADMIN_ROLE = await contract.callStatic.DEFAULT_ADMIN_ROLE();
	const EXTRA_CONTRACT_REGISTRAR_ROLE = await contract.callStatic.EXTRA_CONTRACT_REGISTRAR_ROLE();

	const sChainHash = utils.keccak256(utils.toUtf8Bytes('stocky-pleione'));
	console.log("S Chain Hash: ", sChainHash);
	console.log("Is SChain Owner: ", await contract.callStatic.isSchainOwner(controller.signer.address, sChainHash));
	console.log("CHAIN_CONNECTOR_ROLE: ", await contract.callStatic.hasRole(CHAIN_CONNECTOR_ROLE, controller.signer.address));
	console.log("CONSTANT_SETTER_ROLE: ", await contract.callStatic.hasRole(CONSTANT_SETTER_ROLE, controller.signer.address));
	console.log("DEFAULT_ADMIN_ROLE: ", await contract.callStatic.hasRole(DEFAULT_ADMIN_ROLE, controller.signer.address));
	console.log("EXTRA_CONTRACT_REGISTRAR_ROLE: ", await contract.callStatic.hasRole(EXTRA_CONTRACT_REGISTRAR_ROLE, controller.signer.address));
	


	// let tx = {
	// 	to: '0x656fb12abab353FB1875a4e3Dc4D70179CB85BA4',
	// 	data: ''	
	// };

	/// Built Post Message by encoding data

}