const dotenv = require('dotenv');
dotenv.config();

const CHAIN_A_NAME = process.env.CHAIN_A_NAME;
const CHAIN_A_BASE_URL = process.env.CHAIN_A_BASE_URL;

const CHAIN_B_NAME = process.env.CHAIN_B_NAME;
const CHAIN_B_BASE_URL = process.env.CHAIN_B_BASE_URL;

/** Contract Deployment Configuration */
module.exports = {
    CONTRACT_MODE:  process.env.CONTRACT_MODE,
    IS_UPGRADEABLE: process.env.CONTRACT_MODE === 'upgradeable',
    CHAIN_A_RPC_URL: `${CHAIN_A_BASE_URL}/v1/${CHAIN_A_NAME}`,
    CHAIN_B_RPC_URL: `${CHAIN_B_BASE_URL}/v1/${CHAIN_B_NAME}`,
    CHAIN_A_OWNER: process.env.CHAIN_A_ORIGINAL_OWNER_PK ,
    CHAIN_B_OWNER: process.env.CHAIN_B_ORIGINAL_OWNER_PK 
}