
import React, { Fragment } from 'react'

// Componentes NC
import FlexContainer from '../components/flex-container/flex-container'

const ViewsFlexContainer = () => {
    return (
        <Fragment>
            <FlexContainer bgLime900 jcSpaceBetween >
                <ul>
                    <label htmlFor="">LOGO</label>
                </ul>
                <ul>
                    <li><a href=""> Inicio </a></li>
                    <li><a href=""> Acerca de </a></li>
                    <li><a href=""> Servicios </a></li>
                    <li><a href=""> Contactenos </a></li>
                </ul>
                <ul>
                    <label htmlFor=""> LOGIN </label>
                </ul>
            </FlexContainer>
        </Fragment>
    )
}

export default ViewsFlexContainer
