
import React, { Fragment } from 'react'
import styled from 'styled-components'

// Componentes
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Container from 'components/container/'
import Typography from 'components/typography/'
import Separator from 'components/separator/'
import Button from 'components/buttons/'
import Input from 'components/inputs/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Font Awesome Icon
import { faGoogleWallet, faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLowVision } from '@fortawesome/free-solid-svg-icons'

const Form = styled(GridContainer)`
    width: 350px;
    height: 100%;
`

const ContenedorButton = styled(GridContainer)`
    width: 200px;
    height: 28px;
`

const ContenedorIconos = styled(FontAwesomeIcon)`
    margin: 12px;
`

const formsLogin02 = () => {
    return (
        <Fragment>

            <Form center>

                <FlexContainer marginT8 jcCenter>
                    <Button circle2 marginX2 paddingR10 paddingL10 paddingT8 paddingB8 bgBlue900>
                        <FontAwesomeIcon icon={faGoogleWallet} size='3x' color='#FFFFFF' />
                    </Button>
                </FlexContainer>

                <Container center marginT3>
                    <Typography h4 textGray800 >Lorem</Typography>
                </Container>

                <Container gridCols2 marginT5>
                    <Button marginX4>
                        <Typography p3 textBlue900 bold> Login </Typography>
                    </Button>

                    <Button marginX4>
                        <Typography p3 textGray700 bold> Ipsum </Typography>
                    </Button>
                </Container>

                <Container center marginY6>
                    <Container>
                        <Input round noBorder marginL4 bgGray200 placeholder='Nombre' />
                    </Container>

                    <Container marginT3>
                        <Input round noBorder marginL4 bgGray200 placeholder='Email' />
                        <FontAwesomeIcon icon={faLowVision} color='#BDBDBD' />
                    </Container>

                    <Container center marginT3>
                        <ContenedorButton bgBlue900 textWhite marginB3 radius1 center> Login </ContenedorButton>
                    </Container>

                    <Container marginT4>
                        <Typography marginL5 p3 textGray500 >Lorem, ipsum dolor </Typography>
                    </Container>

                    <Separator bgGray800 width1 marginX4 marginT6 />
                </Container>

                <Container center marginB5>
                    <ContenedorIconos icon={faFacebookF} color='#1565C0' />
                    <ContenedorIconos icon={faGoogle} color='#424242' />
                </Container>

            </Form>

        </Fragment>
    )
}

export default formsLogin02