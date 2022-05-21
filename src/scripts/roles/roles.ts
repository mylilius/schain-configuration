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
 * @file roles.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/


import GlobalController from '../../controller';
import * as Config from '../../config';

/// Script IMports
import CheckRolesL1 from './check_roles_l1';
import CheckEtherbase from './check_etherbase';
import CheckConfigController from './check_config_controller';
import CheckMarionette from './check_marionette';

/// Environment Var Imports
/// Message Proxy | L1
/// 
const L1_ROLE_CHAINS: string = Config.ROLES_L1_CHAIN;
const L1_ROLE_CHECK: boolean = Config.ROLES_L1_CHECK;

/// Etherbase | L2
const ETHERBASE_CHAINS: string = Config.ETHERBASE_CHAINS;
const ETHERBASE_CHECK: boolean = Config.ETHERBASE_CHECK;

/// ConfigController | L2
const CONFIG_CONTROLLER_CHAINS: string = Config.CONFIG_CONTROLLER_CHAINS;
const CONFIG_CONTROLLER_CHECK: boolean = Config.CONFIG_CONTROLLER_CHECK;

/// Marionette | L2 -> MutliSig Only
const MARIONETTE_CHECK: boolean = Config.MARIONETTE_CHECK;
const MARIONETTE_CHAINS: string = Config.MARIONETTE_CHAINS;

class Roles {

    private controller: GlobalController = new GlobalController();

    public async checkL1Roles() {
        if (!L1_ROLE_CHECK) {
            return;
        }
        if (L1_ROLE_CHAINS === 'both') {
            await CheckRolesL1(this.controller, 'chainA');
            await CheckRolesL1(this.controller, 'chainB');
        } else {
            await CheckRolesL1(this.controller, L1_ROLE_CHAINS);
        }
    }

    public async checkEtherbase() {
        if (!ETHERBASE_CHECK) {
            return;
        }

        if (ETHERBASE_CHAINS === 'both') {
            await CheckEtherbase(this.controller, 'chainA');
            await CheckEtherbase(this.controller, 'chainB');
        } else {
            await CheckEtherbase(this.controller, ETHERBASE_CHAINS);
        }
    }

    public async checkConfigController() {
        if (!CONFIG_CONTROLLER_CHECK) {
            return;
        }

        if (CONFIG_CONTROLLER_CHAINS === 'both') {
            await CheckConfigController(this.controller, 'chainA');
            await CheckConfigController(this.controller, 'chainB');
        } else {
            await CheckConfigController(this.controller, CONFIG_CONTROLLER_CHAINS);
        }
    }

    public async checkMarionette() {
        if (!MARIONETTE_CHECK) {
            return;
        }

        if (MARIONETTE_CHAINS === 'both') {
            await CheckMarionette(this.controller, 'chainA');
            await CheckMarionette(this.controller, 'chainB');
        } else {
            await CheckMarionette(this.controller, MARIONETTE_CHAINS);
        }
    }
}

async function main() {
    const roles: Roles = new Roles();
    await roles.checkL1Roles();
    await roles.checkEtherbase();
    await roles.checkConfigController();
    await roles.checkMarionette();
}



main()
    .then(() => {
        process.exit(0);
    })
    .catch((err: any) => {
        console.log("Error: ", err);
        process.exit(1); 
    });