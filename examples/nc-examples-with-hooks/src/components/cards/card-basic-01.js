
import React, { Fragment } from 'react'
import styled from 'styled-components'

// NC Components
import GridContainer from '../grid-container/grid-container'
import FlexContainer from '../flex-container/flex-container'
import Typography from '../typography/typography'
import Button from '../buttons/button'
import Image from '../image/image'

const Card = styled(GridContainer)`
    background-color: #ffff;
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


const cardBasic01 = () => {
    return (
        <Fragment>

            <Card marginT3>
                <ContenedorImage>
                    <ImageHeader src='https://bucket-nc-images.s3.amazonaws.com/cards/card-900px-01.png' alt="" />
                </ContenedorImage>

                <GridContainer marginX2 marginY2>
                    <Typography h4 textBlue500 bold center> Lorem, ipsum dolor. </Typography>
                    <Typography h5 textPink700 center> Lorem, ipsum dolor. </Typography>
                    <Typography p4 textGray400 center> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae modi, laborum totam aliquam excepturi saepe? </Typography>
                </GridContainer>

                <ContenedorButton>
                    <Button bgBlue500 textWhite> Lorem, ipsum. </Button>
                </ContenedorButton>

            </Card>
        </Fragment>
    )
}

export default cardBasic01
