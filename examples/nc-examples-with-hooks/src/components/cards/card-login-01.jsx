
import React, { Fragment } from 'react'
import styled from 'styled-components'


// Componentes
import GridContainer from '../grid-container/grid-container'
import Container from '../container/container'
import Typography from '../typography/typography'
import Separator from '../separator/separator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Font Aweson Icon
import { faFacebookF,faGoogle} from '@fortawesome/free-brands-svg-icons'

const Card = styled(GridContainer)`
    background-color: #FFFFFF;
    width: 360px;
    height: 430px;
    border: 1px solid lightgray;
    border-radius: 5px;
`

const ContenedorPrincipal = styled(GridContainer)`
    top: -20px;
    left: 25px;
    width: 310px;
`

const ContenedorTexto = styled(GridContainer)`
    padding: 12px;
`

const ContenedorIconos = styled(FontAwesomeIcon)`
    margin: 12px;
`


const cardLogin01 = () => {
    return (
        <Fragment>

            <Card center>

                <ContenedorPrincipal relative>

                    <GridContainer bgPurple500>
                        <GridContainer>
                            <Typography p2 textWhite bold center marginT5> Lorem </Typography>
                        </GridContainer>

                        <Container center marginY1>
                            <ContenedorIconos icon={faFacebookF} color='#FFFFFF' />
                            <ContenedorIconos icon={faGoogle} color='#FFFFFF' />
                        </Container>

                    </GridContainer>

                </ContenedorPrincipal>

                <ContenedorTexto marginT1>
                    <Typography p3 textGray500 center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat similique quia voluptatem beatae, totam aut necessitatibus, fuga, odio vel ex corrupti provident commodi ratione consectetur distinctio? Qui, numquam illum.
                    Illo corporis, odit fugit, blanditiis vero quidem eius velit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat
                    </Typography>
                </ContenedorTexto>

                <Separator bgGray200 marginX4 />



            </Card>



        </Fragment>
    )
}

export default cardLogin01
