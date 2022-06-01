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
 * @file assign_allocator_role.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import assignRoleMultisigWallet from "../multisig_assign_role";
import * as Config from '../../config';
import MultiSigWallet from "../../manager/wallet";

const CONTRACT: string = 'FileStorage';
const FUNCTION: string = 'grantRole';
const ROLE: string = 'ADMIN_ROLE';

async function main() {

    console.log("HERE");

    try {
        let multi_sig_wallet: MultiSigWallet = new MultiSigWallet();
        const ROLE_HASH = await multi_sig_wallet.getRole(CONTRACT, ROLE);
        await assignRoleMultisigWallet(multi_sig_wallet, CONTRACT, FUNCTION, <any>[ROLE_HASH, Config.ASSIGN_ETHER_MANAGER_ROLE_ADDRESS]);
        await multi_sig_wallet.checkRole(CONTRACT, ROLE);
    } catch (err) {
        throw new Error("Error Assigning ADMIN_ROLE on FileStorage");
    }
}

main()
    .then(() => process.exit(0))
    .catch((err: any) => {
        console.log(err);
        process.exit(1);
    });