
import React, { Fragment } from 'react'
import styled from 'styled-components'

// Componentes
import GridContainer from 'components/grid-container/'
import Container from 'components/container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import Input from 'components/inputs/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Utils
import { device } from 'components/assets/utils/divice'

// Font Awesome Icon
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faSmile, faUnlock, faSquareRootAlt, faChevronLeft, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const Form = styled(GridContainer)`
    width: 800px;
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 8px;
    margin: 20px;

    //==================== Tablet =====================
    @media ${device.tablet} {
        width: 700px;
    }

    //==================== Mobile =====================
    @media ${device.mobileL} {
        width: 320px;
    }
`

const ContenedorTitulo = styled(Typography)`
    font-size: 30px;
`

const ContenedorTexto = styled(Container)`
    width: 90%;

    //==================== Mobile =====================
    @media ${device.mobileL} {
        width: 70%;
        margin-left: 40px;
    }
`

const ContenedorInput = styled(Container)`
    //==================== Tablet =====================
    @media ${device.tablet} {
        margin-left: 35px;
    }
`

const ContenedorForm = styled(GridContainer)`

    //==================== Mobile =====================
    @media ${device.mobileL} {
        grid-template-columns: 100%;
    }
`

const ContenedorButton = styled(Container)`

     //==================== Mobile =====================
     @media ${device.mobileL} {
        margin-top: 50px;
        margin-bottom: 15px;
    }
`

const formsRegister01 = () => {
    return (
        <Fragment>

            <Form center>

                <GridContainer marginT7 center>
                    <ContenedorTitulo h1 textGray800> Register </ContenedorTitulo>
                </GridContainer>

                <ContenedorForm gridCols2>
                    <ContenedorTexto marginL8 marginB6>
                        <FlexContainer marginT6>
                            <Container marginT2 marginR3>
                                <FontAwesomeIcon icon={faSquareRootAlt} color='#EC407A' />
                            </Container>

                            <Container>
                                <Typography h5 textGray800> Lorem </Typography>
                                <Typography p3 textGray400 marginT3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eius est harum? Ad optio est distinctio perferendis esse assumenda rem </Typography>
                            </Container>
                        </FlexContainer>

                        <FlexContainer marginT7>
                            <Container marginT2 marginR3>
                                <FontAwesomeIcon icon={faChevronLeft} color='#AB47BC' />
                            </Container>

                            <Container>
                                <Typography h5 textGray800> Lorem </Typography>
                                <Typography p3 textGray400 marginT3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eius est harum? Ad optio est distinctio perferendis esse assumenda rem </Typography>
                            </Container>
                        </FlexContainer>

                        <FlexContainer marginT7>
                            <Container marginT2 marginR3>
                                <FontAwesomeIcon icon={faUserFriends} color='#26C6DA' />
                            </Container>

                            <Container>
                                <Typography h5 textGray800> Lorem </Typography>
                                <Typography p3 textGray400 marginT3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eius est harum? Ad optio est distinctio perferendis esse assumenda rem </Typography>
                            </Container>
                        </FlexContainer>
                    </ContenedorTexto>

                    <GridContainer marginR5>

                        <Container center marginB8>
                            <Button circle2 paddingR7 paddingL7 paddingT4 paddingB4 shadowBR1 marginR5 bgBlue900>
                                <FontAwesomeIcon icon={faFacebookF} color='#FFFFFF' />
                            </Button>
                            <Button circle2 paddingR6 paddingL6 paddingT4 paddingB4 shadowBR1 marginL2 bgWhide>
                                <FontAwesomeIcon icon={faGoogle} color='#EF5350' />
                            </Button>
                        </Container>

                        <ContenedorInput marginL10>
                            <Container>
                                <FontAwesomeIcon icon={faSmile} color='#BDBDBD' />
                                <Input round noBorder marginL4 bgGray200 placeholder='Nombre' />
                            </Container>

                            <Container marginY6>
                                <FontAwesomeIcon icon={faEnvelope} color='#BDBDBD' />
                                <Input round noBorder marginL4 bgGray200 placeholder='Email' />
                            </Container>

                            <Container>
                                <FontAwesomeIcon icon={faUnlock} color='#BDBDBD' />
                                <Input round noBorder marginL4 bgGray200 placeholder='Contraseña' />
                            </Container>
                        </ContenedorInput>

                        <ContenedorButton center>
                            <Button bgPurple500 textWhite marginB3 radius4 > Registrar </Button>
                        </ContenedorButton>

                    </GridContainer>
                </ContenedorForm>

            </Form>

        </Fragment>
    )
}

export default formsRegister01
