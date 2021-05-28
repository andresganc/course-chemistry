
import React, { Fragment } from 'react'
import styled from 'styled-components'

// Componentes
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Container from 'components/container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import Image from 'components/image/'
import Separator from 'components/separator/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Font AwesomeIcon
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'

const Card = styled(GridContainer)`
    width: 300px;
    height: 468px;
`

const BloqueImage = styled(Image)`
    width: 300px;
    height: 200px;
    border-radius: 5px;
`

const ContenedorTexto = styled(GridContainer)`
    padding: 15px;
`

const ContenedorTipo = styled(GridContainer)`
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    opacity: 0.9;
    width: 300px;
`

const ContenedorFooter = styled(Typography)`
    padding: 15px;
`

const cardBasic06 = () => {
    return (
        <Fragment>

            <GridContainer>

                <Card radius2>

                    <FlexContainer shadowBR2>
                        < BloqueImage src="https://bucket-nc-images.s3.amazonaws.com/cards/card-469px.jpg" alt="" />
                    </FlexContainer>

                    <ContenedorTexto>
                        <Typography h4 marginT2 textGray700 bold center> ipsum dolor</Typography>
                        <Typography h6 marginY3 textIndigo500 bold center>amet consectetur </Typography>
                        <Typography p3 textGray500 center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat similique quia voluptatem Suscipit repellat </Typography>
                    </ContenedorTexto>

                    <Container center marginB3>
                        <Button circle2 paddingR7 paddingL7 paddingT4 paddingB4 shadowBR1 marginR5 bgBlue900>
                            <FontAwesomeIcon icon={faFacebookF} color='#FFFFFF' />
                        </Button>
                        <Button circle2 paddingR6 paddingL6 paddingT5 paddingB4 shadowBR1 marginR4 bgBlue300>
                            <FontAwesomeIcon icon={faTwitter} color='#FFFFFF' />
                        </Button>
                        <Button circle2 paddingR6 paddingL6 paddingT5 paddingB4 shadowBR1 marginL2 bgPink300>
                            <FontAwesomeIcon icon={faDribbble} color='#FFFFFF' />
                        </Button>
                    </Container>

                    <Separator bgGray500 />

                    <ContenedorTipo bgGray100 textGray500 center>
                        <ContenedorFooter>2 days ago</ContenedorFooter>
                    </ContenedorTipo>

                </Card>

            </GridContainer>

        </Fragment>
    )
}

export default cardBasic06

