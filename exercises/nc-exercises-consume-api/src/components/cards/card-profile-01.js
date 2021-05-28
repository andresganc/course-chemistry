
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Componentes
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import Image from 'components/image/'

const ContenedorPrincipal = styled(GridContainer)`
    border-radius: 5px;
    width: 350px;
    height: 400px;
`

const ContenedorImage = styled(Image)`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`

const ContenedorTexto = styled(GridContainer)`
    padding: 16px;
`

const BloqueButton = styled(Button)`
    border-radius: 30px;
    width: 140px;
    height: 40px;
`

const cardProfile01 = () => {
    return (
        <Fragment>

            <ContenedorPrincipal>

                <FlexContainer jcCenter>
                    <ContenedorImage src='https://bucket-nc-images.s3.amazonaws.com/cards/profile-626px-08.jpg' sizeXL />
                </FlexContainer>

                <GridContainer center>
                    <Typography textGray400 marginT4 p3> Lorem ipsum </Typography>
                </GridContainer>

                <ContenedorTexto>
                    <Typography bold center h5 textGray800 marginB2>Lorem ipsum </Typography>
                    <Typography textGray400 marginY2 p3 center> Lorem, ipsum dolor sit amet ipsum dolor consectetur adipisicing elit consectetur adipisicing elit Lorem</Typography>
                </ContenedorTexto>

                <FlexContainer jcCenter>
                    <BloqueButton marginB10 bgCyan500 textWhite>  ipsum </BloqueButton>
                </FlexContainer>

            </ContenedorPrincipal>

        </Fragment>

    )
}

export default cardProfile01


