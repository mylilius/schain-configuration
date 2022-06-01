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
 * 
 * Credit for the functions that are tagged as such goes to skalenetwork/multisigwallet-cli under the AGPL-3.0 License
 * 
*/


/**
 * @file assign_users_ether_manager_role.ts
 * @copyright TheGreatAxios | Lilius, Inc 2022-Present
 * 
 * Questions regarding the pseudonym of TheGreatAxios can be forwarded to thegreataxios@mylilius.com
**/


import { camelToSnakeCase } from "../utils";
import * as Config from '../config';
import { ethers, Contract } from 'ethers';
import * as path from 'path';
import { promises as fs } from 'fs';

class MultiSigWallet {

    /// Derived from SKALE Network under AGPL-3.0
    private async _getMarionette() : Promise<Contract> {
        const predeployed = await this._getAbi("data/predeployed.json");
        return new ethers.Contract(
            predeployed["marionette_address"],
            predeployed["marionette_abi"]
        );
    }
    /// Derived SKALE Network under AGPL-3.0 with modifications
    private async _getMultiSigWallet() : Promise<Contract> {
        const privateKey = Config.MSG_WALLET_PRIVATE_KEY; // process.env[`PRIVATE_KEY_${globalOptions.account}`];
        const provider = new ethers.providers.JsonRpcProvider(Config.MSG_WALLET_CHAIN_RPC);
        const signer = new ethers.Wallet(privateKey).connect(provider);
        const predeployed = await this._getAbi("data/predeployed.json");
        return new ethers.Contract(
            predeployed["multi_sig_wallet_address"],
            predeployed["multi_sig_wallet_abi"],
            signer
        );
    }
    
    /// Derived SKALE Network under AGPL-3.0
    private async _getAbi(filepath: string) {
        const rootDir = path.resolve("./");
        const abiFileName = path.join(rootDir, filepath);
        const abi = JSON.parse(await fs.readFile(abiFileName, "utf-8"));
        return abi;
    }
    
    /// Derived SKALE Network under AGPL-3.0 with modifications
    private async getDestinationContract(contractName: string): Promise<Contract> {
        let destinationContractAddress: string;
        let destinationContractAbi: any;
    
        const predeployed = await this._getAbi("data/predeployed.json");
        destinationContractAddress = predeployed[`${camelToSnakeCase(contractName)}_address`];
        destinationContractAbi = predeployed[`${camelToSnakeCase(contractName)}_abi`];
    
    
        let destinationContract: Contract;
        try {
            destinationContract = new ethers.Contract(
                destinationContractAddress,
                destinationContractAbi
            );
            return destinationContract;
        } catch (e) {
            console.log(`Contract with name "${contractName}" does not exist`);
            throw new Error('Contract Does Not Exist: ' + contractName);
        }
    }
    
    /// Derived SKALE Network under AGPL-3.0 with modifications
    public async submitViaMarionette(contractName: string, func: string, params: any[]) {
        // console.log("ABC", params);
        const marionette = await this._getMarionette();
        const msgWallet = await this._getMultiSigWallet();
        let receipt;
        const destinationContract = await this.getDestinationContract(contractName);
        console.log("Address: ", destinationContract.address);
        console.log("Function : ", func);
        console.log("Params: ", params);
        try {
            receipt = await (await msgWallet.submitTransaction(
                marionette.address,
                '0',
                marionette.interface.encodeFunctionData(
                    "execute",
                    [
                        destinationContract.address,
                        '0',
                        destinationContract.interface.encodeFunctionData(
                            func,
                            params
                        )
                    ]
                ), { gasLimit: 5000000 }
            )).wait();

            // console.log("Receipt: ", receipt);
            console.log("--------------EVENTS--------------")
            for (let event of receipt.events) {
                if (event.event != undefined) {
                    console.log(`${event.event}(${event.args})`);
                    console.log("Receipt: ", await event.getTransactionReceipt());
                }
            }
            console.log("----------------------------------")
            console.log(`Gas used: ${receipt.gasUsed}`)
            console.log(`Tx hash: ${receipt.transactionHash}`)
        } catch (err: any) {
            console.log(err);
            throw new Error(err);
        }
    }
    
    /// Derived SKALE Network under AGPL-3.0 with modifications
    public async submitViaMultiSig(contractName: string, func: string, params: any[]) {
        const msgWallet: Contract = await this._getMultiSigWallet();
        let receipt;
        const destinationContract = await this.getDestinationContract(contractName);
        // console.log(destinationContract);
        // console.log(msgWallet);
        try {
            receipt = await (await msgWallet.submitTransaction(
                destinationContract.address,
                '0',
                destinationContract.interface.encodeFunctionData(
                    func,
                    params
                ), { gasLimit: 4000000 }
            )).wait();

            console.log("Receipt: ", receipt);
            console.log("--------------EVENTS--------------")
            for (let event of receipt.events) {
                if (event.event != undefined) {
                    console.log(`${event.event}(${event.args})`);
                    console.log("Receipt: ", event.getTransactionReceipt());
                }
            }
            console.log("----------------------------------")
            console.log(`Gas used: ${receipt.gasUsed}`)
            console.log(`Tx hash: ${receipt.transactionHash}`)
        } catch (err: any) {
            throw new Error(err);
        }
    }

    public async getRole(contractName: string, role: string) {
        let contract = await this.getDestinationContract(contractName);
        console.log("Contract: ", contract);
        contract = contract.connect(new ethers.providers.JsonRpcProvider(Config.MSG_WALLET_CHAIN_RPC))
        switch (role) {
            case ('ETHER_MANAGER_ROLE'):
                return await contract.callStatic.ETHER_MANAGER_ROLE();
            case ('ALLOCATOR_ROLE'):
                return await contract.callStatic.ALLOCATOR_ROLE();
            case ('ADMIN_ROLE'):
                return await contract.callStatic.ADMIN_ROLE();
            default:
                return await contract.callStatic.DEFAULT_ADMIN_ROLE();
        }
    }

    public async checkRole(contractName: string, role: string) {
        let contract = await this.getDestinationContract(contractName);
        contract = contract.connect(new ethers.providers.JsonRpcProvider(Config.MSG_WALLET_CHAIN_RPC))
        let roleHash;
        switch (role) {
            case ('ETHER_MANAGER_ROLE'):
                roleHash = await contract.callStatic.ETHER_MANAGER_ROLE();
                break;
            case ('ALLOCATOR_ROLE'):
                roleHash = await contract.callStatic.ALLOCATOR_ROLE();
                break;
            case ('ADMIN_ROLE'):
                roleHash = await contract.callStatic.ADMIN_ROLE();
                break;
            default:
                roleHash = await contract.callStatic.DEFAULT_ADMIN_ROLE();
                break;
        }
        console.log("Members: " + role + " :", await contract.callStatic.getRoleMemberCount(roleHash));
        console.log("Has Role: " + role + " :", await contract.callStatic.hasRole(roleHash, "0xD244519000000000000000000000000000000000"));
        console.log("Has Role: Marionette: ", await contract.callStatic.hasRole(roleHash, Config.ADDRESSES_SCHAIN['marionette']));
    }
}

export default MultiSigWallet;