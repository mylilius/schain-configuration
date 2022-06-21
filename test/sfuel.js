const { promises } = require('fs');
const { join } = require('path');
const { expect } = require('chai');
const { ethers, Wallet } = require('ethers');
const dotenv = require('dotenv');
dotenv.config();
const fs = promises;

xdescribe('S-Fuel Access Test V1', () => {
    let nft1, nft2, sfuel, provider;
    let account;
    before(async() => {
        nft1 = JSON.parse(await fs.readFile(join(__dirname, '../outputs', 'contracts', 'V32_LiliNFT.json'), 'utf-8'));
        // nft2 = JSON.parse(await fs.readFile(join(__dirname, '../outputs', 'contracts', 'V16_LiliNFT.json'), 'utf-8'));
        sfuel = JSON.parse(await fs.readFile(join(__dirname, '../outputs', 'contracts', 'V27_SFuelContracts.json'), 'utf-8'));
        rpc = process.env.CHAIN_A_BASE_URL + '/' + process.env.CHAIN_A_VERSION + '/' + process.env.CHAIN_A_NAME;
        provider = new ethers.providers.JsonRpcProvider(rpc);
    });

    xdescribe('Check Whitelist', () => {
        it('V15 Should be Whitelisted Contract', async() => {
            console.log("RPC: ", rpc);
            
            let contract = new ethers.Contract(sfuel['address'], sfuel['abi'], provider);
            const IS_WHITELISTED_CONTRACT = await contract.callStatic.IS_WHITELISTED_CONTRACT();
            let isWhitelisted = await contract.callStatic.hasRole(IS_WHITELISTED_CONTRACT, nft1['address']);
            expect(isWhitelisted).to.be.equal(true);
            
        });
        it('V16 Should Not Be Whitelisted Contact', async() => {
            const provider = new ethers.providers.JsonRpcProvider(rpc);
            let contract = new ethers.Contract(sfuel['address'], sfuel['abi'], provider);
            const IS_WHITELISTED_CONTRACT = await contract.callStatic.IS_WHITELISTED_CONTRACT();
            let isWhitelisted = await contract.callStatic.hasRole(IS_WHITELISTED_CONTRACT, nft2['address']);
            expect(isWhitelisted).to.be.equal(false);
        });
    })
    describe('Should Create Account and Send them S-Fuel From Owner [Temp]', async() => {
        it('Should have length of 10', () => {
            let provider = new ethers.providers.JsonRpcProvider(rpc);
            let wallet = new ethers.Wallet.createRandom();
            wallet = wallet.connect(provider);
            // console.log(wallet);
            account = wallet;
            expect(account).to.not.be.equal(undefined);
        });
        it('Should Send S-Fuel', async() => {
            let wallet = new ethers.Wallet(process.env.CHAIN_A_ORIGINAL_OWNER_PK).connect(provider);
            let tx = await wallet.sendTransaction({
                to: account.address,
                gasPrice: await provider.getGasPrice(),
                gasLimit: ethers.utils.hexlify(300000),
                value: ethers.utils.hexlify(50000000000)
            });

        });
    })

    describe('SFuel Checks', () => {
        it('Should have SFUelContract address', async () => {
            let contract = new ethers.Contract(nft1['address'], nft1['abi'], provider);
            expect((await contract.callStatic.sFuel())).to.be.equal("0x43A2d60D3fa3FbEB48C520fAA5eaBAF52Ba6C8DE");
        })
    })
    describe('User User Should Mint an NFT', () => {
        it('Mint NFTs', async() => {
            try {
                let wallet = new ethers.Wallet(process.env.CHAIN_A_ORIGINAL_OWNER_PK).connect(provider);
                // console.log("Account: ", account);
                let contract = new ethers.Contract(nft1['address'], nft1['abi'], account);
                // console.log(account.address);
                // console.log("Contract: ", contract);
                // console.log(parseInt((await contract.estimateGas.mint()), 16));
                // console.log(parseInt((await contract.estimateGas.mint2()), 16));
                // console.log(parseInt((await contract.estimateGas.safeMintWithSFuel(account.address)), 16));
                // let tx = await contract.mint2();
                let receipt = await contract.mint2();
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
                
                let numberOfNFTs = await contract.callStatic.balanceOf(account.address);
                expect(Number(numberOfNFTs)).to.be.equal(1);
            } catch (err) {
                console.log("Error: ", err);
                throw new Error(err);
            }
        })
    });

    // describe('User Should Mint and Top Up on an NFT', async() => {
    //     it('Should Mint NFT', async() => {
    //         try {
    //             let wallet = new ethers.Wallet(process.env.CHAIN_A_ORIGINAL_OWNER_PK).connect(provider);
    //             console.log("Account: ", account);
    //             let contract = new ethers.Contract(nft1['address'], nft1['abi'], account);
    //             console.log(account.address);
    //             console.log("Contract: ", contract);
    //             // console.log(parseInt((await contract.estimateGas.mint()), 16));
    //             let tx = await contract.mint2();
    //             let numberOfNFTs = await contract.callStatic.balanceOf(account.address);
    //             expect(Number(numberOfNFTs)).to.be.equal(2);
    //         } catch (err) {
    //             throw new Error(err);
    //         }            
    //     })
    // });
    xdescribe('Each user from NFT2 Should Not be Topped Up and not be equal to expected value', async() => {

    })

})