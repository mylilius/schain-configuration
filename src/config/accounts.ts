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
 * @file accounts.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import dotenv from 'dotenv';

dotenv.config();

export interface IAccount {
	[key: string]: string;
}


export const SAFE_ADDRESSES: IAccount = {
    'chainA': process.env.CHAIN_A_SAFE_ADDRESS as string,
    'chainB': process.env.CHAIN_B_SAFE_ADDRESS as string
}

export const ACCOUNTS: IAccount = {
	'chainA': process.env.CHAIN_A_ORIGINAL_OWNER_PK as string,
	'chainB': process.env.CHAIN_B_ORIGINAL_OWNER_PK as string
}

export const MULTI_SIG: string = "0xD244519000000000000000000000000000000000";