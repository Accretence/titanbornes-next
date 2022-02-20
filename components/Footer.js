import React from 'react'
import Link from 'next/link'

import {
	Text,
	Grid,
	Link as GeistLink,
	useTheme,
	Spacer,
	Divider,
} from '@geist-ui/react'
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
						<Grid className="FooterGrid" xs={12} sm={6}>
							<ul>
								<li>
									<Link href="/">All NFTs</Link>
								</li>
								<li>
									<Link href="/">Skateboarding Game</Link>
								</li>
								<li>
									<Link href="/">Point Cloud Game</Link>
								</li>
								<li>
									<Link href="/">Flying Game</Link>
								</li>
							</ul>
						</Grid>
						<Grid className="FooterGrid" xs={12} sm={6}>
							<ul>
								<li>
									<Link href="/">My Profile</Link>
								</li>
								<li>
									<Link href="/">My Applications</Link>
								</li>
								<li>
									<Link href="/">My Collection</Link>
								</li>
								<li>
									<Link href="/">My Account Settings</Link>
								</li>
							</ul>
						</Grid>
						<Grid className="FooterGrid" xs={12} sm={6}>
							<ul>
								<li>
									<Link href="/">Help Center</Link>{' '}
								</li>

								<li>
									<Link href="/">Suggestions</Link>{' '}
								</li>

								<li>
									<Link href="/">Blog</Link>{' '}
								</li>

								<li>
									<Link href="/">Docs</Link>{' '}
								</li>
							</ul>
						</Grid>
						<Grid className="FooterGrid" xs={12} sm={6}>
							<ul>
								<li>
									<Link href="/">About</Link>
								</li>
								<li>
									<Link href="/">Careers</Link>
								</li>
								<li>
									<Link href="/">Privacy Policy</Link>
								</li>
								<li>
									<Link href="/">Terms of Service</Link>
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
