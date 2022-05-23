/**
 * @license
 * 
 * Schain Configuration | SFuel Submodule
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
 * @file deploy.js
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/

const { ethers, upgrades, network } = require('hardhat');
const Config = require('../config');
const { FileStorage } = require('../../build/utils/filestorage');
const { getAbi } = require('../../build/utils/abi');
const FS = new FileStorage();

async function main() {

    let result = {};

    const dir_length = FS.getDirLength(__dirname, 'contracts');
    const file_name = `V${dir_length}_`;

    file_name += 'LiliNFTs.json';
    const factory = await ethers.getContractFactory("LiliNFT");
    const contract = await factory.deploy();
    await contract.deployTransaction.wait();
    address = contract.address;
    contractInterface = contract.interface;
    result.isUpgradeable = false;


}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    })