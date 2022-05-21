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
 * @file controller.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

import * as Utils from './utils';
import * as Config from './config';

class GlobalController {
	
	private _networks: Utils.Networks = new Utils.Networks();
	private _web3ChainA: Utils.Web3;
	private _web3ChainB: Utils.Web3;
	private _web3Mainnet: Utils.Web3;
	private _chainASafe: string;
	private _chainBSafe: string;
	private _chainAOwner: Utils.Signer;
	private _chainBOwner: Utils.Signer;
	private _chainAMainnetOwner: Utils.Signer;
	private _chainBMainnetOwner: Utils.Signer;
	private _etherbaseChainA: Utils.Contract;
	private _marionetteChainA: Utils.Contract;
	private _configControllerChainA: Utils.Contract;
	private _etherbaseChainB: Utils.Contract;
	private _marionetteChainB: Utils.Contract;
	private _configControllerChainB: Utils.Contract;
	private _messageProxyChainA: Utils.Contract;
	private _messageProxyChainB: Utils.Contract;

	constructor() {
		this._initNetworks();
		this._web3ChainA = this._initWeb3('chainA');
		this._web3Mainnet = this._initWeb3('mainnet');
		this._web3ChainB = this._initWeb3('chainB');
		this._chainASafe = this._initSafe('chainA');
		this._chainBSafe = this._initSafe('chainB');
		this._chainAOwner = this._createOwner('chainA', true, false);
		this._chainBOwner = this._createOwner('chainB', false, false);
		this._chainAMainnetOwner = this._createOwner('chainA', false, true);
		this._chainBMainnetOwner = this._createOwner('chainB', false, true);
		this._etherbaseChainA = this._buildContract('etherbase', true, 'chainA');
		this._marionetteChainA = this._buildContract('marionette', true, 'chainA');
		this._configControllerChainA = this._buildContract('configController', true, 'chainA');
		this._etherbaseChainB = this._buildContract('etherbase', true, 'chainB');
		this._marionetteChainB = this._buildContract('marionette', true, 'chainB');
		this._configControllerChainB = this._buildContract('configController', true, 'chainB');
		this._messageProxyChainA = this._buildContract('messageProxy', false, 'chainA');
		this._messageProxyChainB = this._buildContract('messageProxy', false, 'chainB');
	}

	private _initNetworks() {
		let chainA: any = Config.CHAIN_A;
		let mainnet: any = Config.MAINNET;
		let chainB: any = Config.CHAIN_B;
		this._networks.buildSkaleNetwork(chainA);
		this._networks.buildSkaleNetwork(chainB);
		this._networks.buildNetwork(mainnet);
	}

	private _initWeb3(key: string) {
		const _rpcUrl: string = this._networks.getEndpoints(key)['rpc'];
		return new Utils.Web3(_rpcUrl);
	}

	private _initSafe(key: string) {
		const _address: string = Config.SAFE_ADDRESSES[key];
		return _address;
	}

	private _createOwner(key: string, isCalypso: boolean, isMainnet: boolean) {
		const _privateKey: string = Config.ACCOUNTS[key];
		let _client;
		if (isMainnet) {
			_client = this._web3Mainnet.client;
		} else if (isCalypso) {
			_client = this._web3ChainA.client;
		} else {
			_client = this._web3ChainB.client;
		}

		return new Utils.Signer(_privateKey, _client);
	}

	public getSigner(isChainA: boolean) {
		return isChainA ? this._chainAOwner.wallet : this._chainBOwner.wallet;
	}

	private _buildContract(key: string, isSChain: boolean = true, chainKey: string) {
		if (!isSChain) {
			return new Utils.Contract(key, chainKey === 'chainA' ? this._chainAMainnetOwner : this._chainBMainnetOwner, isSChain);
		} else {
			return new Utils.Contract(key, chainKey === 'chainA' ? this._chainAOwner : this._chainBOwner, isSChain);
		}
	}

	public getSChainName(key: string) {
		return Config.CHAIN_NAMES[key];
	}

	public getContract(key: string, isCalypso: boolean = true) {
		if (isCalypso) {
			switch (key) {
				case 'etherbase':
					return this._etherbaseChainA;
				case 'marionette':
					return this._marionetteChainA;
				case 'configController':
					return this._configControllerChainA;
				case 'messageProxy':
					return this._messageProxyChainA;
			}
		} else {
			switch (key) {
				case 'etherbase':
					return this._etherbaseChainB;
				case 'marionette':
					return this._marionetteChainB;
				case 'configController':
					return this._configControllerChainB;
				case 'messageProxy':
					return this._messageProxyChainB;
			}
		}
	}

	public getSafe(key: string) : string {
		return key === 'chainA' ? this._chainASafe : this._chainBSafe;
	}
}

export default GlobalController;