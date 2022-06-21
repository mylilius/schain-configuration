const { promises } = require('fs');
const { join } = require('path');
const { expect } = require('chai');
const { ethers, upgrades, Wallet } = require('hardhat');
const dotenv = require('dotenv');
dotenv.config();
const fs = promises;
const { getContractAddress } = require('@ethersproject/address')

describe('SFuel Regsitry Unit Testing', () => {
    let registry, signer, future;
    before(async() => {
        signer = new ethers.Wallet("0000000000000000000000000000000000000000000000000000000008000000");
        signer = signer.connect(ethers.getDefaultProvider())

    })
    describe('Deploy SFuel Registry', () => {
        it('Should Get Future Address', async() => {
            const futureAddress = getContractAddress({
                from: signer.address,
                nonce: 0
            });
            console.log(futureAddress);
            future = futureAddress;
        })
        it('Should Deploy and Have Address', async() => {
            let wallet = new ethers.Wallet.createRandom();
            const factory = await ethers.getContractFactory('SFuelRegistry');
            const contract = await factory.deploy(wallet.address, {
                gasLimit: 5000000
            });
            // const contract  = await upgrades.deployProxy(factory, [wallet.address], {
            //     gasLimit: 50000000
            // });
            // await contract.deployed();
            registry = contract;
            expect(contract.address).to.be.equal(future);
        })
    })
    // describe('Check Default Admin Role', () => {
    //     it('Should have 1 as Default Owner', async() => {
    //         console.log(registry)
    //         let role = await registry.callStatic.DEFAULT_ADMIN_ROLE();
    //         console.log("Address: ", signer.address);
    //         let check = await registry.callStatic.hasRole(role, signer.address);
    //         let check2 = await registry.callStatic.getRoleMemberCount(role);
    //         console.log("2: ", check2);
    //         expect(check).to.be.equal(true);
    //     })
    // })
})