
import React, { Fragment } from 'react'
import styled from 'styled-components'

// Componentes
import GridContainer from 'components/grid-container/'
import Container from 'components/container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import Input from 'components/inputs/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Font Awesome Icon
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

const Form = styled(GridContainer)`
    width: 300px;
    height: 600px;
    background-color: #F5F5F5; 
`

const ContenedorButton = styled(Button)`
    width: 230px;
`

const formsLogin04 = () => {
    return (
        <Fragment>

            <Form center>

                <Container marginY10 center>
                    <Container marginT8>
                        <Typography h5 textGray700 >Lorem, ipsum</Typography>
                        <Typography p3 textGray500 marginT1>Lorem ipsum dolor sit amet</Typography>
                    </Container>

                    <Container marginY5>
                        <Container marginB3>
                            <Input round noBorder bgGray200 placeholder='Nombre' />
                        </Container>

                        <Container>
                            <Input marginR2 round noBorder bgGray200 placeholder='Email' />
                            <FontAwesomeIcon icon={faAddressCard} color='#1976D2' />
                        </Container>
                    </Container>

                    <Container marginT6>
                        <ContenedorButton bgPurpleA700 textWhite marginB3 paddingB4 paddingT4> Login </ContenedorButton>
                        <Typography p3 textGray800 bold center>Lorem, ipsum dolor </Typography>
                    </Container>
                </Container>

            </Form>

        </Fragment>
    )
}

export default formsLogin04