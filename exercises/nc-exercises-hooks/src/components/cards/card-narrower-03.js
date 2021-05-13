
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Componentes
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
    background-color: #fff;
    width: 400px;
    height: 480px;
    border-radius: 5px;
`

const ContenedorTexto = styled(GridContainer)`
    background: linear-gradient( 35deg,#FF80AB, #7C4DFF );
    border-radius: 5px;
    position: relative;
    top: -20px;
    left: 15px;
    width: 368px;
`

const cardNarrower03 = () => {
    return (
        <Fragment>

            <Card>

                <ContenedorTexto shadow>
                    <GridContainer>
                        <Typography h2 textWhite marginT5 marginB4 center> Dolor sit </Typography>
                        <Typography p2 textWhite center> Lorem ipsum dolor </Typography>
                    </GridContainer>

                    <Container center marginB5>
                        <Button circle2 paddingR10 paddingL10 paddingT7 paddingB7 shadowBR1 marginR5 bgPurple100>
                            <FontAwesomeIcon icon={faFacebookF} color='#FFFFFF' />
                        </Button>
                        <Button circle2 paddingR9 paddingL9 paddingT7 paddingB7 shadowBR1 marginR4 bgPurple100>
                            <FontAwesomeIcon icon={faTwitter} color='#FFFFFF' />
                        </Button>
                        <Button circle2 paddingR8 paddingL8 paddingT7 paddingB7 shadowBR1 marginL2 bgPurple100>
                            <FontAwesomeIcon icon={faGooglePlusG} color='#FFFFFF' />
                        </Button>
                    </Container>
                </ContenedorTexto>

                <GridContainer marginX6 >
                    <Typography p3 textGray600 center>
                        Lorem ipsum dolor sit amet consectetur  adipisicing elit. Suscipit repellat similique quia
                        voluptatem beatae, totam aut necessitatibus, fuga, odio vel ex corrupti provident commodi ratione consectetur distinctio? Qui, numquam  voluptatem beatae, totam aut necessitatibus tota aut
                        Lorem ipsum dolor sit amet consectetur  adipisicing elit. Suscipit repellat similique quia
                        voluptatem beatae, totam aut necessitatibus, fuga, odio vel ex corrupti provident commodi ratione consectetur distinctio? Qui, numquam  voluptatem beatae, totam aut necessitatibus tota aut
                    </Typography>
                </GridContainer>

            </Card>

        </Fragment>
    )
}

export default cardNarrower03

