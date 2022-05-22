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
const ASSIGN_ETHER_BASE_DEFAULT_ADMIN_ROLE: boolean = Config.ASSIGN_ETHER_BASE_DEFAULT_ADMIN_ROLE;
const ASSIGN_ETHER_BASE_MANAGER_ROLE: boolean = Config.ASSIGN_ETHER_BASE_MANAGER_ROLE;
const ASSIGN_CONFIG_CONTROLLER_DEPLOYER_ROLE: boolean = Config.ASSIGN_CONFIG_CONTROLLER_DEPLOYER_ROLE;
const ASSIGN_CONFIG_CONTROLLER_DEFAULT_ADMIN_ROLE: boolean = Config.ASSIGN_CONFIG_CONTROLLER_DEFAULT_ADMIN_ROLE;
const ASSIGN_CONFIG_CONTROLLER_DEPLOYER_ADMIN_ROLE: boolean = Config.ASSIGN_CONFIG_CONTROLLER_DEPLOYER_ADMIN_ROLE;
const ASSIGN_CONFIG_CONTROLLER_MTM_ADMIN_ROLE: boolean = Config.ASSIGN_CONFIG_CONTROLLER_MTM_ADMIN_ROLE;


/// Assignment
const ASSIGN_CHAINS: string = Config.ASSIGN_CHAINS;
const ASSIGN_TO: string = Config.ASSIGN_TO;
const DEFAULT_ADMIN_ROLE: string = 'default_admin_role';

class MultiSig {
    
    private controller: GlobalController = new GlobalController();

    public assignEtherbaseDefaultAdminRole() {
        if (!ASSIGN_ETHERBASE || !ASSIGN_ETHER_BASE_DEFAULT_ADMIN_ROLE) {
            return;
        }

        if (ASSIGN_CHAINS === 'both') {
            this._assignEtherbase('chainA', 'DEFAULT_ADMIN_ROLE');
            this._assignEtherbase('chainB', 'DEFAULT_ADMIN_ROLE');
        } else {
            this._assignEtherbase(ASSIGN_CHAINS, 'DEFAULT_ADMIN_ROLE');
        }
    }

    public assignEtherbaseEtherManagerRole() {
        if (!ASSIGN_ETHERBASE || !ASSIGN_ETHER_BASE_MANAGER_ROLE) {
            return;
        }

        if (ASSIGN_CHAINS === 'both') {
            this._assignEtherbase('chainA', 'ETHER_MANAGER_ROLE');
            this._assignEtherbase('chainB', 'ETHER_MANAGER_ROLE');
        } else {
            this._assignEtherbase(ASSIGN_CHAINS, 'ETHER_MANAGER_ROLE');
        }
    }

    public assignConfigControllerDefaultAdminRole() {
        if (!ASSIGN_CONFIG_CONTROLLER || !ASSIGN_CONFIG_CONTROLLER_DEFAULT_ADMIN_ROLE) {
            return;
        }

        if (ASSIGN_CHAINS === 'both') {
            this._assignConfigController('chainA', 'DEFAULT_ADMIN_ROLE');
            this._assignConfigController('chainB', 'DEFAULT_ADMIN_ROLE');
        } else {
            this._assignConfigController(ASSIGN_CHAINS, 'DEFAULT_ADMIN_ROLE');
        }
    }

    public assignConfigControllerDeployerRole() {
        console.log("ABC")
        console.log(ASSIGN_CONFIG_CONTROLLER, ASSIGN_CONFIG_CONTROLLER_DEPLOYER_ROLE);
        if (!ASSIGN_CONFIG_CONTROLLER || !ASSIGN_CONFIG_CONTROLLER_DEPLOYER_ROLE) {
            return;
        }

        if (ASSIGN_CHAINS === 'both') {
            console.log(1)
            this._assignConfigController('chainA', 'DEPLOYER_ROLE');
            this._assignConfigController('chainB', 'DEPLOYER_ROLE');
        } else {
            console.log(2)
            this._assignConfigController(ASSIGN_CHAINS, 'DEPLOYER_ROLE');
        }
    }

    /// TODO Implement
    public assignConfigControllerDeployerAdminRole() {
        
        if (!ASSIGN_CONFIG_CONTROLLER || !ASSIGN_CONFIG_CONTROLLER_DEPLOYER_ADMIN_ROLE) {
            return;
        }

        if (ASSIGN_CHAINS === 'both') {
            console.log(1)
            this._assignConfigController('chainA', 'DEPLOYER_ADMIN_ROLE');
            this._assignConfigController('chainB', 'DEPLOYER_ADMIN_ROLE');
        } else {
            console.log(2)
            this._assignConfigController(ASSIGN_CHAINS, 'DEPLOYER_ADMIN_ROLE');
        }
    }

    /// TODO Implement
    public assignConfigControllerMTMAdminRole() {
        if (!ASSIGN_CONFIG_CONTROLLER || !ASSIGN_CONFIG_CONTROLLER_MTM_ADMIN_ROLE) {
            return;
        }

        if (ASSIGN_CHAINS === 'both') {
            console.log(1)
            this._assignConfigController('chainA', 'MTM_ADMIN_ROLE');
            this._assignConfigController('chainB', 'MTM_ADMIN_ROLE');
        } else {
            console.log(2)
            this._assignConfigController(ASSIGN_CHAINS, 'MTM_ADMIN_ROLE');
        }
    }


    private _assignEtherbase(chain: string, role: string) {
        let res = assignRole(ASSIGN_TO, 'Etherbase', 'grantRole', chain, role, this.controller);
    }

    // private _assignMarionette(chain: string, role: string) {}
    private _assignConfigController(chain: string, role: string) {
        let res = assignRole(ASSIGN_TO, 'ConfigController', 'grantRole', chain, role, this.controller);
    }
}

function main() {
    const msg: MultiSig = new MultiSig();
    msg.assignEtherbaseDefaultAdminRole();
    msg.assignEtherbaseEtherManagerRole();
    msg.assignConfigControllerDefaultAdminRole();
    msg.assignConfigControllerDeployerRole();
    msg.assignConfigControllerDeployerAdminRole();
    msg.assignConfigControllerMTMAdminRole();
}



main();