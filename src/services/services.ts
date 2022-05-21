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
 * @file services.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/


import { changeFreeContractDeployment } from './enable_free_contract_deployment';
import { addOwnerRoles } from './add_owner_roles';

import GlobalController from '../controller';

class Services {

	private controller: GlobalController;

	constructor(controller: GlobalController) {
		this.controller = controller;
	}

	public async freeContractDeployment (enable: boolean) {
		await changeFreeContractDeployment(this.controller, enable);
	}

	public async addRoles() {
		await addOwnerRoles(this.controller);
	}

}

export default Services;