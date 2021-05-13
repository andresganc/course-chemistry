
import React, { Fragment } from 'react'
import Styled from 'styled-components'

// Layouts
import LayoutAside from 'layouts/LayoutAside'
import LayoutMenu from 'layouts/LayoutMenu'
//import LayoutMain from 'layouts/LayoutMain'

// Components NC
import GridContainer from 'components/grid-container'


const LayoutContainer = Styled(GridContainer)`
    grid-template-columns: 20% 80%;
`


const Layout = ({ children }) => {
    return (
        <Fragment>
            <LayoutContainer>
                <GridContainer>
                    <LayoutAside />
                </GridContainer>

                <GridContainer>
                    <LayoutMenu />
                    <main>
                    { children }
                    </main>
                </GridContainer>
            </LayoutContainer>
        </Fragment>
    )
}

export default Layout
