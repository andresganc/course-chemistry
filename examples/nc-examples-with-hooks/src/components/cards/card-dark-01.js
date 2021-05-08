import React, { Fragment } from 'react'
import styled from 'styled-components'

// Componentes
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Separator from 'components/separator/'
import Image from 'components/image/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Icono Font Awesome
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'

const Card = styled(GridContainer)`
    width: 350px;
    height: 450px; 
`

const ContenedorImage = styled(Image)`
    width: 350px;
    height: 220px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px; 
`

const ContenedorTitulo = styled(Typography)`
    padding: 20px; 
`

const ContenedorTexto = styled(Typography)`
    padding: 20px;
`

const cardDark01 = () => {
    return (
        <Fragment>

            <Card>

                <FlexContainer>
                    <ContenedorImage src="https://bucket-nc-images.s3.amazonaws.com/cards/card-626px-02.jpg" alt="" />
                </FlexContainer>

                <FlexContainer jcSpaceBetween aiCenter bgGray800>
                    <GridContainer>
                        <ContenedorTitulo h3 textWhite normal> amet consec </ContenedorTitulo>
                    </GridContainer>

                    <FlexContainer marginR5>
                        <FontAwesomeIcon icon={faShareAlt} color='#FFFFFF' />
                    </FlexContainer>
                </FlexContainer>

                <GridContainer bgGray800>

                    <Separator marginX5 bgGray100 />

                    <GridContainer>
                        <ContenedorTexto p textWhite>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipi repellat similique.</ContenedorTexto>
                    </GridContainer>

                    <FlexContainer jcFlexEnd marginY4 marginX4>
                        <Typography h5 textWhite normal marginR3 marginB3>Lorem ipsum - - </Typography>
                    </FlexContainer>

                </GridContainer>

            </Card>

        </Fragment>
    )
}

export default cardDark01


