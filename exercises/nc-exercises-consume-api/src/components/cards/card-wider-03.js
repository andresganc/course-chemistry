
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Componentes
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Font Aweson Icon
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const Card = styled(GridContainer)`
    background-color: #FFFFFF;
    width: 400px;
    height: 500px;
    border-radius: 5px;
`

const ContenedorTexto = styled(GridContainer)`
    background: linear-gradient( 35deg,#FFD180,#FF7043 );
    border-radius: 5px;
    position: relative;
    top: -20px;
    left: -2px;
    width: 450px;
`

const BloqueTexto = styled(Typography)`
    font-weight: 1;
`

const cardWider03 = () => {
    return (
        <Fragment>

            <GridContainer>

                <Card center>
                    <ContenedorTexto shadow>
                        <GridContainer marginB4>
                            <Typography h2 textWhite marginT6 center> Dolor sit </Typography>
                            <Typography p2 textWhite marginB3 center> <FontAwesomeIcon icon={faCalendar} /> Lorem ipsum dolor </Typography>
                        </GridContainer>
                    </ContenedorTexto>

                    <GridContainer>
                        <Typography p3 textGray500 marginT2 marginX8 center>
                            Lorem ipsum dolor sit amet consectetur  adipisicing elit. Suscipit repellat similique quia
                            voluptatem beatae, totam aut necessitatibus, fuga, odio vel ex corrupti provident commodi ratione consectetur distinctio? Qui, numquam  voluptatem beatae, totam aut necessitatibus tota aut
                            sit amet consectetur  adipisicing elit. Suscipit repellat similique quiavoluptatem beatae, totam aut necessitatibus, fuga, odio vel ex corrupti provident commodi ratione consectetur distinctio Qui, numquam  voluptatem beatae aut necessitatibus tota aut
                        </Typography>
                    </GridContainer>

                    <FlexContainer marginR8 marginB2 jcFlexEnd>
                        <BloqueTexto h5 textOrange500> Lorem ipsum - - </BloqueTexto>
                    </FlexContainer>
                </Card>

            </GridContainer>

        </Fragment>
    )
}

export default cardWider03

