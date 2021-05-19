
import React, { Fragment, useState } from 'react'

// Components
import GridContainer from 'components/grid-container'
import Typography from 'components/typography'
import Button from 'components/buttons'

// Layouts
import LayoutDashboard from 'layouts/LayoutDashboard'


const Contador = () => {

    const [contador, setContador] = useState(0)

    return (
        <Fragment>
            <LayoutDashboard>
                <GridContainer marginX5 marginY5 center>

                    <GridContainer marginY5>
                        <Typography h4 center textGray700> CONTADOR </Typography>
                        <Typography p2 center textGray600> useState </Typography>
                    </GridContainer>

                    <GridContainer marginY5>
                        <Typography h1 center textPinkA400> { contador } </Typography>

                        <Button onClick={ () => setContador( contador + 1 ) } bgTeal600 > + </Button>
                        <Button onClick={ () => setContador( contador - 1 ) } bgOrange500 > - </Button>
                    </GridContainer>
                    
                </GridContainer>
                
            </LayoutDashboard>
        </Fragment>
    )
}

export default Contador
