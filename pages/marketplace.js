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

const Marketplace = () => {
	const theme = useTheme()

	return (
		<>
			<Meta title="Marketplace" />
			<Header />
			<div className="PageHeader">
				<div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
					<Text h2>Marketplace </Text>
				</div>
			</div>
			<Spacer />
			<div className="PageWrapper">
				<div className="PageContent">
					<Card className="WikiContent">
						<Text small>
							This marketplace will act as an independent supplement to other available options so you'll have all possible tools at your disposal. In later chapters, we'll have utilities only possible to implement using our own marketplace to take advantage of our custom-built smart contracts and native token.
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

export default Marketplace
