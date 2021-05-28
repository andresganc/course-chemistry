
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Componentes
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

//Font Awesome Icon
import {faNewspaper} from '@fortawesome/free-solid-svg-icons'

const Card = styled(GridContainer)`
    background-color:#EF5350;
    border-radius: 5px;
    width: 450px;
    height: 350px;
`

const ContenedorTexto = styled(Typography)`
    opacity: 0.8;
`

const ContenedorButton = styled(Button)`
    border-radius: 25px;
    width: 160px;
    height: 45px;
`

const cardSolid01 = () => {
    return (
        <Fragment>

            <Card>

                <GridContainer>

                    <FlexContainer aiCenter marginT2>
                        <FontAwesomeIcon icon={faNewspaper} color='#E0E0E0' />
                        <ContenedorTexto h5 textGray50 marginL2 normal> Amet </ContenedorTexto>
                    </FlexContainer>

                    <GridContainer>
                        <Typography h4 textWhite marginB1> "Ipsum dolor sit amet" </Typography>
                        <ContenedorTexto p2 textGray50> Lorem ipsum dolor sit amet consectetur adipisicing elit </ContenedorTexto>
                        <ContenedorTexto p2 textGray50> dicta ex accusamus mollitia voluptatem odit, in corporis  </ContenedorTexto>
                        <ContenedorTexto p2 textGray50> accusamus mollitia voluptatem odit, in corporis illum  </ContenedorTexto>
                        <ContenedorTexto p2 textGray50> atque expedita dicta ex accusamus mollitia </ContenedorTexto>
                    </GridContainer>

                    <FlexContainer jcCenter>
                        <ContenedorButton bgWhite marginY4>
                            <Typography p1 textGray600> ipsum dolor</Typography>
                        </ContenedorButton>
                    </FlexContainer>

                </GridContainer>

            </Card>

        </Fragment>
    )
}

export default cardSolid01
