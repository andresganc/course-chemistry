
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Componentes
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import Separator from 'components/separator/'

const ContenedorPrincipal = styled(GridContainer)`
    border-radius:5px;
    width: 300px;
    height: 400px;

    &::before {
        width: 300px;
        height: 400px;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url('https://bucket-nc-images.s3.amazonaws.com/cards/card-321px-07.jpg');
        content: "";
        filter: blur(1px) brightness(40%);
    }
`

const ContenedorSeparador = styled(GridContainer)`
    width: 260px;
`

const BloqueButton = styled(Button)`
    width: 140px;
    height: 40px;
    border-radius: 3px;
`

const cardPricing03 = () => {
    return (
        <Fragment>

            <ContenedorPrincipal relative>

                <GridContainer>
                    <Typography relative center marginY4 textWhite> ipsum dolor </Typography>
                </GridContainer>

                <GridContainer>
                    <Typography h1 textWhite marginB3 relative center> $89</Typography>
                </GridContainer>

                <ContenedorSeparador relative>
                    <Typography textWhite marginB3 center> Lorem, ipsum dolor sit </Typography>
                    <Separator bgGray500 marginB5 width2 />
                    <Typography textWhite marginB3 center> Lorem, ipsum dolor sit </Typography>
                    <Separator bgGray500 marginB5 width2 />
                    <Typography textWhite marginB3 center> Lorem, ipsum dolor sit </Typography>
                    <Separator bgGray500 marginB5 width2 />
                    <Typography textWhite marginB3 center> Lorem, ipsum dolor sit </Typography>
                </ContenedorSeparador>

                <FlexContainer jcCenter relative>
                    <BloqueButton bgDeepOrangeA400 marginB3 marginT4>  ipsum dolor </BloqueButton>
                </FlexContainer>

            </ContenedorPrincipal>

        </Fragment>

    )
}

export default cardPricing03
