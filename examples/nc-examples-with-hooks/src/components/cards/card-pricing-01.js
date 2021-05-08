
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
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

const ContenedorPrincipal = styled(GridContainer)`
    background-color: #FFFFFF;
    border-radius: 5px;
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

const cardPricing01 = () => {
    return (
        <Fragment>

            <ContenedorPrincipal>

                <GridContainer center>
                    <Typography textGray400 marginT4> Lorem ipsum </Typography>
                </GridContainer>

                <FlexContainer jcCenter>
                    <ContenedorImage bgWhite marginY4>
                        <FlexContainer jcCenter marginY6>
                            <FontAwesomeIcon icon={faUserFriends} size='3x' color='#00BCD4'/>
                        </FlexContainer>
                    </ContenedorImage>
                </FlexContainer>

                <ContenedorTexto>
                    <Typography bold center h2 textGray800> $29</Typography>
                    <Typography textGray400 marginY2 center> Lorem, ipsum dolor sit amet ipsum dolor consectetur adipisicing elit</Typography>
                </ContenedorTexto>

                <FlexContainer jcCenter>
                    <BloqueButton marginB10 bgCyan500 textWhite>  ipsum dolor </BloqueButton>
                </FlexContainer>

            </ContenedorPrincipal>

        </Fragment>

    )
}

export default cardPricing01
