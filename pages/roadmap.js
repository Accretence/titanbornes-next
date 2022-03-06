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

const Roadmap = () => {
	const theme = useTheme()

	return (
		<>
			<Meta title="Roadmap" />
			<Header />
			<div className="PageHeader">
				<div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
					<Text h2>Roadmap </Text>

					<Text small>
						Here you will find an itemized list of upcoming features
						we are working on.
					</Text>
				</div>
			</div>
			<Spacer />
			<div className="PageWrapper">
				<div className="PageContent">
					<Card mb={1} className="WikiContent">
						<Text h3>Chapter 00: Prologue</Text>
						<Text small>
							Original Discord game built from scratch to
							gradually introduce you to Titanbornes' lore and
							fairly distribute whitelist spots. Only those who
							are genuinely interested will earn their spot in
							this community.
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>Chapter 01: Genesis</Text>
						<Text small>
							• Fair-launch of Titanborne NFTs, top players in our
							Discord game mint our NFTs for{' '}
							<Text span b>
								FREE
							</Text>
							, no forcing members to spam and have disingenuous
							conversations, no hunting for invite links , and no
							private or reserved mints. A TRUE COMMUNITY will
							shape itself around a tangibly refreshing idea that
							fairly distributes value to those who genuinely want
							to be a part of it.
						</Text>
						<br />
						<Text small>
							• Our 1st. experiment begins. How many{' '}
							<Badge
								style={{
									backgroundColor: '#ffd400',
									color: 'black',
								}}
							>
								Titanbornes
							</Badge> 
							{' '} will survive? What will the highest fusion count be?
							What can we possibly have in mind for your NFT's
							fusion count in the next chapters?
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>Chapter 02: Ascension</Text>
						<Text small>
							Time for the 2nd. experiment. How about we escalate
							everything and hand you the Helm? We'll gradually
							give more details on this after we execute on our
							original promises.
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>Chapter 03: Prophecy</Text>
						<Text small i>
							The Grand Finale...
						</Text>
					</Card>
					<Card className="WikiContent">
						<Text h3>Chapter 04: Epilogue</Text>
						<Text small>
							Final Experiment over. It's time to craft a
							well-oiled machine to continuously incubate those
							who deserve to experiment to find new utilities in
							NFTs and attract lasting community members who know
							where true value in NFTs will exist.
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

export default Roadmap
