
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Components
import GridContainer from 'components/grid-container/'
import Container from 'components/container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Image from 'components/image/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Font Awesome Icon
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const ContenedorPrincipal = styled(GridContainer)`
    padding: 15px;
    width: 320px;
    height: 800px;
`

const ContenedorImage = styled(Image)`
    width: 130px;
    height: 130px;
    border-radius: 50%;
`

const cardUser02 = () => {
    return (
        <Fragment>

            <GridContainer>

                <ContenedorPrincipal marginT4 radius2>

                    <FlexContainer jcSpaceBetween aiCenter>
                        <GridContainer>
                            <Typography h5 textGray500>Lorem, ipsum dolor</Typography>
                        </GridContainer>

                        <FlexContainer marginR5 aiCenter>
                            <FontAwesomeIcon icon={faEllipsisH} size='2x' color='#9E9E9E' />
                        </FlexContainer>
                    </FlexContainer>

                    <GridContainer>

                        <GridContainer marginT5 gridCols2 center>
                            <GridContainer>
                                <ContenedorImage src='https://bucket-nc-images.s3.amazonaws.com/cards/profile-400px-10.jpg' sizeXL />
                            </GridContainer>

                            <FlexContainer aiCenter>
                                <Container>
                                    <Typography h5 textGray800>ipsum</Typography>
                                    <Typography p3 textGray400>Lorem ipsum </Typography>
                                </Container>
                            </FlexContainer>
                        </GridContainer>

                        <GridContainer marginT5 gridCols2 center>
                            <GridContainer>
                                <ContenedorImage src='https://bucket-nc-images.s3.amazonaws.com/cards/profile-400px-10.jpg' sizeXL />
                            </GridContainer>

                            <FlexContainer aiCenter>
                                <Container>
                                    <Typography h5 textGray800>ipsum</Typography>
                                    <Typography p3 textGray400>Lorem ipsum </Typography>
                                </Container>
                            </FlexContainer>
                        </GridContainer>

                        <GridContainer marginT5 gridCols2 center>
                            <GridContainer>
                                <ContenedorImage src='https://bucket-nc-images.s3.amazonaws.com/cards/profile-400px-10.jpg' sizeXL />
                            </GridContainer>

                            <FlexContainer aiCenter>
                                <Container>
                                    <Typography h5 textGray800>ipsum</Typography>
                                    <Typography p3 textGray400>Lorem ipsum </Typography>
                                </Container>
                            </FlexContainer>
                        </GridContainer>

                        <GridContainer marginT5 gridCols2 center>
                            <GridContainer>
                                <ContenedorImage src='https://bucket-nc-images.s3.amazonaws.com/cards/profile-400px-10.jpg' sizeXL />
                            </GridContainer>

                            <FlexContainer aiCenter>
                                <Container>
                                    <Typography h5 textGray800>ipsum</Typography>
                                    <Typography p3 textGray400>Lorem ipsum </Typography>
                                </Container>
                            </FlexContainer>
                        </GridContainer>

                    </GridContainer>

                </ContenedorPrincipal>

            </GridContainer>

        </Fragment>
    )
}

export default cardUser02
