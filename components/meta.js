import React from 'react'
import Head from 'next/head'

const Meta = ({ title, url, description, keywords, image }) => {
	return (
		<Head>
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="og:type" content="application" />
			<meta name="og:locale" content="en_US" />
			<meta name="twitter:site" content="@Titanbornes" />
			<meta name="twitter:creator" content="@Titanbornes" />
			<link rel="canonical" href="https://titanbornes.com/" />
			<meta name="theme-color" content="#000000" />

			<title>{title}</title>
			<meta name="twitter:text:title" content={title} />
			<meta name="twitter:title" content={title} />
			<meta name="og:title" content={title} />

			<meta name="description" content={description} />
			<meta name="og:description" content={description} />
			<meta name="twitter:description" content={description} />

			<meta name="twitter:image" content={image} />
			{/* <meta name="og:image" content={image} /> */}

			<meta name="og:url" content={url} />
			<meta name="keyword" content='ethereum, blockchain, cryptocurrency, NFT' />
		</Head>
	)
}

Meta.defaultProps = {
	title: 'Titanbornes',
	url: 'https://titanbornes.com',
	description: 'Experimental NFT Project',
	image: 'https://user-images.githubusercontent.com/45223699/157456186-5ab26bd2-9246-4e3a-9845-673f8375ba1e.png',
}

export default Meta
