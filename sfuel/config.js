const dotenv = require('dotenv');
dotenv.config();

const CHAIN_A_NAME = process.env.CHAIN_A_NAME;
const CHAIN_A_BASE_URL = process.env.CHAIN_A_BASE_URL;

const CHAIN_B_NAME = process.env.CHAIN_B_NAME;
const CHAIN_B_BASE_URL = process.env.CHAIN_B_BASE_URL;


module.exports = {
	CHAIN_A_RPC_URL: `${CHAIN_A_BASE_URL}/v1/${CHAIN_A_NAME}`,
	CHAIN_B_RPC_URL: `${CHAIN_B_BASE_URL}/v1/${CHAIN_B_NAME}`,
}