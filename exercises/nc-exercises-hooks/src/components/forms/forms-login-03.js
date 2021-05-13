
import React, { Fragment } from 'react'
import styled from 'styled-components'

// Componentes
import GridContainer from 'components/grid-container/'
import Container from 'components/container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import Input from 'components/inputs/'

const Form = styled(GridContainer)`
    background-color: #37474F;
    width: 300px;
    height: 550px;
`

const ContenedorButton = styled(Button)`
    width: 200px;
`

const formsLogin03 = () => {
    return (
        <Fragment>

            <Form>

                <Container marginY10 center>
                    <Container marginT8>
                        <Typography h5 textGray300 center> Log In </Typography>
                    </Container>

                    <Container marginY5>
                        <Container>
                            <Input radius4 noBorder bgGray200 placeholder='Nombre' />
                        </Container>

                        <Container>
                            <Input radius4 marginY3 noBorder bgGray200 placeholder='Email' />
                        </Container>

                        <Container>
                            <ContenedorButton bgTeal800 textWhite marginB3 paddingB4 paddingT4 radius3> Login </ContenedorButton>
                        </Container>

                        <Container>
                            <Typography center textGray500>Lorem, ipsum </Typography>
                            <Typography marginT8 center textGray200>Lorem, ipsum </Typography>
                        </Container>
                    </Container>
                </Container>

            </Form>

        </Fragment>
    )
}

export default formsLogin03