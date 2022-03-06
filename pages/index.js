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
                    <Text mb={1} style={{ fontSize: '2rem' }}>
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
                </div>
            </div>
            <div className="PageWrapper">
                <div className="PageContent">
                    <Grid.Container mb={0} gap={1}>
                        <Grid xs={24}>
                            <Card>
                                <Text h3>
                                    What is{' '}
                                    <Text span b>
                                        TITANBORNES!
                                    </Text>{' '}
                                    ?
                                </Text>
                                <Text small>
                                    Experimental NFT Collection trying to do
                                    things a little differently. What if your
                                    NFT{' '}
                                    <Badge
                                        style={{
                                            backgroundColor: '#ffd400',
                                            color: 'black',
                                        }}
                                    >
                                        <b>EVOLVED</b>
                                    </Badge>{' '}
                                    in each transaction? What if a collection's
                                    supply{' '}
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
                        </Grid>
                        <Grid xs={12}>
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
                        <Grid xs={12}>
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
                                <Text h3>
                                    What is{' '}
                                    <Text span b>
                                        TITANBORNES!
                                    </Text>{' '}
                                    ?
                                </Text>
                                <Text small>
                                    Experimental NFT Collection trying to do
                                    things a little differently. What if your
                                    NFT{' '}
                                    <Badge
                                        style={{
                                            backgroundColor: '#ffd400',
                                            color: 'black',
                                        }}
                                    >
                                        <b>EVOLVED</b>
                                    </Badge>{' '}
                                    in each transaction? What if a collection's
                                    supply{' '}
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
