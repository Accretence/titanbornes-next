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
	Code,
	Image,
	Spacer,
	Card,
} from '@geist-ui/core'

const Whitelist = () => {
	const theme = useTheme()

	return (
		<>
			<Meta title="Whitelist" />
			<Header />
			<div className="PageHeader">
				<Text h2>Whitelist</Text>
				<Text small>
					Here you will find how our whitelist works in Q&A format.
				</Text>
			</div>
			<div className="PageWrapper">
				<div className="PageContent">
					<Card mt={4} mb={1} className="WikiContent">
						<Text h3>How do I earn a whitelist position?</Text>
						<Text small>
							By playing our original Discord game and inviting
							members to join this server.
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>How EXACTLY does it work?</Text>
						<Text small>
							There are 4,000 whitelist spots in total represented
							by each faction's ICHOR points. <Badge
								style={{
									backgroundColor: 'orangered',
									color: 'white',
								}}
							>
								Reapers
							</Badge> and
							{' '}<Badge
								style={{
									backgroundColor: 'purple',
									color: 'white',
								}}
							>
								Tricksters
							</Badge> factions compete for those whitelist
							spots. If 2 factions perform similarly each will get
							2,000 spots but if one outpeforms the other, it can
							get much more.
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>
							My faction has 3,000 whitelist spots, how do I make
							sure I have one of those spots?
						</Text>
						<Text small>
							Each successful command helps the faction gather
							resources but gives the player XP as well. These XPs
							determine your ranking in your faction. So if your
							faction has 3,000 spots, you have to be among the
							top 3,000 players in your faction's leaderboard to
							become{' '}
							<Badge
								style={{
									backgroundColor: 'yellowgreen',
									color: 'white',
								}}
							>
								Whitelisted
							</Badge>
							. You can check your ranking with the /leaderboard
							command.
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>What is the objective of the game?</Text>
						<Text small>
							To mine ICHOR as fast possible. There are 4,000
							ICHOR in total available to mine and both factions
							started with 0.
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>What is ICHOR?</Text>
						<Text small>
							Each ICHOR represents 1 whitelist spot for that
							faction.
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>How does the game end?</Text>
						<Text small>
							When all 4,000 ICHOR points are mined.
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>Can I choose my faction?</Text>
						<Text small>
							No. Faction roles are assigned randomly by this bot
							and cannot be changed.
						</Text>
					</Card>
					<Card mb={1} className="WikiContent">
						<Text h3>What are the commands?</Text>
						<Text small>
							They are all listed in commands channel in our
							Discord sever.
						</Text>
					</Card>
					<Card className="WikiContent">
						<Text h3>Do I have to remember all commands?</Text>
						<Text small>
							No, you can just type <Code>/</Code> and Discord shows you all
							commands available in this server.
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

export default Whitelist
