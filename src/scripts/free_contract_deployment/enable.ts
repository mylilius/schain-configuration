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
 * @file enable.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import GlobalController from '../../controller';
import * as Config from '../../config';
import generateEncodedData from './encode_data';

const ENABLE_FCD: boolean = Config.ENABLE_FREE_CONTRACT_DEPLOYMENT;
const ENABLE_FCD_CHAINS: string = Config.ENABLE_FREE_CONTRACT_DEPLOYMENT_CHAINS;

class EnableFCD {

    private controller: GlobalController = new GlobalController();

    public enableFreeContractDeployment() {
        if (!ENABLE_FCD) {
            return;
        }

        if (ENABLE_FCD_CHAINS === 'both') {
            this._generateEncodedData('chainA');
            this._generateEncodedData('chainB');
        } else {
            this._generateEncodedData(ENABLE_FCD_CHAINS);
        }
    }

    private _generateEncodedData(chain: string) {
        generateEncodedData('enableFreeContractDeployment', chain, this.controller);
    }
}

function main() {
    const enableFCD: EnableFCD = new EnableFCD();
    enableFCD.enableFreeContractDeployment();
}

main();
