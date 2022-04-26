import React from 'react'

// Components
import Meta from '../components/meta'
import Header from '../components/header/Header'
import Footer from '../components/Footer'

// Additional Libraries
import {
	useTheme,
	Text,
	Image,
	Spacer,
	Card,
	Description,
} from '@geist-ui/core'

const Gallery = () => {
	const theme = useTheme()

	return (
		<>
			<Meta title="Gallery" />
			<Header />
			<div className="PageHeader">
				<div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
					<Text h2>Gallery </Text>
				</div>
			</div>
			<Spacer />
			<div className="PageWrapper">
				<div className="PageContent">
					<Card className="WikiContent">
						<Text small>
							Your dedicated gallery to view every Titanbornes NFT in circulation. You will also be able to see their journey through their previous fusions.
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

export default Gallery
