
import React, { Fragment } from 'react'
import styled from 'styled-components'

// NC Components
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import Image from 'components/image/'

const Card = styled(GridContainer)`
    background: linear-gradient( 78deg,#1C52EE,#954ED3 );
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    height: 350px;
`

const ContenedorImage = styled(FlexContainer)`
    margin: auto;
    justify-content: center;
`

const ImageHeader = styled(Image)`
    width: 120px;
    height: 120px;
`

const ContenedorButton = styled(GridContainer)`
    margin: auto;
    justify-content: center;
`


const cardGradient01 = () => {
    return (
        <Fragment>

            <Card marginT3>
                <ContenedorImage>
                    <ImageHeader src='https://bucket-nc-images.s3.amazonaws.com/cards/card-gradient-200px-01.png' alt="" />
                </ContenedorImage>

                <GridContainer bgYellow200>
                    <Typography h4 textBlue500 bold center> Lorem, ipsum dolor. </Typography>
                    <Typography h5 textPink700 center> Lorem, ipsum dolor. </Typography>
                </GridContainer>
            </Card>
        </Fragment>
    )
}

export default cardGradient01
