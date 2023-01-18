import React from 'react'
import Link from 'next/link'

import {
    Text,
    Grid,
    Link as GeistLink,
    useTheme,
    Spacer,
    Divider,
} from '@geist-ui/core'
import { Twitter } from '@geist-ui/icons'

const config = require('../config.json')

const Footer = () => {
    const theme = useTheme()

    return (
        <>
            <footer>
                <Text>
                    <GeistLink
                        href="https://twitter.com/titanbornes"
                        target="_blank"
                        rel="noopener"
                        mx={0.5}
                    >
                        <Twitter />
                    </GeistLink>
                </Text>
                <Divider />
                <Spacer />
                <div className="FooterWrapper">
                    <Grid.Container gap={0}>
                        <Grid className="FooterGrid" xs={8}>
                            <ul>
                                <li>
                                    <GeistLink
                                        // target="_blank"
                                        // rel="noopener"
                                        href="/"
                                    >
                                        Blur [Soon]
                                    </GeistLink>
                                </li>
                                <li>
                                    <GeistLink
                                        // target="_blank"
                                        // rel="noopener"
                                        href="/"
                                    >
                                        LooksRare [Soon]
                                    </GeistLink>
                                </li>
                                <li>
                                    <GeistLink
                                        // target="_blank"
                                        // rel="noopener"
                                        href="/"
                                    >
                                        X2Y2 [Soon]
                                    </GeistLink>
                                </li>
                                <li>
                                    <GeistLink
                                        // target="_blank"
                                        // rel="noopener"
                                        href="/"
                                    >
                                        Rarible [Soon]
                                    </GeistLink>
                                </li>
                                <li>
                                    <GeistLink
                                        // target="_blank"
                                        // rel="noopener"
                                        href="/"
                                    >
                                        OpenSea [Soon]
                                    </GeistLink>
                                </li>
                            </ul>
                        </Grid>
                        <Grid className="FooterGrid" xs={8}>
                            <ul>
                                <li>
                                    <GeistLink
                                        // target="_blank"
                                        // rel="noopener"
                                        href="/"
                                    >
                                        Contract [Soon]
                                    </GeistLink>
                                </li>
                                <li>
                                    <GeistLink
                                        // target="_blank"
                                        // rel="noopener"
                                        href="/"
                                    >
                                        Contract Audit [Soon]
                                    </GeistLink>
                                </li>
                                <li>
                                    <GeistLink
                                        // target="_blank"
                                        // rel="noopener"
                                        href="/"
                                    >
                                        Subgraph [Soon]
                                    </GeistLink>
                                </li>
                                <li>
                                    <GeistLink
                                        target="_blank"
                                        rel="noopener"
                                        href="https://github.com/titanbornes"
                                    >
                                        Github Organization
                                    </GeistLink>
                                </li>
                            </ul>
                        </Grid>
                        <Grid className="FooterGrid" xs={8}>
                            <ul>
                                {/* <li>
									<GeistLink
										target="_blank"
										rel="noopener"
										href={config.socials.discord}
									>
										Discord
									</GeistLink>
								</li> */}
                                <li>
                                    <GeistLink
                                        target="_blank"
                                        rel="noopener"
                                        href="https://www.twitter.com/titanbornes"
                                    >
                                        Twitter
                                    </GeistLink>
                                </li>
                                <li>
                                    <GeistLink
                                        target="_blank"
                                        rel="noopener"
                                        href="https://www.youtube.com/channel/UChzAwl-JJa2rPXToBaxdkxw"
                                    >
                                        YouTube
                                    </GeistLink>
                                </li>
                                <li>
                                    <GeistLink
                                        target="_blank"
                                        rel="noopener"
                                        href="https://instagram.com/titanbornes"
                                    >
                                        Instagram
                                    </GeistLink>
                                </li>
                            </ul>
                        </Grid>
                    </Grid.Container>
                </div>
                <Spacer />
                <Divider />
                <Text
                    className="FooterSignature"
                    style={{ fontSize: '0.65rem' }}
                >
                    &copy; Titanbornes 2022
                </Text>
            </footer>
            <style>{`
				footer p {
					color: ${theme.palette.accents_6}!important;
				}
				footer a {
					color: ${theme.palette.accents_6}!important;
				}
				a:hover {
					color: ${theme.palette.foreground}!important;
				}
				svg:hover {
					color: ${theme.palette.foreground}!important;
				}
				.FooterSignature {
					margin: 1rem auto;
				}
				.FooterWrapper {
					max-width: ${theme.layout.pageWidthWithMargin};
					margin: 0 auto;
					padding: 0 ${theme.layout.pageMargin};
					justify-content: center;
				}
				.FooterGrid {
					justify-content: center;
					margin: 0 auto;
				}
				.FooterGrid a {
					font-size: 0.7rem!important;
				}
				footer {
					border-top: 1px solid ${theme.palette.border};
					text-align: center;
				}
				footer ul li:before {
					display: none;
				}
				footer li {
					color: ${theme.palette.accents_6}!important;
					margin: 0;
				}
      `}</style>
        </>
    )
}

export default Footer
