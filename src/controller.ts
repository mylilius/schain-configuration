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
	private _web3Calypso: Utils.Web3;
	private _web3MyLilius: Utils.Web3;
	private _web3Mainnet: Utils.Web3;
	private _calypsoOwner: Utils.Signer;
	private _myLiliusOwner: Utils.Signer;
	private _calypsoMainnetOwner: Utils.Signer;
	private _myliliusMainnetOwner: Utils.Signer;
	private _etherbaseCalypso: Utils.Contract;
	private _marionetteCalypso: Utils.Contract;
	private _configControllerCalypso: Utils.Contract;
	private _etherbaseMyLilius: Utils.Contract;
	private _marionetteMyLilius: Utils.Contract;
	private _configControllerMyLilius: Utils.Contract;
	private _messageProxyCalypso: Utils.Contract;
	private _messageProxyMyLilius: Utils.Contract;

	constructor() {
		this._initNetworks();
		this._web3Calypso = this._initWeb3('calypso');
		this._web3Mainnet = this._initWeb3('mainnet');
		this._web3MyLilius = this._initWeb3('mylilius');
		this._calypsoOwner = this._createOwner('calypso', true, false);
		this._myLiliusOwner = this._createOwner('mylilius', false, false);
		this._calypsoMainnetOwner = this._createOwner('calypso', false, true);
		this._myliliusMainnetOwner = this._createOwner('mylilius', false, true);
		this._etherbaseCalypso = this._buildContract('etherbase', true, 'calypso');
		this._marionetteCalypso = this._buildContract('marionette', true, 'calypso');
		this._configControllerCalypso = this._buildContract('configController', true, 'calypso');
		this._etherbaseMyLilius = this._buildContract('etherbase', true, 'mylilius');
		this._marionetteMyLilius = this._buildContract('marionette', true, 'mylilius');
		this._configControllerMyLilius = this._buildContract('configController', true, 'mylilius');
		this._messageProxyCalypso = this._buildContract('messageProxy', false, 'calypso');
		this._messageProxyMyLilius = this._buildContract('messageProxy', false, 'mylilius');
	}

	private _initNetworks() {
		let calypso: any = Config.CALYPSO;
		let mainnet: any = Config.MAINNET;
		let mylilius: any = Config.MYLILIUS;
		this._networks.buildSkaleNetwork(calypso);
		this._networks.buildSkaleNetwork(mylilius);
		this._networks.buildNetwork(mainnet);
	}

	private _initWeb3(key: string) {
		const _rpcUrl: string = this._networks.getEndpoints(key)['rpc'];
		return new Utils.Web3(_rpcUrl);
	}

	private _createOwner(key: string, isCalypso: boolean, isMainnet: boolean) {
		const _privateKey: string = Config.ACCOUNTS[key];
		let _client;
		if (isMainnet) {
			_client = this._web3Mainnet.client;
		} else if (isCalypso) {
			_client = this._web3Calypso.client;
		} else {
			_client = this._web3MyLilius.client;
		}

		return new Utils.Signer(_privateKey, _client);
	}

	public get signer() {
		return this._calypsoOwner.wallet;
	}

	private _buildContract(key: string, isSChain: boolean = true, chainKey: string) {
		if (!isSChain) {
			return new Utils.Contract(key, chainKey === 'calypso' ? this._calypsoMainnetOwner : this._myliliusMainnetOwner, isSChain);
		} else {
			return new Utils.Contract(key, chainKey === 'calypso' ? this._calypsoOwner : this._myLiliusOwner, isSChain);
		}
		
	}

	public getContract(key: string, isCalypso: boolean = true) {
		if (isCalypso) {
			switch (key) {
				case 'etherbase':
					return this._etherbaseCalypso;
				case 'marionette':
					return this._marionetteCalypso;
				case 'config':
					return this._configControllerCalypso;
				case 'messageProxy':
					return this._messageProxyCalypso;
			}
		} else {
			switch (key) {
				case 'etherbase':
					return this._etherbaseMyLilius;
				case 'marionette':
					return this._marionetteMyLilius;
				case 'config':
					return this._configControllerMyLilius;
				case 'messageProxy':
					return this._messageProxyMyLilius;
			}
		}
	}
}

export default GlobalController;