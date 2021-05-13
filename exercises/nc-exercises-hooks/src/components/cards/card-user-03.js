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
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'


const ContenedorPrincipal = styled(GridContainer)`
    background: linear-gradient( 90deg,#3F51B5, #7E57C2);
    padding: 15px;
    width: 350px;
    height: 250px;
`

const cardUser03 = () => {
    return (
        <Fragment>

            <GridContainer>

                <ContenedorPrincipal radius2>

                    <FlexContainer jcSpaceBetween marginT3>
                        <FlexContainer>
                            <Image src='https://bucket-nc-images.s3.amazonaws.com/cards/profile-400px-10.jpg' circle sizeM />
                            <Typography marginT3 p3 textWhite>Lorem ipsum dolor sit amet</Typography>
                        </FlexContainer>

                        <FlexContainer marginT3 marginR5>
                            <FontAwesomeIcon icon={faEllipsisH} size='' color='#FFFFFF' />
                        </FlexContainer>
                    </FlexContainer>

                    <GridContainer>
                        <Typography textWhite p3>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex ea est molestias repellat harum rem
                        </Typography>
                    </GridContainer>

                    <GridContainer gridCols2>
                        <FlexContainer>
                            <Container marginT2>
                                <FontAwesomeIcon icon={faThumbsUp} color='#FFFFFF' />
                            </Container>
                            <Typography marginT2 marginL2 p4 textWhite>Lorem ipsum</Typography>
                        </FlexContainer>

                        <FlexContainer>
                            <Container marginT2>
                                <FontAwesomeIcon icon={faCommentDots} color='#FFFFFF' />
                            </Container>
                            <Typography marginT2 marginL2 p4 textWhite>Lorem ipsum</Typography>
                        </FlexContainer>
                    </GridContainer>

                </ContenedorPrincipal>

            </GridContainer>

        </Fragment>
    )
}

export default cardUser03
