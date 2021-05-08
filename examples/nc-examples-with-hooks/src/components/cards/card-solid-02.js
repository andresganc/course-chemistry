
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Componentes
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Image from 'components/image/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Font Awesome Icon
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'

const Card = styled(GridContainer)`
    background-color:#00BCD4;
    width: 400px;
    height: 220px;
    padding: 25px;  
`

const ContenedorTexto = styled(Typography)`
    opacity: 0.8;
`

const ContenedorImage = styled(Image)`
    border-radius: 50%;
    width: 40px;
    height: 40px;
`

const cardSolid02 = () => {
    return (
        <Fragment>

            <Card radius2>

                <GridContainer>

                    <FlexContainer aiCenter marginT2>
                        <FontAwesomeIcon icon={faTwitter} color='#84FFFF' />
                        <ContenedorTexto h5 textGray50 marginL2 normal> Amet </ContenedorTexto>
                    </FlexContainer>

                    <GridContainer>
                        <Typography h5 textWhite marginB3 marginT2> "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere ducimus mollitia sed" </Typography>
                    </GridContainer>

                    <GridContainer gridCols2>
                        <FlexContainer jcFlexStart aiCenter>
                            <ContenedorImage src='https://bucket-nc-images.s3.amazonaws.com/cards/profile-400px-12.jpg' sizeXS />
                            <ContenedorTexto p3 textGray50 marginL1 normal> Amet </ContenedorTexto>
                        </FlexContainer>

                        <FlexContainer jcFlexEnd aiCenter>
                            <FlexContainer>
                                <FontAwesomeIcon icon={faHeart} color='#84FFFF' />
                                <ContenedorTexto p3 textGray50 normal> Amet </ContenedorTexto>
                            </FlexContainer>

                            <FlexContainer marginL2 aiCenter>
                                <FontAwesomeIcon icon={faShareAlt} color='#84FFFF' />
                                <ContenedorTexto p3 textGray50 normal> Amet </ContenedorTexto>
                            </FlexContainer>
                        </FlexContainer>
                    </GridContainer>

                </GridContainer>

            </Card>

        </Fragment >
    )
}

export default cardSolid02
