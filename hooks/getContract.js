import { ethers } from 'ethers'
import { getContractABI } from './getContractABI'

const contractABI = require('../data/Titanbornes.json')

export async function getContract(signer, contractAddress) {
	return new ethers.Contract(contractAddress, contractABI, signer)
}
