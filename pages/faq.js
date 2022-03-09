import React from 'react'
import Link from 'next/link'

// Components
import Meta from '../utils/meta'
import Header from '../components/header/Header'
import Footer from '../components/Footer'

// Additional Libraries
import { useTheme, Text, Badge, Image, Spacer, Card } from '@geist-ui/core'

const FAQ = () => {
    const theme = useTheme()

    return (
        <>
            <Meta title="FAQ" />
            <Header />
            <div className="PageHeader">
                <Text h2>FAQ </Text>
                <Text small>
                    Here you will find our FAQ designed to introduce you to
                    Titanbornes.
                </Text>
            </div>
            <div className="PageWrapper">
                <div className="PageContent">
                    <Card mt={4} mb={1} className="WikiContent">
                        <Text h3>What is Titanbornes?</Text>
                        <Text small>
                            Experimental NFT Collection trying to do things a
                            little differently. What if your NFT{' '}
                            <Badge
                                style={{
                                    backgroundColor: '#ffd400',
                                    color: 'black',
                                }}
                            >
                                <b>EVOLVED</b>
                            </Badge>{' '}
                            in each transaction? What if a collection's supply{' '}
                            <Badge
                                style={{
                                    backgroundColor: '#ffd400',
                                    color: 'black',
                                }}
                            >
                                <b>DECREMENTED</b>
                            </Badge>{' '}
                            after every transaction?
                        </Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>How does this 👆 work?</Text>
                        <Text small>
                            Each single sale in this collection can trigger a
                            FUSION, evolving the buyer's NFT & burning the sold
                            NFT. This decreases the entire supply of the
                            collection and raises the rarity of all NFTs still
                            in circulation. This is deflationary-supply taken to
                            the extreme!
                        </Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>What is the total supply?</Text>
                        <Text small>4,000.</Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>What is the minting price?</Text>
                        <Text small>
                            0.08 ETH. The mint will be FREE for top %10 of{' '}
                            <Badge
                                style={{
                                    backgroundColor: '#ffd400',
                                    color: 'black',
                                }}
                            >
                                <b>Whitelisted</b>
                            </Badge>{' '}
                            players in each faction's leaderboard.
                        </Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>How many can I mint?</Text>
                        <Text small>One.</Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>When can I mint?</Text>
                        <Text small>
                            ~ 48 hours after 4,000 ICHOR points is mined
                            collectively by both{' '}
                            <Badge
                                style={{
                                    backgroundColor: '#ffd400',
                                    color: 'black',
                                }}
                            >
                                Reapers
                            </Badge>{' '}
                            and{' '}
                            <Badge
                                style={{
                                    backgroundColor: '#ffd400',
                                    color: 'black',
                                }}
                            >
                                Tricksters
                            </Badge>{' '}
                            factions in our Discord game.
                        </Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>What blockchain?</Text>
                        <Text small>Ethereum.</Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>
                            What are the whitelist & public sale allocations?
                        </Text>
                        <Text small>
                            All 4,000 tokens will be available to mint by{' '}
                            <Badge
                                style={{
                                    backgroundColor: '#ffd400',
                                    color: 'black',
                                }}
                            >
                                Whitelisted
                            </Badge>{' '}
                            members in a 24h window, after which any unminted
                            supply will be available to mint publicly.
                        </Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>How do I earn a whitelist position?</Text>
                        <Text small>
                            Check-out{' '}
                            <Link href="/whitelist" color>
                                whitelist
                            </Link>{' '}
                            to learn how to become{' '}
                            <Badge
                                style={{
                                    backgroundColor: '#ffd400',
                                    color: 'black',
                                }}
                            >
                                Whitelisted
                            </Badge>
                            .
                        </Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>
                            Will my NFT have the same faction as my Discord
                            role?
                        </Text>
                        <Text small>
                            Yes, but only if you're{' '}
                            <Badge
                                style={{
                                    backgroundColor: '#ffd400',
                                    color: 'black',
                                }}
                            >
                                Whitelisted
                            </Badge>{' '}
                            and mint in the 24h presale window.
                        </Text>
                    </Card>
                    <Card className="WikiContent">
                        <Text h3>
                            Will friends that I invite to Discord server join my
                            faction?
                        </Text>
                        <Text small>Yes.</Text>
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

export default FAQ
