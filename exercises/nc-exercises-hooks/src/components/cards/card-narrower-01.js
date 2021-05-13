
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Componentes
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import Image from 'components/image/'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// Font Awesome Icon
import {faUtensils} from '@fortawesome/free-solid-svg-icons'

const ContenedorPrincipal = styled(GridContainer)`
    width: 390px;
    height: 500px;
    border-radius: 5px;
`

const ContenedorImage = styled(FlexContainer)`
    position: relative;
    top: -20px;
    left: 40px;
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

const CardNarrower01 = () => {
    return (
        <Fragment>

            <GridContainer>

                <ContenedorPrincipal bgGray50>

                    <ContenedorImage>
                        <BloqueImage src='https://bucket-nc-images.s3.amazonaws.com/cards/card-626px-04.jpg' alt="" />
                    </ContenedorImage>

                    <ContenedorTexto marginL4>
                        <BloqueTypography h5 textPink400><FontAwesomeIcon icon={faUtensils} alt=""/> sit amet</BloqueTypography>
                        <Typography h3 textGray800 bold marginB2>Consectetur</Typography>
                        <Typography p3 textGray500 marginB2>Lorem ipsum dolor sit amet consectetur adipisicing </Typography>
                        <Typography p3 textGray500 marginB2>Lorem ipsum dolor sit amet consectetur adipisicing </Typography>
                        <Typography p3 textGray500 marginB2>Lorem ipsum dolor sit amet consectetur adipisicing </Typography>
                    </ContenedorTexto>

                    <ContenedorButton marginL4>
                        <BloqueButton bgPink900 textWhite> Lorem </BloqueButton>
                    </ContenedorButton>

                </ContenedorPrincipal>

            </GridContainer>

        </Fragment>
    )
}

export default CardNarrower01
