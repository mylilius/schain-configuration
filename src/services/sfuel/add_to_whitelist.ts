import { promises as fs } from 'fs';
import { join } from 'path';
import { ContractInterface, ethers } from 'ethers';
import { Contract } from '../../utils';
import * as Config from '../../config';

const WALLET_RPC: string = Config.MSG_WALLET_CHAIN_RPC;
const WALLET_KEY: string = Config.MSG_WALLET_PRIVATE_KEY;

async function main() {
    const provider = new ethers.providers.JsonRpcProvider(WALLET_RPC);
    const wallet = new ethers.Wallet(WALLET_KEY).connect(provider);
    let nftContract: any = JSON.parse(await fs.readFile(join(__dirname, '../../../outputs', 'contracts', 'V29_LiliNFT.json'), 'utf-8'));
    let sFuelContract: any = JSON.parse(await fs.readFile(join(__dirname, '../../../outputs', 'contracts', 'V27_SFuelContracts.json'), 'utf-8'));
    
    let addressToWhitelist = nftContract['address'];
    let sFuelAddress = sFuelContract['address'];
    let abi = sFuelContract['abi'];
    
    // let ABI = contractInformation['abi'];
    // let ADDRESS = contractInformation['address'];

    const contract = new ethers.Contract(sFuelAddress, abi, wallet);
    
    const IS_WHITELISTED_CONTRACT = await contract.callStatic.IS_WHITELISTED_CONTRACT();
    const DEFAULT_ADMIN_ROLE = await contract.callStatic.DEFAULT_ADMIN_ROLE();

    let hasWhitelistRole = await contract.hasRole(DEFAULT_ADMIN_ROLE, wallet.address);
    console.log("IS ADMIN: ", hasWhitelistRole);

    let receipt = await contract.grantRole(IS_WHITELISTED_CONTRACT, addressToWhitelist);
    console.log("Receipt: ", receipt);

    console.log("Has Role Check");
    let hasRole = await contract.hasRole(IS_WHITELISTED_CONTRACT, addressToWhitelist);
    console.log("Has Role: ", hasRole);
}

main()
    .then(() => process.exit(0))
    .catch((err: any) => {
        console.log(err);
    })