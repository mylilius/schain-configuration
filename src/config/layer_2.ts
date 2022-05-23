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
 * @file layer_2.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import dotenv from 'dotenv';

dotenv.config();

export const ASSIGN_CONTRACT_ETHER_BASE: boolean = Boolean(process.env.ASSIGN_CONTRACT_ETHER_BASE === 'true') as boolean;
export const ASSIGN_CONTRACT_ETHER_BASE_FROM: string = process.env.ASSIGN_CONTRACT_ETHER_BASE_FROM as string;
export const ASSIGN_CONTRACT_ETHER_BASE_ADDRESS: string = process.env.ASSIGN_CONTRACT_ETHER_BASE as string;
export const ASSIGN_CONTRACT_ETHER_BASE_CHAINS: string = process.env.ASSIGN_CONTRACT_ETHER_BASE_CHAINS as string;

export const ASSIGN_USERS_ETHER_BASE: boolean = Boolean(process.env.ASSIGN_USERS_ETHER_BASE === 'true') as boolean;
export const ASSIGN_USERS_ETHER_BASE_ADDRESSES: Array<string> = (process.env.ASSIGN_USERS_ETHER_BASE_ADDRESSES as string).split(',');
export const ASSIGN_USERS_ETHER_BASE_CHAINS: string = process.env.ASSIGN_USERS_ETHER_BASE_CHAINS as string; 