
import React, { Fragment } from 'react'
import styled from 'styled-components'

// Componentes
import GridContainer from 'components/grid-container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import Container from 'components/container/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Font awesome Icon 
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'


const Card = styled(GridContainer)`
    background-color: #FFFFFF ;
    width: 302px;
    height: 320px;
    border-radius: 5px;
`

const ContenedorPrincipal = styled(GridContainer)`
    position: relative;
    top: -20px;
    left: 12px;
    width: 278px;
    background: linear-gradient( 90deg,#FF80AB, #B388FF );
    border-radius: 3px;
`

const ContenedorTipo = styled(GridContainer)`
    padding: 8px;
`

const cardBasic03 = () => {
    return (
        <Fragment>

            <Card>

                <ContenedorPrincipal>
                    <GridContainer>
                        <Typography h4 textWhite marginY3 center> Dolor sit </Typography>
                        <Typography p4 textWhite center> Lorem ipsum dolor </Typography>
                    </GridContainer>

                    <Container center marginB5>
                        <Button circle2 paddingR7 paddingL7 paddingT4 paddingB4 shadowBR1 marginR5 bgPurple100>
                            <FontAwesomeIcon icon={faFacebookF} color='#FFFFFF' />
                        </Button>
                        <Button circle2 paddingR6 paddingL6 paddingT4 paddingB4 shadowBR1 marginR4 bgPurple100>
                            <FontAwesomeIcon icon={faTwitter} color='#FFFFFF' />
                        </Button>
                        <Button circle2 paddingR5 paddingL5 paddingT4 paddingB4 shadowBR1 marginL2 bgPurple100>
                            <FontAwesomeIcon icon={faGooglePlusG} color='#FFFFFF' />
                        </Button>
                    </Container>
                </ContenedorPrincipal>

                <ContenedorTipo>
                    <Typography p3 textGray500 mrginB5 center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat similique quia voluptatem beatae, totam aut necessitatibus, fuga, odio vel ex corrupti provident commodi ratione consectetur distinctio? Qui, numquam illum.
                        Illo corporis, odit fugit, blanditiis vero quidem eius velit
                    </Typography>
                </ContenedorTipo>

            </Card>

        </Fragment>
    )
}

export default cardBasic03