import React from 'react'

// Components
import Meta from '../utils/meta'
import Header from '../components/header/Header.js'
import Footer from '../components/Footer'
import {
	useTheme,
	Grid,
	Card,
	Image,
	Link as GeistLink,
	Text,
	Display,
	Description,
} from '@geist-ui/react'

const Index = () => {
	const theme = useTheme()

	return (
		<>
			<Meta title="Titanbornes" />
			<Header />
			<div className="PageHeader">
				<div style={{ marginTop: '2rem', marginBottom: '4rem' }}>
					<Text mb={1} style={{ fontSize: '2rem' }}>
						Welcome to{' '}
						<span style={{ letterSpacing: '0.2rem' }}>
							TITANBORNES!
						</span>
					</Text>
					<Text type="secondary" small>
						Titanbornes is a DeFi Assistant we all need. Simple as
						that...
					</Text>
				</div>
			</div>
			<div className="PageWrapper">
				<div className="PageContent">
					<Grid.Container mb={0} gap={1}>
						<Grid xs={12}>
							<Card px={0.1} pt={0.1}>
								<Image
									src="https://cdn.dribbble.com/users/1663335/screenshots/14778371/media/823c67670859ed0cbfc420e3f1972c18.jpg?compress=1&resize=800x600&vertical=top"
									style={{
										objectFit: 'cover',
									}}
									my={0}
									py={0}
									draggable={false}
								/>
								<Text h6 my={0}>
									Demon #666
								</Text>
								<Text type="secondary" small>
									Fusion Count: 0
								</Text>
							</Card>
						</Grid>
						
						<Grid xs={12} >
							<Card px={0.1} pt={0.1}>
								<Image
									src="https://cdn.dribbble.com/users/1663335/screenshots/14772147/media/ca4ac668405c702ec65f1ca45583eda1.jpg?compress=1&resize=800x600&vertical=top"
									style={{
										objectFit: 'cover',
									}}
									my={0}
									py={0}
									draggable={false}
								/>
								<Text h6 my={0}>
									Demon Hunter #117
								</Text>
								<Text type="secondary" small>
									Fusion Count: 3
								</Text>
							</Card>
						</Grid>
					</Grid.Container>
				</div>
			</div>
			<Footer />
			<style>
				{`
					a {
						color: ${theme.palette.foreground};
					}
					.collapse {
						border: none!important;
						padding: 0 0!important;
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

export default Index
