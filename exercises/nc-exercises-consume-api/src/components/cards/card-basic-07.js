
import React, { Fragment } from 'react'
import styled from 'styled-components'

// Componentes
import GridContainer from 'components/grid-container/'
import Container from 'components/container/'
import Typography from 'components/typography/'
import Separator from 'components/separator/'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 
// Font Aweson Icon
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faInvision } from '@fortawesome/free-brands-svg-icons'
import {faFacebookF } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope  } from '@fortawesome/free-solid-svg-icons'

const Card = styled(GridContainer)`
    background-color: #FFFFFF;
    width: 360px;
    height: 430px;
    border: 1px solid lightgray;
    border-radius: 5px;
`

const ContenedorPrincipal = styled(GridContainer)`
    width: 360px;
    height: 150px;
    background: linear-gradient( 90deg, #42A5F5, #0D47A1);
    border-radius: 5px;
`

const ContenedorTexto = styled(GridContainer)`
    padding: 12px;
`

const ContenedorIconos = styled(FontAwesomeIcon)`
    margin: 12px;
`

const cardBasic07 = () => {
    return (
        <Fragment>

            <Card>

                <ContenedorPrincipal>
                    <GridContainer>
                        <Typography h2 textWhite marginT5 center> Dolor sit </Typography>
                        <Typography p2 textWhite center> Lorem ipsum dolor </Typography>
                    </GridContainer>
                </ContenedorPrincipal>

                <ContenedorTexto marginT1>
                    <Typography p3 textGray500 center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat similique quia voluptatem beatae, totam aut necessitatibus, fuga, odio vel ex corrupti provident commodi ratione consectetur distinctio? Qui, numquam illum.
                        Illo corporis, odit fugit, blanditiis vero quidem eius velit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat
                    </Typography>
                </ContenedorTexto>

                <Separator bgGray200 marginX4 />

                <GridContainer>
                    <Container center marginY2>
                        <ContenedorIconos icon={faTwitter} color='#64B5F6'/>
                        <ContenedorIconos  icon={faInvision } color='#2196F3'/>
                        <ContenedorIconos  icon={faFacebookF } color='#1565C0'/>
                        <ContenedorIconos  icon={faEnvelope} color='#424242' />
                    </Container>
                </GridContainer>

            </Card>



        </Fragment>
    )
}

export default cardBasic07
