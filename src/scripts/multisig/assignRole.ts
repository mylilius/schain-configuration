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
 * @file encodeData.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import GlobalController from '../../controller';
import { exec, ExecException } from 'child_process';
import { Contract } from 'ethers';
import * as Config from '../../config';

function assignRole(assignee: string, contract: string, fn: string, chain: string, role: string, controller: GlobalController) {
	console.log("FN: ", role);
	const S_CHAIN_NAME: string = Config.CHAIN_NAMES[chain];

	const smartContract: Contract = controller.getContract(contract.toLowerCase(), chain === 'chainA')!.contract;
	console.log(smartContract);
	let _function: Promise<any>;
	if (contract === 'Etherbase') {
		if (role === 'DEFAULT_ADMIN_ROLE') {
			console.log("DEFAULT");
			_function = smartContract.callStatic.DEFAULT_ADMIN_ROLE();
		} else {
			_function = smartContract.callStatic.ETHER_MANAGER_ROLE();
		}
	} else if (contract === 'ConfigController') {
		console.log("Config Controller");
		if (role === 'DEFAULT_ADMIN_ROLE') {
			console.log("Default Admin Role");
			_function = smartContract.callStatic.DEFAULT_ADMIN_ROLE();
		} else if (role === 'DEPLOYER_ROLE') {
			console.log("Deployer Role");
			_function = smartContract.callStatic.DEPLOYER_ROLE();
		}
	}

	_function!
			.then((value) => {
				console.log("Value: ", value);
				if (role != 'DEFAULT_ADMIN_ROLE' && value === '0x0000000000000000000000000000000000000000000000000000000000000000') {
					throw new Error('This is 0 Value');
				}
				let roleHash = value;
				exec(`cd ~/MyLilius/infrastructure/blockchain/multisigwallet-cli && npx msig encodeData ${S_CHAIN_NAME} ${contract} ${fn} ${roleHash} ${assignee}`, (err, stdout, stderr) => {
				  if (err) {
				    console.error();
				    console.error("Error:");
				    console.error(err);
				    console.error();
				  }
				  console.log(stdout);
				  console.error(stderr);
				});
			})
			.catch((err) => {
				console.log(err);
			})


	
}

export default assignRole;