import React, { useState, useEffect, useContext } from 'react'

// Libraries
import { ethers } from 'ethers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    useToasts,
    Text,
    Button,
    Link as GeistLink,
    useTheme,
    Popover,
} from '@geist-ui/core'

// Components
import UserPopover from './UserPopover'

// Hooks

// Utilities

// Context API
import { themePreference } from '../../state/context/themeContext'
import { ProviderContext } from '../../state/context/providerContext'

const HeaderOptions = () => {
    // Hooks
    const theme = useTheme()
    const {
        toasts,
        setToast,
        removeAll,
        findToastOneByID,
        removeToastOneByID,
    } = useToasts()
    // Local State
    const [sticky, setSticky] = useState(false)
    const [metamaskAvailable, setMetamaskAvailable] = useState(false)

    // Global State
    const prefers = themePreference()
    const { provider, setProvider } = useContext(ProviderContext)

    useEffect(() => {
        if (window && window.ethereum) {
            setMetamaskAvailable(true)
        }
    }, [])

    useEffect(() => {
        const scrollHandler = () =>
            setSticky(document.documentElement.scrollTop > 54)
        document.addEventListener('scroll', scrollHandler)
        return () => document.removeEventListener('scroll', scrollHandler)
    }, [setSticky])

    const connectWalletHandler = () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then((result) => {
                    accountChangedHandler(result[0])
                })
        } else {
            setToast({
                text: 'You need to install MetaMask to be able to interact with this application.',
                type: 'warning',
            })
        }
    }

    const accountChangedHandler = (newWalletAddress) => {
        if (!newWalletAddress || newWalletAddress == '') {
            localStorage.removeItem('currentUserInfo')
            setProvider(null)
            window.location.reload()
        } else if (window.ethereum.chainId == process.env.NEXT_PUBLIC_CHAINID) {
            window.localStorage.setItem(
                'currentUserInfo',
                JSON.stringify(newWalletAddress)
            )
            setProvider({
                connected: true,
                provider: new ethers.providers.Web3Provider(window.ethereum),
                address: newWalletAddress,
                correctChain:
                    window.ethereum.chainId == process.env.NEXT_PUBLIC_CHAINID
                        ? true
                        : false,
            })
            setToast({
                text: 'Wallet connected...',
                type: 'warning',
            })
        }
    }

    const chainChangedHandler = () => {
        window.location.reload()
    }

    if (typeof window !== 'undefined') {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', accountChangedHandler)

            window.ethereum.on('chainChanged', chainChangedHandler)
        }
    }

    const Connected = () => {
        return (
            <Popover
                pb="0.5"
                content={<UserPopover />}
                placement="bottomEnd"
                portalClassName="UserSettingsPopover"
            >
                <Button
                    style={
                        sticky
                            ? {
                                  backgroundColor: '#ffd400',
                                  color: 'black',
                                  top: '0px',
                                  borderColor: `${theme.palette.accents_2}`,
                              }
                            : {
                                  backgroundColor: '#ffd400',
                                  color: 'black',
                              }
                    }
                    auto
                    scale={0.6}
                >
                    <Text small>
                        <b>Connected</b>
                    </Text>
                </Button>
            </Popover>
        )
    }

    const PleaseConnect = () => {
        return <Button
            onClick={connectWalletHandler}
            style={
                sticky
                    ? {
                          backgroundColor: '#ffd400',
                          color: 'black',
                          top: '0px',
                          borderColor: `${theme.palette.accents_2}`,
                      }
                    : {
                          backgroundColor: '#ffd400',
                          color: 'black',
                      }
            }
            auto
            scale={0.6}
        >
            <Text small>
                <b>Connect Metamask Wallet</b>
            </Text>
        </Button>
    }

    const WrongNetwork = () => {
        return <Button
            style={
                sticky
                    ? {
                          backgroundColor: '#ffd400',
                          color: 'black',
                          top: '0px',
                          borderColor: `${theme.palette.accents_2}`,
                      }
                    : {
                          backgroundColor: '#ffd400',
                          color: 'black',
                      }
            }
            auto
            scale={0.6}
        >
            <Text small>
                <b>Wrong Network</b>
            </Text>
        </Button>
    }

    return (
        <>
            <GeistLink
                href={'https://discord.gg/uc2zH6SYmy'}
                target="_blank"
                rel="noopener"
            >
                <Button
                    style={sticky ? { top: '1.5px' } : {}}
                    icon={<FontAwesomeIcon icon={['fab', 'discord']} />}
                    auto
                    type="abort"
                    mx={0.3}
                    px={0.3}
                    scale={0.7}
                />
            </GeistLink>
            <GeistLink
                href={'https://twitter.com/titanbornes'}
                target="_blank"
                rel="noopener"
            >
                <Button
                    style={sticky ? { top: '1.5px' } : {}}
                    icon={<FontAwesomeIcon icon={['fab', 'twitter']} />}
                    auto
                    type="abort"
                    mx={0.3}
                    px={0.3}
                    scale={0.7}
                />
            </GeistLink>
            <Button
                style={
                    sticky
                        ? {
                              top: '1.5px',
                              borderColor: `${theme.palette.accents_2}`,
                          }
                        : { borderColor: `${theme.palette.accents_2}` }
                }
                aria-label="Toggle Dark mode"
                ml={0.3}
                mr={0.5}
                px={0.6}
                scale={0.6}
                auto
                icon={
                    theme.type === 'dark' ? (
                        <FontAwesomeIcon icon={['fas', 'sun']} />
                    ) : (
                        <FontAwesomeIcon icon={['fas', 'moon']} />
                    )
                }
                onClick={() =>
                    prefers.switchTheme(
                        theme.type === 'dark' ? 'light' : 'dark'
                    )
                }
            />

            {metamaskAvailable && (
                <div style={{ display: 'inline' }}>
                    {provider ? (
                        window.ethereum.chainId ==
                        process.env.NEXT_PUBLIC_CHAINID ? (
                            <Connected />
                        ) : (
                            <WrongNetwork />
                        )
                    ) : (
                        <PleaseConnect />
                    )}
                </div>
            )}
            <style>
                {`
					.UserSettingsButton {
						border: none;
						background: none;
						padding: 0;
						margin: 0;
						appearance: none;
						cursor: pointer;
					}
      		`}
            </style>
        </>
    )
}

export default HeaderOptions
