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
 * @file filestorage.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/


import path from 'path';
import fs from 'fs';

class FileStorage {

	static BASE_DIR: string = '../../../../outputs';
	static ROLES: string = '/roles';

	private _buildPath(dir: string, key: string): string {
		switch (key) {
		case 'roles':
			return path.join(dir + FileStorage.BASE_DIR + FileStorage.ROLES); 
		default:
			return '';
		}
	}

	private _buildFullPath(dir: string, key: string, file: string) {
		return this._buildPath(dir, key) + `/${file}`;
	}

	public getDirLength(dir: string, key: string) : number {
		return fs.readdirSync(this._buildPath(dir, key)).length;
	}

	public writeFile(dir: string, key: string, file: string, data: string): void {
		try {
			fs.writeFileSync(this._buildFullPath(dir, key, file), data);
		} catch (err: any) {
			throw Error(err);
		}
	}

}

export {
	FileStorage
}