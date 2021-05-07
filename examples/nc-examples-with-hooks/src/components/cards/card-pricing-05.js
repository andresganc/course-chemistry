
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Componentes
import GridContainer from '../grid-container/grid-container'
import Container from '../container/container'
import FlexContainer from '../flex-container/flex-container'
import Typography from '../typography/typography'
import Button from '../buttons/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Fonta Awesome Icon  
import { faUserFriends} from '@fortawesome/free-solid-svg-icons'

const ContenedorPrincipal = styled(GridContainer)`
    border-radius: 5px;
    width: 300px;
    height: 400px;
`
const ContenedorImage = styled(Container)`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: solid 1px #FAFAFA;
`

const ContenedorTexto = styled(GridContainer)`
    padding: 16px;
`

const BloqueButton = styled(Button)`
    border-radius: 30px;
    width: 140px;
    height: 40px;
`

const cardPricing05 = () => {
    return (
        <Fragment>

            <ContenedorPrincipal>

                <GridContainer center>
                    <Typography textGray100 marginT4> Lorem ipsum </Typography>
                </GridContainer>

                <FlexContainer jcCenter>
                    <ContenedorImage bgWhite marginY4>
                        <FlexContainer jcCenter marginY6>
                            <FontAwesomeIcon icon={faUserFriends} size='3x' color='#FFFFFF' />
                        </FlexContainer>
                    </ContenedorImage>
                </FlexContainer>

                <ContenedorTexto>
                    <Typography bold center h5 textWhite>Lorem</Typography>
                    <Typography textGray100 marginY2 p3 center> Lorem, ipsum dolor sit amet ipsum dolor consectetur adipisicing elit</Typography>
                </ContenedorTexto>

                <FlexContainer jcCenter>
                    <BloqueButton marginB10 bgWhite textGray400>  ipsum dolor </BloqueButton>
                </FlexContainer>


            </ContenedorPrincipal>

        </Fragment>

    )
}

export default cardPricing05
