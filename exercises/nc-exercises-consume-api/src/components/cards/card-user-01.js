
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Components
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Image from 'components/image/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Font Awesome Icon
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const ContenedorPrincipal = styled(GridContainer)`
    width: 550px;
    height: 400px;
    padding: 15px;
`

const ContenedorImage = styled(Image)`
    width: 120px;
    height: 120px;
    border-radius: 50%;
`

const cardUser01 = () => {
    return (
        <Fragment>

            <ContenedorPrincipal radius3>

                <FlexContainer jcSpaceBetween>
                    <GridContainer>
                        <Typography h5 textGray500 marginT4>Lorem, ipsum dolor </Typography>
                    </GridContainer>

                    <FlexContainer marginT4 marginR5>
                        <FontAwesomeIcon icon={faEllipsisH} size='2x' color='#9E9E9E' />
                    </FlexContainer>
                </FlexContainer>

                <GridContainer gridCols3>
                    <FlexContainer>
                        <GridContainer marginR8>
                            <ContenedorImage src='https://bucket-nc-images.s3.amazonaws.com/cards/profile-400px-10.jpg' sizeXL />
                            <Typography bold center p2 textGray800>ipsum</Typography>
                        </GridContainer>

                        <GridContainer marginR8>
                            <ContenedorImage src='https://bucket-nc-images.s3.amazonaws.com/cards/profile-400px-10.jpg' sizeXL />
                            <Typography bold center p2 textGray800>sit</Typography>
                        </GridContainer>

                        <GridContainer marginR8>
                            <ContenedorImage src='https://bucket-nc-images.s3.amazonaws.com/cards/profile-400px-10.jpg' sizeXL />
                            <Typography bold center p2 textGray800>Lorem</Typography>
                        </GridContainer>
                    </FlexContainer>
                </GridContainer>

                <GridContainer gridCols3>
                    <FlexContainer>
                        <GridContainer marginR8>
                            <ContenedorImage src='https://bucket-nc-images.s3.amazonaws.com/cards/profile-400px-10.jpg' sizeXL />
                            <Typography bold center p2 textGray800>ipsum </Typography>
                        </GridContainer>

                        <GridContainer marginR8>
                            <ContenedorImage src='https://bucket-nc-images.s3.amazonaws.com/cards/profile-400px-10.jpg' sizeXL />
                            <Typography bold center p2 textGray800> sit</Typography>
                        </GridContainer>

                        <GridContainer marginR8>
                            <ContenedorImage src='https://bucket-nc-images.s3.amazonaws.com/cards/profile-400px-10.jpg' sizeXL />
                            <Typography bold center p2 textGray800> Lorem </Typography>
                        </GridContainer>
                    </FlexContainer>
                </GridContainer>

            </ContenedorPrincipal>

        </Fragment>

    )
}

export default cardUser01

