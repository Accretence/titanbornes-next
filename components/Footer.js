import React from 'react'
import Link from 'next/link'

import {
	Text,
	Badge,
	Grid,
	Link as GeistLink,
	useTheme,
	Spacer,
	Divider,
} from '@geist-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
						<FontAwesomeIcon icon={['fab', 'twitter']} />
					</GeistLink>

					<GeistLink
						href="https://discord.gg/VVBww7qmhR"
						target="_blank"
						rel="noopener"
						mx={0.5}
					>
						<FontAwesomeIcon icon={['fab', 'discord']} />
					</GeistLink>
				</Text>
				<Divider />
				<Spacer />
				<div className="FooterWrapper">
					<Grid.Container gap={0}>
						<Grid className="FooterGrid" xs={8}>
							<ul>
								<li>
									<Link href="/">OpenSea [Coming Soon]</Link>
								</li>
								<li>
									<Link href="/">
										LooksRare [Coming Soon]
									</Link>
								</li>
								<li>
									<Link href="/">Rarible [Coming Soon]</Link>
								</li>
							</ul>
						</Grid>
						<Grid className="FooterGrid" xs={8}>
							<ul>
								<li>
									<Link href="/">
										Etherscan [Coming Soon]
									</Link>
								</li>
								<li>
									<Link href="/">Github [Coming Soon]</Link>
								</li>
							</ul>
						</Grid>
						<Grid className="FooterGrid" xs={8}>
							<ul>
								<li>
									<Link
										target="_blank"
										rel="noopener"
										href="https://www.youtube.com/channel/UChzAwl-JJa2rPXToBaxdkxw"
									>
										YouTube
									</Link>
								</li>
								<li>
									<Link
										target="_blank"
										rel="noopener"
										href="https://instagram.com/titanbornes"
									>
										Instagram
									</Link>
								</li>
								<li>
									<Link
										target="_blank"
										rel="noopener"
										href="https://linkedin.com/company/titanbornes"
									>
										Linkedin
									</Link>
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
					font-size: 0.65rem;
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
