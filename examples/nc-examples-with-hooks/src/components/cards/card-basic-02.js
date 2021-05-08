
import React, { Fragment } from 'react'
import styled from 'styled-components'

// Componentes
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Icons Font Awesome
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'

const Card = styled(GridContainer)`
    background-color: #ffff;
    padding: 20px;
    width: 300px;
    height: 350px;
`

const ContenedorImage = styled(FlexContainer)`
    margin: auto;
`

const ContenedorButton = styled(FlexContainer)`
    margin: auto;
    justify-content: center;
`

const cardBasic02 = () => {
    return (
        <Fragment>

            <Card marginX3 marginY3>

                <ContenedorImage jcCenter>
                    <FontAwesomeIcon icon={faGlobeEurope} size='4x' color='#424242' />
                </ContenedorImage>

                <GridContainer>
                    <Typography h4 textGray700 bold center> Dolor sit </Typography>
                    <Typography p3 textGray500 center> Lorem ipsum dolor sit amet consectetur adipisicing elit Consequatur, facilis quibusdam accusamus cum magnam amet </Typography>
                </GridContainer>

                <ContenedorButton>
                    <Button bgPink400 textWhite >ipsum dolo</Button>
                </ContenedorButton>

            </Card>

        </Fragment>
    )
}

export default cardBasic02