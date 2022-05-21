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

import { Network, INetworkEndpoints } from './network';

interface INetworks {
	[key: string]: Network
}

class Networks {

	private networks: INetworks = {};

	constructor() {}

	public buildNetwork(rpcUrl: string) {
		const _network = new Network(rpcUrl);
		this._addNetwork('mainnet', _network);
	}

	public buildSkaleNetwork(networkConfig: any) {
		const _rpc: string = `${networkConfig.baseUrl}/${networkConfig.vId}/${networkConfig.name}`;
		const _network = new Network(_rpc);
		this._addNetwork(networkConfig.key, _network);
	}

	private _addNetwork(_key: string, _network: Network) {
		this.networks[_key] = _network;
	}

	public getEndpoints(network: string) : INetworkEndpoints {
		return this.networks[network].getEndpoints();
	}
}

export {
	Networks 
}