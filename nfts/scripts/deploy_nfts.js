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

const S_FUEL_CONTRACTS_ADDRESS = "0xCadf6813a2bDaC8e64A53c9d5c4e8dFa7A47cC8C";
const FIXED = Config.CONTRACT_MODE === 'fixed';


async function main() {
    if (!Config.CONTRACT_MODE) {
        throw new Error("Please set contract deployment mode");
    }

    const [ deployer, ] = await ethers.getSigners();

    let result = {};

    const dir_length = FS.getDirLength(__dirname, 'contracts');
    let file_name = `V${dir_length}_`;

    let contractAddress;
    let contractInterface;

    let _type = FIXED ? 'LiliNFT' : 'LiliNFTUpgradeable';

    /// UPGRADEABLE
    if (!FIXED) {
        file_name += 'LiliNFTUpgradeable.json';
        console.log("Deploying LiliNFTUpgradeable");
        const factory = await ethers.getContractFactory("LiliNFTUpgradeable");
        const contract = await upgrades.deployProxy(factory, [deployer.address, S_FUEL_CONTRACTS_ADDRESS]);
        await contract.deployTransaction.wait();
        contractAddress = contract.address;
        const currentImplAddress = await upgrades.erc1967.getImplementationAddress(contractAddress);
        contractInterface = contract.interface;
        result.isUpgradeable = true;
        result.currentImplAddress = currentImplAddress;
    }

    /// FIXED
    if (FIXED) {
        file_name += 'LiliNFT.json';
        const factory = await ethers.getContractFactory("LiliNFT");
        const contract = await factory.deploy(S_FUEL_CONTRACTS_ADDRESS);
        await contract.deployTransaction.wait();
        contractAddress = contract.address;
        contractInterface = contract.interface;
        result.isUpgradeable = false;
    }

    

    // file_name += `${_type}.json`;
    // const factory = await ethers .getContractFactory(_type);
    // const contract = await factory.deploy();
    // await contract.deployTransaction.wait();
    // address = contract.address;
    // contractInterface = contract.interface;
    // result.isUpgradeable = false;
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