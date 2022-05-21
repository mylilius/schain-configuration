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
 * @file environment.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import dotenv from 'dotenv';
dotenv.config();

/// Message Proxy | L1
export const ROLES_L1_CHECK: boolean = Boolean(process.env.ROLES_L1_CHECK === 'true') as boolean;
export const ROLES_L1_CHAIN: string = process.env.ROLES_L1_CHAIN as string;

/// Etherbase | L2
export const ETHERBASE_CHAINS: string = process.env.ETHERBASE_CHAINS as string;
export const ETHERBASE_CHECK: boolean = Boolean(process.env.ETHERBASE_CHECK === 'true') as boolean;

/// Config Controller | L2
export const CONFIG_CONTROLLER_CHAINS: string = process.env.CONFIG_CONTROLLER_CHAINS as string;
export const CONFIG_CONTROLLER_CHECK: boolean = Boolean(process.env.CONFIG_CONTROLLER_CHECK === 'true') as boolean;

/// Marionette | L2
export const MARIONETTE_CHAINS: string = process.env.MARIONETTE_CHAINS as string;
export const MARIONETTE_CHECK: boolean = Boolean(process.env.MARIONETTE_CHECK === 'true') as boolean;

/// IMA | L2?
export const IMA_CHAINS: string = process.env.IMA_CHAINS as string;
export const IMA_CHECK: boolean = Boolean(process.env.IMA_CHECK === 'true') as boolean;