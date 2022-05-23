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
 * @file deploy_s_fuel_users.js
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

    const [ deployer, ] = await ethers.getSigners();

    /// Contract Deployment Checks
    if (!Config.CONTRACT_MODE || Config.IS_UPGRADEABLE === undefined)  {
        console.error();
        console.error('CONTRACT_MODE is required');
        throw new Error();
    }
    let result = {};
    const dir_length = FS.getDirLength(__dirname, 'contracts');
    let contractAddress;
    let contractInterface;
    let file_name = `V${dir_length}_`;
    /// Deploy Upgradeable Contract
    if (Config.IS_UPGRADEABLE) {
        file_name += 'SFuelUserssUpgradeable.json';
        console.log("Deploying SFuelUsersUpgradeable");
        const factory = await ethers.getContractFactory("SFuelUsersUpgradeable");
        const contract = await upgrades.deployProxy(factory);
        await contract.deployTransaction.wait();
        contractAddress = contract.address;
        console.log("Contract: ", contract.address);
        const currentImplAddress = await upgrades.erc1967.getImplementationAddress(contractAddress);
        console.log("Current Impl Address: ", currentImplAddress);
        contractInterface = contract.interface;
        result.isUpgradeable = true;
        result.currentImplAddress = currentImplAddress;
    }

    /// Deploy Fixed Contract
    if (!Config.IS_UPGRADEABLE) {
        file_name += 'SFuelUsers.json';
        const factory = await ethers.getContractFactory("SFuelUsers");
        const contract = await factory.deploy();
        await contract.deployTransaction.wait();
        address = contract.address;
        contractInterface = contract.interface;
        result.isUpgradeable = false;
    }
    
    

    result.version = dir_length;
    result.address = contractAddress;
    result.abi = getAbi(contractInterface);

    
    const json = JSON.stringify(result);
    
    
    FS.writeFile(__dirname, 'contracts', file_name, json);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    })