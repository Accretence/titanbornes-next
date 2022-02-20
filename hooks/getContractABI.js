import axios from 'axios'

export async function getContractABI(contractAddress) {
	const etherscanResponse = await axios.get(
		`${process.env.NEXT_PUBLIC_ETHERSCAN_ABI}${contractAddress}&apiKey=${process.env.NEXT_PUBLIC_ETHERSCAN_KEY}`
	)

   return etherscanResponse.data.result
}
