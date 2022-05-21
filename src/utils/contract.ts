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
 * @file contract.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import * as Utils from '../utils';
import * as Config from '../config';
import { ethers } from 'ethers';

class Contract {
	private _address: string;
	private _abi: any;
	private _signer: Utils.Signer;
	private _contract: ethers.Contract;

	constructor(key: string, signer: Utils.Signer, isSChain: boolean = true) {
		this._address = isSChain ? Config.ADDRESSES_SCHAIN[key] : Config.ADDRESSES_MAINNET[key];
		this._abi = isSChain ? Config.ABIs_SCHAIN[key] : Config.ABIs_MAINNET[key];
		this._signer = signer;
		this._contract = this._buildContract();
	}

	private _buildContract(): ethers.Contract {
		return new ethers.Contract(this._address, this._abi, this._signer.wallet);
	}

	public get contract() : ethers.Contract {
		return this._contract;
	}
}

export {
	Contract
}