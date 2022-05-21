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
 * @file networks.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import dotenv from 'dotenv';

dotenv.config();

interface IChainName {
    [key: string]: string;
}

export const CHAIN_A: any = {
	key: 'chainA',
	name: process.env.CHAIN_A_NAME,
	baseUrl: process.env.CHAIN_A_BASE_URL,
	vId: process.env.CHAIN_A_VERSION
};

export const CHAIN_B: any = {
	key: 'chainB',
	name: process.env.CHAIN_B_NAME,
	baseUrl: process.env.CHAIN_B_BASE_URL,
	vId: process.env.CHAIN_B_VERSION
};

export const CHAIN_NAMES: IChainName = {
    'chainA': process.env.CHAIN_A_NAME as string,
    'chainB': process.env.CHAIN_B_NAME as string
}

export const MAINNET: string = "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";