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

const FAQ = () => {
	const theme = useTheme()

	return (
		<>
			<Meta title="FAQ" />
			<Header />
			<div className="PageHeader">
				<Text h2>FAQ </Text>
				<Text small>
					Here you will find our wiki in Q&A format designed to
					introduce you to Titanbornes.
				</Text>
			</div>
			<div className="PageWrapper">
				<div className="PageContent">
					<Card mt={5} mb={1} className="WikiContent">
						<Text h3>What is Titanbornes?</Text>
						<Text small>
							Titanbornes is a suite of automation tools, information
							metrics, insights and notification systems to give
							you an edge in the market.
						</Text>
					</Card>
					<Card className="WikiContent">
						<Text h3>
							Why do I need a Metamask Wallet to login?
						</Text>
						<Text small>
							All of the assets on our platform are Ethereum NFTs
							( Non-Fungible Tokens ) so in order to interact with
							them you need an Ethereum Blockchain Address.
							Metamask is the most versatile Ethereum Wallet that
							lets DApps ( Decentralized Applications ) like our
							Web Application to securely connect with your
							Ethereum Address without the need to exchange any
							sensitive information.
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
					}`
				}
			</style>
		</>
	)
}

export default FAQ
