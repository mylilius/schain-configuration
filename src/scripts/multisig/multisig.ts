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
import assignRole from './assignRole';
import { Contract } from 'ethers';

const ASSIGN_ETHERBASE: boolean = Config.ASSIGN_ETHERBASE;
const ASSIGN_MARIONETTE: boolean = Config.ASSIGN_MARIONETTE;
const ASSIGN_CONFIG_CONTROLLER: boolean = Config.ASSIGN_CONFIG_CONTROLLER;

/// Roles to Fire Off
const ASSIGN_DEFAULT_ADMIN_ROLE: boolean = Config.ASSIGN_DEFAULT_ADMIN_ROLE;
const ASSIGN_ETHER_MANAGER_ROLE: boolean = Config.ASSIGN_ETHER_MANAGER_ROLE;
/// Assignment
const ASSIGN_CHAINS: string = Config.ASSIGN_CHAINS;
const ASSIGN_TO: string = Config.ASSIGN_TO;
const DEFAULT_ADMIN_ROLE: string = 'default_admin_role';

class MultiSig {
    
    private controller: GlobalController = new GlobalController();

    public assignDefaultAdminRole() {
        if (!ASSIGN_DEFAULT_ADMIN_ROLE) {
            return;
        }

        if (ASSIGN_CHAINS === 'both') {
            this._assignRoles('chainA', 'DEFAULT_ADMIN_ROLE');
            this._assignRoles('chainB', 'DEFAULT_ADMIN_ROLE');
        } else {
            this._assignRoles(ASSIGN_CHAINS, 'DEFAULT_ADMIN_ROLE');
        }
    }

    public assignEtherManagerRole() {
        if (!ASSIGN_ETHER_MANAGER_ROLE) {
            return;
        }

        if (ASSIGN_CHAINS === 'both') {
            this._assignRoles('chainA', 'ETHER_MANAGER_ROLE');
            this._assignRoles('chainB', 'ETHER_MANAGER_ROLE');
        } else {
            this._assignRoles(ASSIGN_CHAINS, 'ETHER_MANAGER_ROLE');
        }
    }

    private _assignRoles(chain: string, role: string) {
        if (ASSIGN_ETHERBASE) this._assignEtherbase(chain, role);
        if (ASSIGN_MARIONETTE) this._assignMarionette(chain, role);
        if (ASSIGN_CONFIG_CONTROLLER) this._assignConfigController(chain, role);
    }

    private _assignEtherbase(chain: string, role: string) {
        let res = assignRole(ASSIGN_TO, 'Etherbase', 'grantRole', chain, role, this.controller);
    }

    private _assignMarionette(chain: string, role: string) {}
    private _assignConfigController(chain: string, role: string) {}
}

function main() {
    const msg: MultiSig = new MultiSig();
    msg.assignDefaultAdminRole();
}



main();