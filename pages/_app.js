import React, { useCallback, useEffect, useState } from 'react'

// Libraries
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import { ethers } from 'ethers'

// Global State
import { ThemeContext, themes } from '../state/context/themeContext'
import { ProviderContext } from '../state/context/providerContext'

// Utilities
import '../utils/icons'

export default function App({ Component, pageProps }) {
    // Local State
    const [themeType, setThemeType] = useState('dark')
    const [provider, setProvider] = useState(null)

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            // Get theme
            document.documentElement.removeAttribute('style')
            document.body.removeAttribute('style')

            const theme = window.localStorage.getItem('theme')
            if (themes.includes(theme)) setThemeType(theme)

            // Get logged-in user
            if (
                window.ethereum &&
                window.localStorage.getItem('currentUserInfo')
            ) {
                const localStoragedWalletAddress = JSON.parse(
                    window.localStorage.getItem('currentUserInfo')
                )

                if (
                    localStoragedWalletAddress &&
                    typeof localStoragedWalletAddress === 'string'
                ) {
                    console.log('Reading from localStorage')
                    setProvider({
								connected: true,
                        provider: new ethers.providers.Web3Provider(
                            window.ethereum
                        ),
                        address: localStoragedWalletAddress,
                        correctChain:
                            window.ethereum.chainId ==
                            process.env.NEXT_PUBLIC_CHAINID
                                ? true
                                : false,
                    })
                }
            }
        }
    }, [])

    const switchTheme = useCallback((theme) => {
        setThemeType(theme)
        if (typeof window !== 'undefined' && window.localStorage)
            window.localStorage.setItem('theme', theme)
    }, [])

    return (
        <ProviderContext.Provider value={{ provider, setProvider }}>
            <GeistProvider themeType={themeType}>
                <CssBaseline />
                <ThemeContext.Provider value={{ themeType, switchTheme }}>
                    <Component {...pageProps} />
                </ThemeContext.Provider>
            </GeistProvider>
        </ProviderContext.Provider>
    )
}
