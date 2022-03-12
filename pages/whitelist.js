import React from 'react'

// Components
import Meta from '../components/meta'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import Badged from '../components/Badged'

// Additional Libraries
import { useTheme, Text, Code, Image, Spacer, Card } from '@geist-ui/core'

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
				<Spacer/>
            <div className="PageWrapper">
                <div className="PageContent">
                    <Card mb={1} className="WikiContent">
                        <Text h3>How does the whitelisting work?</Text>
                        <Text small>
                            There are a total of 4,000 whitelist spots but they
                            are not divided by 2 for each <Badged c="FACTION" />
                            ! Contributions from faction members decide how many
                            spots each faction will have.
                        </Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>How do I earn a whitelist position?</Text>
                        <Text small>
                            You can become Whitelisted by{' '}
                            <Badged c="CONTRIBUTING" />. <br />
                            <br />• Contribute to the lore. <br />• Share ideas
                            on how our unique <Badged c="FUSION" /> system can
                            be utilized. <br />• Spread the word on social
                            media. <br />• Share your art that shows how our{' '}
                            <Badged c="FUSION" /> system will look like. <br />•
                            Invite friends to join your faction. <br />• Guide
                            NFT beginners in the server.
                        </Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>
                            My faction has X whitelist spots, how do I make sure
                            I have one of those spots?
                        </Text>
                        <Text small>
                            You can check your ranking with the{' '}
                            <Code>/leaderboard</Code>
                            command. If your faction has X whitelist spots, your rank needs to be at least X for you to be eligible.
                        </Text>
                    </Card>
                    
                    <Card className="WikiContent">
                        <Text h3>Can I choose my faction?</Text>
                        <Text small>
                            No. Faction roles are assigned randomly by{' '}
                            <Badged c="Titanbornes-Reception-Bot" /> in our
                            Discord server and cannot be changed.
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
