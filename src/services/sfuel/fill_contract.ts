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
    let sFuelContract: any = JSON.parse(await fs.readFile(join(__dirname, '../../../outputs', 'contracts', 'V27_SFuelContracts.json'), 'utf-8'));
    
    let sFuelAddress = sFuelContract['address'];
    let abi = sFuelContract['abi'];

    const contract = new ethers.Contract(sFuelAddress, abi, wallet);
    

    let receipt = await contract.fillContract();
    console.log("Tx: ", receipt);

    let balance = await provider.getBalance(sFuelAddress);
    console.log(Number(balance));
    
    console.log("Receipt: ", receipt);
    console.log("--------------EVENTS--------------")
    for (let event of receipt.events) {
        if (event.event != undefined) {
            console.log(`${event.event}(${event.args})`);
        }
    }
    console.log("----------------------------------")
    console.log(`Gas used: ${receipt.gasUsed}`)
    console.log(`Tx hash: ${receipt.transactionHash}`)
}

main()
    .then(() => process.exit(0))
    .catch((err: any) => {
        console.log(err);
    })