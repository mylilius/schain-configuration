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
 * @file enable_free_contract_deployment.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import GlobalController from '../controller';
import { Contract } from 'ethers';

export const changeFreeContractDeployment = async(controller: GlobalController, enable: boolean): Promise<void> => {

	try {
		console.log("------------------------------");
		console.log("Start Free Contract Deployment");
		console.log("------------------------------");
		/// 1. Load Config Controller
		let configControllerContract: Contract = controller.getContract('config')!.contract;
		let marionetteContract: Contract = controller.getContract('marionette')!.contract;
		let etherbase: Contract = controller.getContract('etherbase')!.contract;
		// console.log(etherbase);
		// console.log(controller.signer.address);
		// console.log(etherbase);
		// /// Etherbase
		// const DEFAULT_ADMIN_ROLE = await etherbase.callStatic.DEFAULT_ADMIN_ROLE();
		// console.log("Default Admin Role: ", DEFAULT_ADMIN_ROLE);
		// const ETHER_MANAGER_ROLE = await etherbase.callStatic.ETHER_MANAGER_ROLE();
		// console.log("Default Admin Role: ", ETHER_MANAGER_ROLE);
		// let tx = await etherbase.functions.grantRole(ETHER_MANAGER_ROLE, controller.signer.address);
		
		// console.log("Tx: ", tx);
		// console.log("Admin: ", await etherbase.callStatic.hasRole(DEFAULT_ADMIN_ROLE, controller.signer.address));
		// console.log("Etherbase: ", await etherbase.callStatic.hasRole(ETHER_MANAGER_ROLE, "0xD244519000000000000000000000000000000000"));
		// console.log("Admin: ", await etherbase.callStatic.hasRole(DEFAULT_ADMIN_ROLE, controller.signer.address));
		// console.log("Etherbase: ", await etherbase.callStatic.hasRole(ETHER_MANAGER_ROLE, "0xD244519000000000000000000000000000000000"));

		// let DEFAULT_ADMIN_ROLE_M = await marionetteContract.callStatic.PUPPETEER_ROLE();
		// console.log(await marionetteContract.callStatic.getRoleMemberCount(DEFAULT_ADMIN_ROLE_M));

		/// Marionette Checks
		const DEFAULT_ADMIN_ROLE_M = await marionetteContract.callStatic.DEFAULT_ADMIN_ROLE();
		const IMA_ROLE = await marionetteContract.callStatic.IMA_ROLE();
		const PUPPETEER_ROLE = await marionetteContract.callStatic.PUPPETEER_ROLE();

		/// Predepoloyed
		console.log("DEFAULT_ADMIN_ROLE_M", await marionetteContract.hasRole(DEFAULT_ADMIN_ROLE_M, controller.signer.address));
		console.log("IMA_ROLE", await marionetteContract.hasRole(IMA_ROLE, controller.signer.address));
		console.log("PUPPETEER_ROLE", await marionetteContract.hasRole(PUPPETEER_ROLE, controller.signer.address));
		console.log("DEFAULT_ADMIN_ROLE_M", await marionetteContract.hasRole(DEFAULT_ADMIN_ROLE_M, "0xD244519000000000000000000000000000000000"));
		console.log("IMA_ROLE", await marionetteContract.hasRole(IMA_ROLE, "0xD244519000000000000000000000000000000000"));
		console.log("PUPPETEER_ROLE", await marionetteContract.hasRole(PUPPETEER_ROLE, "0xD244519000000000000000000000000000000000"));
		// /// Owner




	// 	// /// 1a. Check Enabled/Disabled
	// 	const isEnabled: boolean = await configControllerContract.callStatic.isFCDEnabled();
	// 	/// 1c. If False -> Continue else break
	// 	const matchesRequest: boolean = isEnabled === enable;

	// 	if (matchesRequest) {
	// 		console.log("Matches");
	// 		return;
	// 	}
	// 	/// 2a. Confirm Owner is DEPLOYER_ADMIN_ROLE
	// 	const DEPLOYER_ADMIN_ROLE = await configControllerContract.callStatic.DEPLOYER_ADMIN_ROLE();
	// 	const DEFAULT_ADMIN_ROLE = await configControllerContract.callStatic.DEFAULT_ADMIN_ROLE();
	// 	const DEPLOYER_ROLE = await configControllerContract.callStatic.DEPLOYER_ROLE();
	// 	const MTM_ADMIN_ROLE = await configControllerContract.callStatic.MTM_ADMIN_ROLE();
	// 	// console.log("Deployer Admin Role: ", DEPLOYER_ADMIN_ROLE);
	// 	// console.log("Address: ", controller.signer.address);
	// 	const isDeployerAdmin: boolean = await configControllerContract.callStatic.hasRole(DEPLOYER_ADMIN_ROLE, controller.signer.address);
	// 	const isDefaultAdmin: boolean = await configControllerContract.callStatic.hasRole(DEFAULT_ADMIN_ROLE, controller.signer.address);
	// 	const isDeployer: boolean = await configControllerContract.callStatic.hasRole(DEPLOYER_ROLE, controller.signer.address);
	// 	const isMTMAdmin: boolean = await configControllerContract.callStatic.hasRole(MTM_ADMIN_ROLE, controller.signer.address);
		


	// 	console.log("Has Role [isDeployerAdmin]: ", isDeployerAdmin);
	// 	console.log("Has Role [isDefaultAdmin]: ", isDefaultAdmin);
	// 	console.log("Has Role [isDeployer]: ", isDeployer);
	// 	console.log("Has Role [isMTMAdmin]: ", isMTMAdmin);
	// 	console.log(await configControllerContract.callStatic.getRoleMemberCount(DEPLOYER_ADMIN_ROLE));
	// 	/ 3. Check Role -> DEPLOYER_ADMIN_ROLE on Multisig
	// 	/ 4. Assign if False from Originator
	// 	/ 5. Enable Free Contract Deployment
	// 	console.log("------------------------------");
	// 	console.log("Stop Free Contract Deployment");
	// 	console.log("------------------------------");
	} catch (err) {
		console.log('Error | Free Contract Deployment');
		console.log(err);
	}
	
}