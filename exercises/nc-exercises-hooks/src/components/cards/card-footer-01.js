
import React, { Fragment } from 'react'
import styled from 'styled-components'

// Componentes
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import Image from 'components/image/'
import Separator from 'components/separator/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Font Awesome Icon
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const ContenedorPrincipal = styled(GridContainer)`
    background-color: #fff;
    border-radius: 7px;
    width: 350px;
`

const ContenedorImage = styled(GridContainer)`
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    width: 350px;
    height: 200px;
    background: #FCE4EC;
`

const BloqueImage = styled(Image)`
    width: 200px;
    height: 200px;
`

const ContenedorButton = styled(Button)`
    position: relative;
    top: -22px;
    right: 20px;
`

const ContenedorTexto = styled(GridContainer)`
    padding: 15px;
`

const ContenedorFooter = styled(FlexContainer)` 
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    height: 50px;
`

const cardFooter01 = () => {
    return (
        <Fragment>

            <GridContainer>

                <ContenedorPrincipal center>
                    <ContenedorImage>
                        <FlexContainer>
                            <BloqueImage src='https://bucket-nc-images.s3.amazonaws.com/cards/card-500px-06.png' alt="" />
                        </FlexContainer>
                    </ContenedorImage>

                    <FlexContainer jcFlexEnd>
                        <ContenedorButton circle2 paddingR9 paddingL9 paddingT5 paddingB5 shadowBR1 marginR3 bgIndigo300>
                            <FontAwesomeIcon icon={faAngleRight} color='#FFFFFF' size='2x'/>
                        </ContenedorButton>
                    </FlexContainer>

                    <ContenedorTexto>
                        <Typography h4 textGray700 bold marginB4>sit amet</Typography>

                        <Separator bgGray200 />

                        <Typography p3 textGray500 marginT4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat similique quia</Typography>
                    </ContenedorTexto>

                    <ContenedorFooter jcCenter aiCenter bgIndigo300>
                        <FontAwesomeIcon icon={faClock} color='#FFFFFF'/>
                        <Typography p3 textWhite marginR5 marginL1>sit</Typography>
                        <FontAwesomeIcon icon={faComments} color='#FFFFFF'/>
                        <Typography p3 textWhite marginR5 marginL1>sit</Typography>
                        <FontAwesomeIcon icon={faFacebookF} color='#FFFFFF'/>
                        <Typography p3 textWhite marginR5 marginL1>sit</Typography>
                        <FontAwesomeIcon icon={faTwitter} color='#FFFFFF'/>
                        <Typography p3 textWhite marginR5 marginL1>sit</Typography>
                    </ContenedorFooter>
                </ContenedorPrincipal>

            </GridContainer>

        </Fragment>
    )
}

export default cardFooter01
