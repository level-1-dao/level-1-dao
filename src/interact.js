// interact.js

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS; 

const learn_2_earn = require('../build/contracts/Learn2Earn.json') 

const alchemyProvider = new ethers.providers.AlchemyProvider(network="rinkeby", API_KEY);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const learn2earnContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer); 

