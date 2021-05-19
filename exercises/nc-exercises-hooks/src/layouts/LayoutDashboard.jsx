

import React, { Fragment, useEffect } from 'react'
import Styled from 'styled-components'

// Components
import GridContainer from 'components/grid-container'

// Views
import Menu from 'views/navs/Menu'
import MenuVertical from 'views/navs/MenuVertical'


const ContainerMain = Styled(GridContainer)`
    grid-template-columns: 18% 82%;
    height: 800px;
    padding-top: 60px;
`

const ContainerMenuVertical = Styled(GridContainer)`
    background-color: #5E5E5E;
`

const DashboardReact = ({ children }) => {

    
    return (
        <Fragment>

            <GridContainer>
                <Menu />
            </GridContainer>

            <ContainerMain>
                <ContainerMenuVertical>
                    <MenuVertical />
                </ContainerMenuVertical>

                <GridContainer bgGray100>
                    
                    { children }
                    
                </GridContainer>

            </ContainerMain>

        </Fragment>
    )
}

export default DashboardReact
