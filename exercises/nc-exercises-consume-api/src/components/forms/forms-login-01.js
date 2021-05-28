
import React, { Fragment } from 'react'
import styled from 'styled-components'

// Componentes
import GridContainer from 'components/grid-container/'
import Container from 'components/container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import Input from 'components/inputs/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Font Aweson Icon
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faSmile, faUnlock } from '@fortawesome/free-solid-svg-icons'

const Form = styled(GridContainer)`
    background-color:#F5F5F5;
    width: 360px;
    height: 450px;
    border-radius: 8px;
`

const ContenedorPrincipal = styled(GridContainer)`
    top: -20px;
    width: 310px;
`

const ContenedorIconos = styled(FontAwesomeIcon)`
    margin: 12px;
`

const formsLogin01 = () => {
    return (
        <Fragment>

            <Form center>

                <ContenedorPrincipal bgPurple500 relative>
                    <GridContainer>
                        <Typography p2 textWhite bold center marginT5> LOGIN </Typography>
                    </GridContainer>

                    <Container center marginY1>
                        <ContenedorIconos icon={faFacebookF} color='#FFFFFF' />
                        <ContenedorIconos icon={faGoogle} color='#FFFFFF' />
                    </Container>
                </ ContenedorPrincipal>

                <Container center>
                    <Typography textGray500> Login </Typography>
                </Container>

                <Container center>
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
                </Container>

                <GridContainer center>
                    <Button bgPurple500 textWhite marginB3 radius4 >Iniciar Sesión</Button>
                </GridContainer>

            </Form>

        </Fragment>
    )
}

export default formsLogin01

