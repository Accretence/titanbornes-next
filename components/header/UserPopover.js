import React, { useContext } from 'react'

// Libraries
import { useToasts, Button, Popover, Description } from '@geist-ui/core'

// Global State
import { ProviderContext } from '../../state/context/providerContext'

const UserPopover = () => {
    const {
        toasts,
        setToast,
        removeAll,
        findToastOneByID,
        removeToastOneByID,
    } = useToasts()
    const { provider, setProvider } = useContext(ProviderContext)

    async function callDisconnect() {
        setProvider(null)
        localStorage.removeItem('currentUserInfo')

        setToast({ text: 'Wallet disconnected...', type: 'warning' })
    }

    return (
        <>
            {provider.walletAddress && (
                <div>
                    <Popover.Item title mb="0.9">
                        <Description
                            title={'Wallet Address'}
                            content={`${provider.walletAddress.slice(
                                0,
                                21
                            )}...`}
                        />
                    </Popover.Item>
                    <Popover.Item>
                        <Button
                            mt="0.25"
                            onClick={callDisconnect}
                            width="100%"
                            style={{
                                backgroundColor: '#ffd400',
                                color: 'black',
                            }}
                            scale={0.8}
                        >
                            <b>Logout</b>
                        </Button>
                    </Popover.Item>
                </div>
            )}
        </>
    )
}

export default UserPopover
