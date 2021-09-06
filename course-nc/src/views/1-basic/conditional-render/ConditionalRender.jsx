
import React, { Fragment, useState } from 'react'

const ConditionalRender = () => {
    
    const [state, setState] = useState(false)

    const RenderComponent = () => {
        setState (true)
    }
    
    return (
        <Fragment>
            
        </Fragment>
    )
}

export default ConditionalRender
