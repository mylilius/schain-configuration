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
 * @file network.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

interface INetworkEndpoints {
	rpc: string;
	ws: string;
	fs: string;
}

class Network {
	
	// private name: string;
	// private baseUrl: string;
	// private vId: string;
	private rpc: string;

	constructor(rpc: string) {
		this.rpc = rpc;
	}

	// private _rpcUrl() : string {
	// 	return `${this.baseUrl}/${this.vId}/${this.name}`;
	// }

	// private _wsUrl() : string {
	// 	return ;
	// }

	// private _fsUrl() : string {
	// 	return '';
	// }

	public getEndpoints(): INetworkEndpoints {
		return {
			rpc: this.rpc,
			ws: '',
			fs: ''
		};
	}
}

export {
	Network,
	INetworkEndpoints
}