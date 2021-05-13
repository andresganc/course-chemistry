
import React, { Fragment } from 'react'
import Styled from 'styled-components'

// Layout
import Layout from 'layouts/Layout'

// Cards
import Card1 from 'views/cards/Card1'
import Card2 from 'views/cards/Card2'
import Card3 from 'views/cards/Card3'
import Card4 from 'views/cards/Card4'

// Components NC
import GridContainer from 'components/grid-container'



const Dashboard = () => {
    return (
        <Fragment>
            <Layout>
                <GridContainer>
                    <h2> Escritorio </h2>
                </GridContainer>

                <GridContainer gridCols2 >
                    <Card1 />
                    <Card2 />
                    <Card3 />
                    <Card4 />
                </GridContainer>
            </Layout>
        </Fragment>
    )
}

export default Dashboard
