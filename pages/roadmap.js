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
	Spacer,
	Card,
	Description,
} from '@geist-ui/react'

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
						and projects we are working on.
					</Text>
				</div>
			</div>
			<Spacer />
			<div className="PageWrapper">
				<div className="PageContent">
					<Card>
						<Description
							title="Step 01"
							content={
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<div>
										[Early Access Release] Single Player
										Mode Free Roam
									</div>
									<div style={{ color: 'skyblue' }}>
										Status: Implemented
									</div>
								</div>
							}
						/>
					</Card>
					<Spacer />
					<Card>
						<Description
							title="Step 02"
							content={
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<div>$ Use part of the profits to ...</div>
									<div style={{ color: 'lightgray' }}>
										Status: Waiting
									</div>
								</div>
							}
						/>
					</Card>
					<Spacer />
					<Card>
						<Description
							title="Step 03"
							content={
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<div>
										Drop 3D Printable Files for Asset Owners
									</div>
									<div style={{ color: 'lightgray' }}>
										Status: Development
									</div>
								</div>
							}
						/>
					</Card>
					<Spacer />
					<Card>
						<Description
							title="Step 04"
							content={
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<div style={{ maxWidth: '70%' }}>
										Web Application Major Update, Implement
										Achievement System, Friend Request and
										other Social Elements
									</div>
									<div style={{ color: 'lightgray' }}>
										Status: Development
									</div>
								</div>
							}
						/>
					</Card>
					<Spacer />
					<Card>
						<Description
							title="Step 05"
							content={
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<div>
										Implement Multiplayer Functionality - 16
										Player Free Roam Parties
									</div>
									<div style={{ color: 'lightgray' }}>
										Status: Development
									</div>
								</div>
							}
						/>
					</Card>
					<Spacer />
					<Card>
						<Description
							title="Step 06"
							content={
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<div>
										Implement Multiplayer 16 Player Race
										Mode
									</div>
									<div style={{ color: 'lightgray' }}>
										Status: Development
									</div>
								</div>
							}
						/>
					</Card>
					<Spacer />
					<Card>
						<Description
							title="Step 07"
							content={
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<div>
										Drop X Held Back Tokens to random
										addresses
									</div>
									<div style={{ color: 'lightgray' }}>
										Status: Coming Soon.
									</div>
								</div>
							}
						/>
					</Card>
					<Spacer />
					<Card>
						<Description
							title="Step 08"
							content={
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<div>
										Titanbornes ICO - Governance Token for
										Future Projects{' '}
									</div>
									<div style={{ color: 'lightgray' }}>
										Status: Development
									</div>
								</div>
							}
						/>
					</Card>
					<Spacer />
					<Card>
						<Description
							title="Step 09"
							content={
								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<div>Release our next Application</div>
									<div style={{ color: 'lightgray' }}>
										Status: Pre-Production
									</div>
								</div>
							}
						/>
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
