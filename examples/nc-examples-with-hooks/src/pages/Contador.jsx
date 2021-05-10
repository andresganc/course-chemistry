
import React, { Fragment, useState } from 'react'

import Layout from 'layouts/Layout'

// Components NC
import Button from 'components/buttons'

const Contador = () => {

    const [contador, setContador] = useState(0)

    return (
        <Fragment>
            <Layout>
                <h2> { contador } </h2>
                <Button> - </Button>
                <Button> + </Button>
            </Layout>
        </Fragment>
    )
}

export default Contador
