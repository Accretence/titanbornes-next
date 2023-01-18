import React from 'react'

// Components
import Meta from '../components/meta'
import Header from '../components/header/Header.js'
import Footer from '../components/Footer'
import YouTube from '../components/YouTube'
import Badged from '../components/Badged'

// Libraries
import {
    useTheme,
    Grid,
    Card,
    Image,
    Text,
    Display,
    Description,
} from '@geist-ui/core'

const Index = () => {
    const theme = useTheme()

    return (
        <>
            <Meta title="Titanbornes" />
            <Header />
            <div className="PageHeader">
                <div style={{ marginTop: '2rem', marginBottom: '4rem' }}>
                    <Text h3>
                        Welcome to{' '}
                        <span
                            style={{
                                fontWeight: '600',
                                letterSpacing: '0.2rem',
                            }}
                        >
                            TITANBORNES!
                        </span>
                    </Text>
                    <Text small>
                        Titanbornes is an experimental NFT Collection trying to
                        do things a little differently. What if your NFT{' '}
                        <Badged c="EVOLVED" /> in each of your transactions?
                        What if a collection's supply <Badged c="DECREMENTED" />{' '}
                        after every transaction?
                    </Text>
                </div>
            </div>
            <div className="PageWrapper">
                <div className="PageContent">
                    <Grid.Container mb={0} gap={1}>
                        <Grid xs={24}>
                            <YouTube embedId="HUcJehWbhzc" />
                        </Grid>
                        <Grid xs={24}>
                            <Card>
                                <Text h3>WHAT'S GOING ON HERE? 👆</Text>
                                <Text small>
                                    Each single sale in this collection can
                                    trigger a <Badged c="FUSION" /> , evolving
                                    the buyer's NFT & burning the sold NFT. This{' '}
                                    <Badged c="DECREMENTS" /> the entire supply
                                    of the collection and raises the rarity of
                                    all NFTs still in circulation. This is
                                    deflationary-supply taken to the extreme!
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
