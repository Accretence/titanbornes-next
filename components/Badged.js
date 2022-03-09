import React from 'react'

import { Badge } from '@geist-ui/core'

const Badged = ({ c }) => {
    return (
        <Badge
            style={{
                backgroundColor: '#ffd400',
                color: 'black',
            }}
        >
            <b>{c}</b>
        </Badge>
    )
}

export default Badged
