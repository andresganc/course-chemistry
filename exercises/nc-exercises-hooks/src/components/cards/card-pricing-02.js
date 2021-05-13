
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Componentes
import GridContainer from 'components/grid-container/'
import Container from 'components/container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Font Awesome Icon 
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

const ContenedorPrincipal = styled(GridContainer)`
    border-radius:5px;
    opacity: 0.8;
    width: 300px;
    height: 400px;
`

const ContenedorImage = styled(Container)`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: solid 1px #BDBDBD;
`

const ContenedorTexto = styled(GridContainer)`
    padding: 16px;
`

const BloqueButton = styled(Button)`
    border-radius: 30px;
    width: 140px;
    height: 40px;
`

const cardPricing02 = () => {
    return (
        <Fragment>

            <ContenedorPrincipal bgPurple500>

                <FlexContainer jcCenter marginT4>
                    <ContenedorImage bgWhite>
                        <FlexContainer jcCenter marginY6>
                            <FontAwesomeIcon icon={faBuilding} size='3x' color='#FFFFFF' />
                        </FlexContainer>
                    </ContenedorImage>
                </FlexContainer>

                <ContenedorTexto>
                    <Typography bold center h2 textWhite>$69</Typography>
                    <Typography textGray300 marginX2 p3>Lorem, ipsum dolor sit amet ipsum dolor consectetur adipisicing elit</Typography>
                </ContenedorTexto>

                <FlexContainer jcCenter>
                    <BloqueButton textGray600>  ipsum dolor </BloqueButton>
                </FlexContainer>

            </ContenedorPrincipal>

        </Fragment>

    )
}

export default cardPricing02
