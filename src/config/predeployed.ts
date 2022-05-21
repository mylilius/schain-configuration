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
 * @file predeployed.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

export interface IAddress {
	[key: string]: string;
}

export const ADDRESSES_SCHAIN: IAddress = {
	etherbase: "0xd2bA3e0000000000000000000000000000000000",
	marionette: "0xD2c0DeFACe000000000000000000000000000000",
	configController: "0xD2002000000000000000000000000000000000d2",
};

export const ADDRESSES_MAINNET: IAddress = {
	messageProxy: "0x656fb12abab353FB1875a4e3Dc4D70179CB85BA4"
};