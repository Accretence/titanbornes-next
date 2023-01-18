import React from 'react'
import Link from 'next/link'

// Components
import Meta from '../components/meta'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import Badged from '../components/Badged'

// Libraries
import { useTheme, Text, Card, Spacer } from '@geist-ui/core'

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
            <Spacer />
            <div className="PageWrapper">
                <div className="PageContent">
                    <Card mb={1} className="WikiContent">
                        <Text h3>What is Titanbornes?</Text>
                        <Text small>
                            Experimental NFT Collection trying to do things a
                            little differently. What if your NFT{' '}
                            <Badged c="EVOVLED" /> in each of your transactions?
                            What if a collection's supply{' '}
                            <Badged c="DECREMENTED" /> after every transaction?
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
                        <Text small>1,000.</Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>What is the minting price?</Text>
                        <Text small>TBA.</Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>How many can I mint?</Text>
                        <Text small>One.</Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>When can I mint?</Text>
                        <Text small>TBA.</Text>
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
                            <Badged c="WHITELISTED" /> members in a 24h window.
                            There is no public mint allocation.
                        </Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>How do I earn a whitelist position?</Text>
                        <Text small>
                            Check-out{' '}
                            <Link href="/whitelist" color>
                                whitelist
                            </Link>{' '}
                            to learn how to become <Badged c="WHITELISTED" />.
                        </Text>
                    </Card>
                    <Card mb={1} className="WikiContent">
                        <Text h3>
                            Will my NFT have the same faction as my Discord
                            role?
                        </Text>
                        <Text small>
                            Yes, but only if you're <Badged c="WHITELISTED" />{' '}
                            and mint in the 24h presale window.
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

export default FAQ
