
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Componentes
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Container from 'components/container/'
import Typography from 'components/typography/'
import Image from 'components/image/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Font Aweson Icon
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInvision } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

const ContenedorPrincipal = styled(GridContainer)`
    background-color: #FFFFFF;
    width: 395px;
    height: 560px;
    border-radius: 5px;
`

const ContenedorImage = styled(FlexContainer)`
    position: relative;
    top: -20px;
    left: -1px;
    width: 450px;
`

const BloqueImage = styled(Image)`
    width: 100%;
    border-radius: 5px;
`

const ContenedorIconos = styled(FontAwesomeIcon)`
    margin: 12px;
`

const cardWider01 = () => {
    return (
        <Fragment>

            <GridContainer>

                <ContenedorPrincipal center>
                    <ContenedorImage>
                        <BloqueImage src='https://bucket-nc-images.s3.amazonaws.com/cards/card-250px-05.jpg' alt="" />
                    </ContenedorImage>

                    <GridContainer marginB3>
                        <Typography h4 textGray800 bold marginB2 center>Consectetur</Typography>
                        <Typography h5 textBlue400 bold marginB3 center>Adipisicing</Typography>
                        <Typography p3 textGray600 center>Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>
                        <Typography p3 textGray600 center>Lorem ipsum dolor sit amet consectetur adipisicing </Typography>
                        <Typography p3 textGray600 center>Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>
                    </GridContainer>

                    <Container center marginY2>
                        <ContenedorIconos icon={faInvision} color='#2196F3' />
                        <ContenedorIconos icon={faTwitter} color='#64B5F6' />
                        <ContenedorIconos icon={faFacebookF} color='#1565C0' />
                    </Container>
                </ContenedorPrincipal>

            </GridContainer>

        </Fragment>
    )
}

export default cardWider01
