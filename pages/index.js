import React from 'react'

// Components
import Meta from '../utils/meta'
import Header from '../components/header/Header.js'
import Footer from '../components/Footer'
import YouTube from '../components/YouTube'

// Libraries
import {
    useTheme,
    Badge,
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
                </div>
            </div>
            <div className="PageWrapper">
                <div className="PageContent">
                    <Grid.Container mb={0} gap={1}>
                        <Grid xs={24} sm={12}>
                            <Card px={0.1} pt={0.1}>
                                <Image
                                    src="https://user-images.githubusercontent.com/45223699/156929802-c6d69687-975e-4e82-b7ba-b716d22126bb.jpg"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                    my={0}
                                    py={0}
                                    draggable={false}
                                />
                                <Text h6 my={0}>
                                    Reapers Titanborne
                                </Text>
                                <Text type="secondary" small>
                                    Fusion Count: 0
                                </Text>
                            </Card>
                        </Grid>
                        <Grid xs={24} sm={12}>
                            <Card px={0.1} pt={0.1}>
                                <Image
                                    src="https://user-images.githubusercontent.com/45223699/156929160-cad93e7c-e31b-44b3-a79e-6d746825add8.jpg"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                    my={0}
                                    py={0}
                                    draggable={false}
                                />
                                <Text h6 my={0}>
                                    Tricksters Titanborne
                                </Text>
                                <Text type="secondary" small>
                                    Fusion Count: 3
                                </Text>
                            </Card>
                        </Grid>
                        <Grid xs={24}>
                            <Card>
                                <Text h3>WHAT'S GOING ON HERE? 👆</Text>
                                <Text small>
                                    Each single sale in this collection can
                                    trigger a <Badge
                                        style={{
                                            backgroundColor: '#ffd400',
                                            color: 'black',
                                        }}
                                    >
                                        <b>FUSION</b>
                                    </Badge>{' '}, evolving the buyer's NFT &
                                    burning the sold NFT. This <Badge
                                        style={{
                                            backgroundColor: '#ffd400',
                                            color: 'black',
                                        }}
                                    >
                                        <b>DECREMENTS</b>
                                    </Badge>{' '} the
                                    entire supply of the collection and raises
                                    the rarity of all NFTs still in circulation.
                                    This is deflationary-supply taken to the
                                    extreme!
                                    <br />
                                    <br />
                                    This 👇 video thoroughly explains the
                                    process.
                                </Text>
                            </Card>
                        </Grid>
                        <Grid xs={24}>
                            <YouTube embedId="HUcJehWbhzc" />
                        </Grid>
                        <Grid xs={24}>
                            <Card>
                                <Text h3>HOW DO I EARN A WHITELIST SPOT?</Text>
                                <Text small>
                                    How do I earn a whitelist position? There
                                    are 4,000 whitelist spots in total
                                    represented by each faction's ICHOR points.{' '}
                                    <Badge
                                        style={{
                                            backgroundColor: '#ffd400',
                                            color: 'black',
                                        }}
                                    >
                                        <b>Reapers</b>
                                    </Badge>{' '}
                                    and{' '}
                                    <Badge
                                        style={{
                                            backgroundColor: '#ffd400',
                                            color: 'black',
                                        }}
                                    >
                                        <b>Tricksters</b>
                                    </Badge>{' '}
                                    factions compete for those whitelist spots.
                                    If 2 factions perform similarly each will
                                    get 2,000 spots but if one outpeforms the
                                    other, it can get much more.
                                    <br />
                                    <br />
                                    This 👇 video thoroughly explains how our whitelisting system works.
                                </Text>
                            </Card>
                        </Grid>
                        <Grid xs={24}>
                            <YouTube embedId="7rQ-SY_ZDFs" />
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
