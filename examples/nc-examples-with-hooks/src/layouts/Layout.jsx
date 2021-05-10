
import React, { Fragment } from 'react'

// Layouts
import LayoutAside from 'layouts/LayoutAside'
import LayoutMenu from 'layouts/LayoutMenu'
//import LayoutMain from 'layouts/LayoutMain'

// Components NC
import GridContainer from 'components/grid-container'


const Layout = ({ children }) => {
    return (
        <Fragment>
            <GridContainer>
                <GridContainer>
                    <LayoutAside />
                </GridContainer>

                <GridContainer>
                    <LayoutMenu />
                </GridContainer>

                <main>
                    { children }
                </main>
            </GridContainer>
        </Fragment>
    )
}

export default Layout
