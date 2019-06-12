import React from 'react'
import {FormattedMessage} from 'react-intl'

function Foot(){
    return <div>
        <FormattedMessage id='hello'/>
        <FormattedMessage id='car'/>
    </div>
}

export default Foot