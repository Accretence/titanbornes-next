import React, { useState, useEffect } from 'react'
import Link from 'next/link'

// Components
import { Text, useTheme } from '@geist-ui/react'
import Submenu from './Submenu'
import HeaderOptions from './HeaderOptions'

const Header = () => {
	const theme = useTheme()

	return (
		<>
			<nav className="MenuNavigation">
				<Text className="MenuNavigationTitle">
					<Link className="MenuNavigationTitle" href="/">
						[ TITANBORNES ]
					</Link>
				</Text>
				<div>
					<HeaderOptions />
				</div>
			</nav>
			<Submenu />
			<style>
        {`
          .MenuNavigation {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: ${theme.layout.pageWidthWithMargin};
            max-width: 100%;
            margin: 0 auto;
            padding: 0 ${theme.layout.pageMargin};
            background-color: ${theme.palette.background};
            font-size: 16px;
            height: 54px;
            box-sizing: border-box;
          }
          .MenuNavigationTitle a {
            color: ${theme.palette.foreground}!important;
            font-size: 1.5rem;
            font-weight: 500;
            margin: 0;
            letter-spacing: 0.2rem;
          }
          .MenuNavigation > div {
            display: flex;
            align-items: center;
          }
        `}
      </style>
		</>
	)
}

export default Header
