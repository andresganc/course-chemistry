
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Componentes
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import Separator from 'components/separator/'
import Image from 'components/image/'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// Font Awesome Icon
import {faUtensils} from '@fortawesome/free-solid-svg-icons'


const ContenedorPrincipal = styled(GridContainer)`
    background-color: #fff;
    width: 395px;
    height: 500px;
    border-radius: 5px;
`

const ContenedorImage = styled(FlexContainer)`
    position: relative;
    top: -20px;
    left: 45px;
    width: 80%;
`

const BloqueImage = styled(Image)`
    width: 100%;
    border-radius: 5px;
`

const ContenedorTexto = styled(GridContainer)`
      padding: 15px;
`

const BloqueTypography = styled(Typography)`
    font-weight: 3;
`

const ContenedorButton = styled(FlexContainer)`
    padding: 15px;
`

const BloqueButton = styled(Button)`
    width: 110px;
    height: 45px;
`
const ContenedorFooter = styled(GridContainer)`
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 395px;
    height: 65px;
`

const BloqueFooter = styled(Typography)`
    padding: 15px;
`

const cardNarrower02 = () => {
    return (
        <Fragment>

            <GridContainer>

                <GridContainer marginB6>
                    <Typography h4 textGray700 bold> Consectetur </Typography>
                </GridContainer>

                <ContenedorPrincipal>

                    <ContenedorImage>
                        <BloqueImage src='https://bucket-nc-images.s3.amazonaws.com/cards/card-626px-04.jpg' />
                    </ContenedorImage>

                    <ContenedorTexto>
                        <BloqueTypography h5 textPink400 ><FontAwesomeIcon icon={faUtensils} alt=""/>  sit amet</BloqueTypography>
                        <Typography h4 textGray700 bold marginB2>Consectetur</Typography>
                        <Typography p3 textGray500>Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>
                        <Typography p3 textGray500>Lorem ipsum dolor sit amet consectetur adipisicing </Typography>
                        <Typography p3 textGray500>Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>
                    </ContenedorTexto>

                    <ContenedorButton marginB3>
                        <BloqueButton bgPink900 textWhite> Lorem </BloqueButton>
                    </ContenedorButton>

                    <Separator bgGray300 />

                    <ContenedorFooter bgGray100 textGray500 center>
                        <BloqueFooter marginT2> 2 days ago </BloqueFooter>
                    </ContenedorFooter>

                </ContenedorPrincipal>

            </GridContainer>

        </Fragment>
    )
}

export default cardNarrower02
