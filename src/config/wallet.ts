import dotenv from 'dotenv';

dotenv.config();

export const MSG_WALLET_PRIVATE_KEY: string = process.env.MSG_WALLET_PRIVATE_KEY as string;
const isChainA: boolean = process.env.MSG_WALLET_CHAIN === 'chainA';

const NAME: string = (isChainA ? process.env.CHAIN_A_NAME : process.env.CHAIN_B_NAME) as string;
const BASE_URL: string = "https://staging-v2.skalenodes.com";
const VERSION: string = (isChainA ? process.env.CHAIN_A_VERSION : process.env.CHAIN_B_VERSION) as string;

export const MSG_WALLET_CHAIN_RPC: string = `${BASE_URL}/${VERSION}/${NAME}`;