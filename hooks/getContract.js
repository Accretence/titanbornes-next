import { ethers } from 'ethers'

const contractABI = require('../data/Titanbornes.json')

export async function getContract(signer, contractAddress) {
	return new ethers.Contract(contractAddress, contractABI, signer)
}
