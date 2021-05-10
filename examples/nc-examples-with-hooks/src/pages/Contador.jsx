
import React, { Fragment, useState } from 'react'

// Components NC
import Button from 'components/buttons'

const Contador = () => {

    const [contador, setContador] = useState(initialState)

    return (
        <Fragment>
            <h2> { contador } </h2>
            <Button> - </Button>
            <Button> + </Button>
        </Fragment>
    )
}

export default Contador
