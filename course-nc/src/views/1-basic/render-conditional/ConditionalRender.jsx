
import React, { Fragment, useState } from 'react'

// Components 
import LogOut from './LogOut'
import LogIn from './LogIn'

const ConditionalRender = () => {
    
    const [state, setState] = useState(false)

    const fuctionLogIn = () => {
        setState (true)
    }

    const fuctionLogOut = () => {
        setState (false)
    }

    return (
        <Fragment>
            
            <h2> CONDITIONAL RENDER </h2>
            { state? <LogIn /> : <LogOut /> }
            <button onClick={ fuctionLogIn }> LogIn </button>
            <button onClick={ fuctionLogOut }> LogOut </button>

        </Fragment>
    )
}

export default ConditionalRender
