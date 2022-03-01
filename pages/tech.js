import React from 'react'

// Components
import Meta from '../utils/meta'
import Header from '../components/header/Header'
import Footer from '../components/Footer'

// Additional Libraries
import {
	useTheme,
	Text,
	Badge,
	Image,
	Spacer,
	Card,
	Description,
} from '@geist-ui/core'

const Tech = () => {
	const theme = useTheme()

	return (
		<>
			<Meta title="Tech" />
			<Header />
			<div className="PageHeader">
				<div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
					<Text h2>Tech </Text>

					<Text small>
						Interesting things we are doing on the technology side.
						We'll gradually give more details after we publish our
						Smart Contract and announce upcoming features.
					</Text>
				</div>
			</div>
			<Spacer />
			<div className="PageWrapper">
				<div className="PageContent">
					<Card mb={1} className="WikiContent">
						<Text h3>ON-CHAIN ATTRIBUTES</Text>
						<Text small>
							Your NFT's FUSION COUNT and FACTION traits are
							stored and modified completely ON-CHAIN. These are
							the only 2 traits required to generatively assemble
							other traits and the artwork of NFTs by our own
							backend or any other derivative project.
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>SEPARATE WHITELISTS FOR FACTIONS</Text>
						<Text small>
							If you're <Badge
								style={{
									backgroundColor: 'yellowgreen',
									color: 'white',
								}}
							>
								Whitelisted
							</Badge> and mint in the 24h presale
							window, your NFT will have the same faction as your
							Discord role!
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>FUSION</Text>
						<Text small>
							Executing fusions in normal transactions is achieved
							by HEAVILY modifying how the standard Open-Zeppelin
							ERC721 contract behaves in normal transfer calls.
						</Text>
					</Card>
					<Card className="WikiContent">
						<Text h3>DYNAMIC RENDERING</Text>
						<Text small>
							We have to generate a new artwork for your NFT each
							time you trigger a FUSION. In order to generate your
							new artwork:
							<br/>
							<br/>
							<Text span b>1st.</Text> We are running a subgraph to fetch
							and index on-chain transactions. Each time a FUSION
							happens our smart-contract broadcasts it as an event
							for our subgraph to fetch. All of this happens so
							that we can always query the latest version of your
							NFT's ON-CHAIN attributes.
							<br/>
							<Text span b>2nd.</Text> We have built an API
							from scratch to assemble and bake your NFT's
							upgraded traits and artwork completely on-the-fly
							based on your NFT's ON-CHAIN attributes provided by
							our subgraph.
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
						margin: 0 auto;
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
				`}
			</style>
		</>
	)
}

export default Tech
