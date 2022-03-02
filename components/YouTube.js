import React from 'react'
import Link from 'next/link'

import {
	Text,
	Card,
	Badge,
	Grid,
	Link as GeistLink,
	useTheme,
	Spacer,
	Divider,
} from '@geist-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const YouTube = ({ embedId }) => {
	const theme = useTheme()

	return (
		<Card height="500px" width="100%">
			<iframe
				width="100%"
				height="465px"
				src={`https://www.youtube.com/embed/${embedId}`}
				frameBorder="0"
				allowFullScreen
			/>
		</Card>
	)
}

export default YouTube
