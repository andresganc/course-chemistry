

import { Fragment } from 'react'

// Components
import GridContainer from 'components/grid-container'

// Layouts
import LayoutDashboard from 'layouts/LayoutDashboard'

// Views
import CardHeader from 'views/cards/CardHeader'
import CardContador from 'views/cards/CardContador'
import CardScrollHooks from 'views/cards/CardScrollHooks'
import CardAPIPokemons from 'views/cards/CardAPIPokemons'
import CardAPIRickAndMorty from 'views/cards/CardAPIRickAndMorty'
import CardContadorHoras from 'views/cards/CardContadorHoras'
import CardTodoListBasic from 'views/cards/CardTodoListBasic'


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
                            <CardScrollHooks />
                            <CardAPIPokemons />
                            <CardAPIRickAndMorty />
                            <CardContadorHoras />
                            <CardTodoListBasic />
                            <CardContador />
                        </GridContainer>
                    </GridContainer>

                </GridContainer>
            </LayoutDashboard>
        </Fragment>
    )
}

export default MenuInicio

