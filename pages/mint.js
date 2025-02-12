import React, { useEffect, useContext } from 'react'
import useState from 'react-usestateref'

// Components
import Meta from '../components/meta'
import Header from '../components/header/Header'
import Footer from '../components/Footer'

// Additional Libraries
import { MerkleTree } from 'merkletreejs'
import keccak256 from 'keccak256'
import { ethers } from 'ethers'
import {
    useTheme,
    useToasts,
    Button,
    Grid,
    Text,
    Image,
    Spacer,
    Card,
} from '@geist-ui/core'

// Context
import { ProviderContext } from '../state/context/providerContext'

// Hooks
import { getContract } from '../hooks/getContract'

const config = require('../config.json')

const Mint = () => {
    let contract
    const theme = useTheme()
    const {
        toasts,
        setToast,
        removeAll,
        findToastOneByID,
        removeToastOneByID,
    } = useToasts()

    const [metamaskAvailable, setMetamaskAvailable] = useState(false)
    const [whitelistChecked, setWhitelistChecked, whitelistCheckedRef] =
        useState(false)
    const [whitelistedFaction, setWhitelistedFaction, whitelistedFactionRef] =
        useState(null)

    // Global Context
    const { provider, setProvider } = useContext(ProviderContext)

    async function presaleMint(faction) {
        try {
            const factionWallets = require(`../data/${faction.current}Wallets.json`)

            const factionLeafNodes = factionWallets.map((wallet) =>
                keccak256(wallet)
            )

            const factionMerkleTree = new MerkleTree(
                factionLeafNodes,
                keccak256,
                {
                    sortPairs: true,
                }
            )

            const factionRootHash = factionMerkleTree.getHexRoot()

            const topWallets = require(`../data/topWallets.json`)

            const topLeafNodes = topWallets.map((wallet) => keccak256(wallet))

            const topMerkleTree = new MerkleTree(topLeafNodes, keccak256, {
                sortPairs: true,
            })

            const topRootHash = topMerkleTree.getHexRoot()

            contract = await getContract(
                provider.provider.getSigner(),
                config.contract.address
            )

            const response = await contract.presaleMint(
                factionMerkleTree.getHexProof(keccak256(provider.address)),
                topMerkleTree.getHexProof(keccak256(provider.address))
            )

            if (response.hash) {
                setToast({
                    text: 'Congrats! 🎉 You successfully submitted your transaction to mint your Titanborne NFT!',
                    type: 'warning',
                    delay: 5000,
                })
            } else {
                setToast({
                    text: response.message,
                    type: 'warning',
                    delay: 5000,
                })
            }
        } catch (error) {
            setToast({
                text: error.message,
                type: 'warning',
                delay: 5000,
            })
        }
    }

    async function publicMint() {
        try {
            contract = await getContract(
                provider.provider.getSigner(),
                config.contract.address
            )

            const response = await contract.publicMint()

            if (response.hash) {
                setToast({
                    text: 'Congrats! 🎉 You successfully submitted your transaction to mint your Titanborne NFT!',
                    type: 'warning',
                    delay: 5000,
                })
            } else {
                setToast({
                    text: response.message,
                    type: 'warning',
                    delay: 5000,
                })
            }
        } catch (error) {
            setToast({
                text: error.message,
                type: 'error',
                delay: 5000,
            })
        }
    }

    async function verifyMerkle(faction) {
        try {
            const wallets = require(`../data/${faction}Wallets.json`)

            const leafNodes = wallets.map((wallet) => keccak256(wallet))

            const merkleTree = new MerkleTree(leafNodes, keccak256, {
                sortPairs: true,
            })

            const rootHash = merkleTree.getHexRoot()

            contract = await getContract(
                provider.provider.getSigner(),
                config.contract.address
            )

            const response = await contract.verifyMerkle(
                merkleTree.getHexProof(keccak256(provider.address)),
                rootHash,
                provider.address
            )

            if (response) {
                setWhitelistedFaction(faction)
                setWhitelistChecked(true)
                setToast({
                    text: 'Congrats! 🎉 You are whitelisted to take part in our presale.',
                    type: 'warning',
                    delay: 5000,
                })
            } else {
                setToast({
                    text: 'Sorry! 😔💔 You are not whitelisted to take part in our presale.',
                    type: 'warning',
                    delay: 5000,
                })
            }
        } catch (error) {
            setToast({
                text: error.message,
                type: 'error',
                delay: 5000,
            })
        }
    }

    async function fetchContract() {
        contract = await getContract(
            provider.provider.getSigner(),
            '0xB000Bd17c2dFEf99D2F8FAD76d27575233f987F5'
        )
    }

    useEffect(() => {
        if (window && window.ethereum) {
            setMetamaskAvailable(true)
        }
    }, [])

    useEffect(() => {
        if (provider && provider.correctChain) {
            fetchContract()
        }
    }, [provider])

    return (
        <>
            <Meta title="Mint" />
            <Header />
            <div className="PageHeader">
                <div style={{ marginTop: '2rem', marginBottom: '4rem' }}>
                    <Text h2>Mint </Text>
                    <Text small>Here you are able to mint our NFTs.</Text>
                </div>
            </div>
            <div className="PageWrapper">
                <div className="PageContent">
                    {metamaskAvailable ? (
                        <Grid.Container height="100%" mb={0} gap={1}>
                            <Grid xs={24} sm={12}>
                                <Grid.Container gap={1}>
                                    <Grid xs={24}>
                                        <Image
                                            src="https://user-images.githubusercontent.com/45223699/156929802-c6d69687-975e-4e82-b7ba-b716d22126bb.jpg"
                                            height="100%"
                                            width="100%"
                                            style={{
                                                objectFit: 'cover',
                                            }}
                                            my={0}
                                            py={0}
                                            draggable={false}
                                        />
                                    </Grid>
                                    <Grid xs={24}>
                                        <Card px={0.1} pt={0.1} width="100%">
                                            <Text h6 my={0}>
                                                Tricksters Titanborne
                                            </Text>
                                            <Text type="secondary" small>
                                                Fusion Count: 4
                                            </Text>
                                        </Card>
                                    </Grid>
                                </Grid.Container>
                            </Grid>
                            <Grid xs={24} sm={12}>
                                <Grid.Container gap={1}>
                                    <Grid xs={24}>
                                        <Image
                                            src="https://user-images.githubusercontent.com/45223699/156929160-cad93e7c-e31b-44b3-a79e-6d746825add8.jpg"
                                            height="100%"
                                            width="100%"
                                            style={{
                                                objectFit: 'cover',
                                            }}
                                            my={0}
                                            py={0}
                                            draggable={false}
                                        />
                                    </Grid>
                                    <Grid xs={24}>
                                        <Card px={0.1} pt={0.1} width="100%">
                                            <Text h6 my={0}>
                                                Reapers Titanborne
                                            </Text>
                                            <Text type="secondary" small>
                                                Fusion Count: 2
                                            </Text>
                                        </Card>
                                    </Grid>
                                </Grid.Container>
                            </Grid>
                            <Grid xs={24}>
                                {config.contract.mintState == 'WAITING' ? (
                                    <Card>Minting is disabled.</Card>
                                ) : config.contract.mintState == 'PRESALE' ? (
                                    <Grid.Container mb={0} gap={1}>
                                        {whitelistCheckedRef &&
                                        whitelistedFaction ? (
                                            <>
                                                <Grid xs={24}>
                                                    <Card>
                                                        <Text h6 my={0}>
                                                            Whitelist
                                                            Eligibility
                                                        </Text>
                                                        <Text
                                                            type="secondary"
                                                            small
                                                        >
                                                            If you were able to
                                                            submit your Ethereum
                                                            wallet in our
                                                            Discord server, you
                                                            should be able to
                                                            verify your
                                                            eligibility using
                                                            one of the buttons
                                                            below. Otherwise you
                                                            can wait for our
                                                            public sale. ( if
                                                            there are any
                                                            unminted supply left
                                                            from our presale )
                                                        </Text>
                                                    </Card>
                                                </Grid>
                                                <Grid xs={24}>
                                                    <Button
                                                        onClick={() => {
                                                            presaleMint(
                                                                whitelistedFactionRef
                                                            )
                                                        }}
                                                        width="100%"
                                                        className="Accent"
                                                        type="secondary"
                                                    >
                                                        Presale Mint
                                                    </Button>
                                                </Grid>
                                            </>
                                        ) : (
                                            <>
                                                <Grid xs={24}>
                                                    <Card>
                                                        <Text h3>
                                                            Whitelist
                                                            Eligibility
                                                        </Text>
                                                        <Text
                                                            type="secondary"
                                                            small
                                                        >
                                                            If you were able to
                                                            submit your Ethereum
                                                            wallet in our
                                                            Discord server, you
                                                            should be able to
                                                            verify your
                                                            eligibility using
                                                            one of the buttons
                                                            below. Otherwise you
                                                            can wait for our
                                                            public sale. ( if
                                                            there are any
                                                            unminted supply left
                                                            from our presale )
                                                        </Text>
                                                    </Card>
                                                </Grid>
                                                {provider ? (
                                                    <>
                                                        <Grid xs={24} sm={12}>
                                                            <Button
                                                                onClick={() => {
                                                                    verifyMerkle(
                                                                        'reapers'
                                                                    )
                                                                }}
                                                                className="Accent"
                                                                width="100%"
                                                                type="secondary"
                                                            >
                                                                Reapers
                                                            </Button>
                                                        </Grid>
                                                        <Grid xs={24} sm={12}>
                                                            <Button
                                                                onClick={() => {
                                                                    verifyMerkle(
                                                                        'tricksters'
                                                                    )
                                                                }}
                                                                className="Accent"
                                                                width="100%"
                                                                type="secondary"
                                                            >
                                                                Tricksters
                                                            </Button>
                                                        </Grid>
                                                    </>
                                                ) : (
                                                    <Grid xs={24}>
                                                        <Button
                                                            width="100%"
                                                            type="secondary"
                                                            disabled={true}
                                                        >
                                                            You need to login
                                                            with Metamask to
                                                            access mint
                                                            functionality
                                                        </Button>
                                                    </Grid>
                                                )}
                                            </>
                                        )}
                                    </Grid.Container>
                                ) : (
                                    <Grid.Container>
                                        <Grid xs={24}>
                                            <Button
                                                onClick={() => {
                                                    publicMint()
                                                }}
                                                width="100%"
                                                className="Accent"
                                                type="secondary"
                                            >
                                                Public Mint
                                            </Button>
                                        </Grid>
                                    </Grid.Container>
                                )}
                            </Grid>
                        </Grid.Container>
                    ) : (
                        <Card mb={0} className="Justify">
                            <Text small>
                                You need to have Metamask installed in your
                                browser to access this page.
                            </Text>
                        </Card>
                    )}
                </div>
            </div>
            <Footer />
            <style>
                {`
					 .Accent {
						 background-color: #ffd400!important;
						 border: none!important;
						 color: black!important;
					 }
					.PageHeader {
						width: ${theme.layout.pageWidthWithMargin};
						max-width: 100%;
						margin: 2rem auto;
						padding: 0 ${theme.layout.pageMargin};
						box-sizing: border-box;
					}
					.PageWrapper {
						background-color: ${theme.palette.accents_1};
					}
					.PageContent {
						width: ${theme.layout.pageWidthWithMargin};
						max-width: 100%;
						margin: 0 auto;
						padding: 0 ${theme.layout.pageMargin};
						transform: translateY(-35px);
						box-sizing: border-box;
					}
					.Justify .content {
						text-align: justify;
					}
					.content small {
						color: ${theme.palette.accents_6}!important;
					}
					#WikiHeader li::marker {
						color: skyblue!important;
						font-size: 0.8rem!important;
					}`}
            </style>
        </>
    )
}

export default Mint
