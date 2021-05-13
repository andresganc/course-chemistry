
import React, { Fragment } from 'react'
import Styled from 'styled-components'

// Layouts
import LayoutAside from 'layouts/LayoutAside'

// Components NC
import MenuHorizontal from 'views/nav/MenuHorizontal'
import MenuVertical from 'views/nav/MenuVertical'
import Container from 'components/container'
import GridContainer from 'components/grid-container'


const ContainerMain = Styled(GridContainer)`
`

const ContainerBody = Styled(GridContainer)`
    grid-template-columns: 15% 75% 10%;
`

const ContainerMenuVertical = Styled(GridContainer)`
    height: 700px;
`


const Layout = ({ children }) => {
    return (
        <Fragment>

            <ContainerMain>

                <GridContainer>
                    <MenuHorizontal />
                </GridContainer>

                <ContainerBody>

                    <ContainerMenuVertical bgGray800>
                        <MenuVertical />
                    </ContainerMenuVertical>

                    <GridContainer>
                        <Container>
                        { children }
                        </Container>
                    </GridContainer>

                    <GridContainer bgGray600>
                        <h2> Aside Right </h2>
                    </GridContainer>

                </ContainerBody>

            </ContainerMain>

        </Fragment>
    )
}

export default Layout
