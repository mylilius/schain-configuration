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
 * @file assignRole.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/


import GlobalController from '../../../controller';
import { exec } from 'child_process';
import { Contract } from 'ethers';
import * as Config from '../../../config';

function assignContractToEtherbase(assignee: string, chain: string, controller: GlobalController, from: string) {

    const S_CHAIN_NAME: string = Config.CHAIN_NAMES[chain];

    const smartContract: Contract = controller.getContract('etherbase', chain === 'chainA')!.contract;

    const ETHER_MANAGER_ROLE = smartContract.callStatic.ETHER_MANAGER_ROLE();

    ETHER_MANAGER_ROLE!
        .then((value: string) => {
            let _roleHash = value;
            exec(`cd ~/MyLilius/infrastructure/blockchain/multisigwallet-cli && npx msig encodeData ${S_CHAIN_NAME} 'Etherbase' grantRole ${_roleHash} ${assignee}`, (err, stdout, stderr) => {
                if (err) {
                  console.error();
                  console.error("Error:");
                  console.error(err);
                  console.error();
                }
                if (stdout) {
                  exec(`cd ~/MyLilius/infrastructure/blockchain/multisigwallet-cli && npx msig submitTransactionWithData`)
                }
              });
        })
        .catch((err: any) => {
            console.log(err);
        })

}

export default assignContractToEtherbase;

