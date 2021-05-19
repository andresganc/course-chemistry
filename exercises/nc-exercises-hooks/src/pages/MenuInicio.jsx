

import { Fragment } from 'react'

// Components
import GridContainer from 'components/grid-container'

// Layouts
import LayoutDashboard from 'layouts/LayoutDashboard'

// Views
import CardHeader from 'views/cards/CardHeader'
import CardContador from 'views/cards/CardContador'
import CardContadorHoras from 'views/cards/CardContadorHoras'


const MenuInicio = () => {
    return (
        <Fragment>
            <LayoutDashboard>
                <GridContainer>

                    <GridContainer>
                        <GridContainer>
                            <CardHeader />
                        </GridContainer>

                        <GridContainer gridCols4 gap20 center marginY7>
                            <CardContador />
                            <CardContadorHoras />
                            <CardContador />
                            <CardContador />
                        </GridContainer>
                    </GridContainer>

                </GridContainer>
            </LayoutDashboard>
        </Fragment>
    )
}

export default MenuInicio

