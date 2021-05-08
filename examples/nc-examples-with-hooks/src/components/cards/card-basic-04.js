
import React, { Fragment } from 'react'
import styled from 'styled-components'

// Componentes
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Container from 'components/container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import Image from 'components/image/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Font AwesomeIcon
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'


const Card = styled(GridContainer)`
    width: 300px;
    height: 350px;
`

const BloqueImage = styled(Image)`
    width: 300px;
    height: 200px;
`

const ContenedorTgrafia = styled(GridContainer)`
    background-color: #fff;
`

const BloqueTexto = styled(GridContainer)`
     padding: 10px;
`

const cardBasic04 = () => {
    return (
        <Fragment>

            <Card>

                <ContenedorTgrafia>
                    <FlexContainer shadowBR1>
                        <BloqueImage src="https://bucket-nc-images.s3.amazonaws.com/cards/card-469px.jpg" alt=""/>
                    </FlexContainer>

                    <GridContainer>
                        <Typography h3 textGray600 bold marginT3 center> ipsum dolor</Typography>
                        <Typography h6 textGray700 marginT2 center>amet consectetur </Typography>
                    </GridContainer>

                    <BloqueTexto>
                        <Typography p4 textGray500 center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat similique</Typography>
                    </BloqueTexto>

                    <Container center marginT3>
                        <Button circle2 paddingR7 paddingL7 paddingT4 paddingB4 shadowBR1 marginR5 bgBlue900>
                            <FontAwesomeIcon icon={faFacebookF} color='#FFFFFF' />
                        </Button>
                        <Button circle2 paddingR6 paddingL6 paddingT5 paddingB5 shadowBR1 marginR4 bgBlue300>
                            <FontAwesomeIcon icon={faTwitter} color='#FFFFFF' />
                        </Button>
                        <Button circle2 paddingR6 paddingL6 paddingT5 paddingB5 shadowBR1 marginL2 bgPink300>
                            <FontAwesomeIcon icon={faDribbble} color='#FFFFFF' />
                        </Button>
                    </Container>
                </ContenedorTgrafia>

            </Card>

        </Fragment>
    )
}

export default cardBasic04

