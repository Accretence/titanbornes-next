import React from 'react'

// Components
import Meta from '../utils/meta'
import Header from '../components/header/Header'
import Footer from '../components/Footer'

// Additional Libraries
import {
	useTheme,
	Text,
	Image,
	Link as GeistLink,
	Spacer,
	Card,
} from '@geist-ui/core'

const Fusion = () => {
	const theme = useTheme()

	return (
		<>
			<Meta title="Fusion" />
			<Header />
			<div className="PageHeader">
				<Text h2>FUSION</Text>
				<Text small>
					Here you will find how our fusion works in Q&A format.
				</Text>
			</div>
			<div className="PageWrapper">
				<div className="PageContent">
					<Card mt={4} mb={1} className="WikiContent">
						<Text h3>FUSION?</Text>
						<Text small>
							Fusion ( in NFT terms ) is usually a process of
							merging 2 NFTs belonging to the same collection,
							keeping their best traits in one, generating an
							upgraded artwork for it and finally burning the
							extra NFT.
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>How to trigger a FUSION?</Text>
						<Text small>
							You can trigger a fusion each time you purchase a
							Titanborne NFT from a secondary market while you are
							holding one in your wallet. We have this fusion
							system already implemented in the Smart-Contract
							ready to use as soon as the minting starts.
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>What exactly happens within a FUSION?</Text>
						<Text small>
							<Text span b>1st.</Text> The NFT belonging to the buyer automatically
							upgrades its artwork and increments its FUSION
							COUNT. This process happens automatically without
							the need for you to do any extra transactions or pay
							extra gas fees!
							<br />
							<Text span b>2nd.</Text> The NFT belonging to the seller is burned,
							completely and irretrievably removed from
							circulation.
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>So my NFT gets an upgraded artwork on each FUSION?</Text>
						<Text small>
							Yup. You just need to click on the refresh metadata button on the token's OpenSea page and wait for OpenSea to fetch the new artwork.
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>Do I need to do something extra to make the FUSION work?</Text>
						<Text small>
							No. Fusions happen automatically on basic token transfers ( when you purchase an NFT on OpenSea for example ) without the need for you to do any extra steps or pay fees for an extra transaction.
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>An example with numbers?</Text>
						<Text small>
							You own an NFT with 3 fusions, you buy an NFT with 5 fusions from OpenSea, the NFT with 5 fusions is burned and the token you originally owned EVOLVES 5 times, turning to an NFT with 8 fusions and MASSIVELY upgrades its artwork.
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>So theoretically, the entire supply can drop to single-digits?</Text>
						<Text small>
							Yup, It's sweet right?
						</Text>
					</Card>
					<Card className="WikiContent">
						<Text h3>Is there a caviat to this effortlessness?</Text>
						<Text small>
							Yes. Each Ethereum wallet can hold only one token from this collection at a time.
						</Text>
					</Card>
				</div>
			</div>
			<Footer />
			<style>
				{`
					.card:hover {
							filter: invert(1);
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
					.WikiContent .content {
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

export default Fusion
