
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Componentes
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import Separator from 'components/separator/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Font Awesome Icon
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const ContenedorPrincipal = styled(GridContainer)`
    background: #FFFFFF;
    border-radius:5px;
    width: 270px;
    height: 500px;
`

const ContenedorSeparador = styled(GridContainer)`
     width: 230px;
`

const BloqueButton = styled(Button)`
    width: 140px;
    height: 40px;
    border-radius: 20px;
`

const cardPricing04 = () => {
    return (
        <Fragment>

            <ContenedorPrincipal>

                <GridContainer>
                    <Typography center marginT5 textGreenA700> ipsum dolor </Typography>
                </GridContainer>

                <FlexContainer jcCenter aiCenter>
                    <Typography h4 textGray600 marginB3> $</Typography>
                    <Typography h1 textGray700 marginB3> 89</Typography>
                </FlexContainer>

                <ContenedorSeparador>
                    <Typography textGray500 marginB3 center><FontAwesomeIcon icon={faCheck} color='#00C853' /> Lorem, ipsum dolor sit </Typography>
                    <Separator bgGray300 marginB5 />
                    <Typography textGray500 marginB3 center><FontAwesomeIcon icon={faCheck} color='#00C853' /> Lorem, ipsum dolor sit </Typography>
                    <Separator bgGray300 marginB5 />
                    <Typography textGray500 marginB3 center><FontAwesomeIcon icon={faTimes} color='#F44336' /> Lorem, ipsum dolor sit </Typography>
                    <Separator bgGray300 marginB5 />
                    <Typography textGray500 marginB3 center><FontAwesomeIcon icon={faTimes} color='#F44336' /> Lorem, ipsum dolor sit </Typography>
                </ContenedorSeparador>

                <FlexContainer jcCenter>
                    <BloqueButton bgPurple500 textWhite marginB3 marginT4>  ipsum dolor </BloqueButton>
                </FlexContainer>

            </ContenedorPrincipal>

        </Fragment>
    )
}

export default cardPricing04
