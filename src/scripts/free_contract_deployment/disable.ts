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
 * @file disable.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import GlobalController from '../../controller';
import * as Config from '../../config';
import generateEncodedData from './encode_data';

const DISABLE_FCD: boolean = Config.DISABLE_FREE_CONTRACT_DEPLOYMENT;
const DISABLE_FCD_CHAINS: string = Config.DISABLE_FREE_CONTRACT_DEPLOYMENT_CHAINS;

class DisableFCD {

    private controller: GlobalController = new GlobalController();

    public disableFreeContractDeployment() {
        if (!DISABLE_FCD) {
            return;
        }

        if (DISABLE_FCD_CHAINS === 'both') {
            this._generateEncodedData('chainA');
            this._generateEncodedData('chainB');
        } else {
            this._generateEncodedData(DISABLE_FCD_CHAINS);
        }
    }

    private _generateEncodedData(chain: string) {
        generateEncodedData('disableFreeContractDeployment', chain, this.controller);
    }
}

function main() {
    const disableFCD: DisableFCD = new DisableFCD();
    disableFCD.disableFreeContractDeployment();
}

main();
