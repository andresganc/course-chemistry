import React, { Fragment } from 'react'
import styled from 'styled-components'

// Components
import GridContainer from '../grid-container/grid-container'
import FlexContainer from '../flex-container/flex-container'
import Typography from '../typography/typography'
import Image from '../image/image'

// Image
import Marc from '../assets/img/marc.jpg'
import Punto from '../assets/img/ellipsis.svg'
import Thumbs from '../assets/img/thumbs.svg'
import Comment from '../assets/img/comment.svg'


const ContenedorPrincipal = styled(GridContainer)`
    background: linear-gradient( 90deg,#3F51B5, #7E57C2);
    padding: 15px;
    width: 350px;
    height: 250px;
`


const cardUser04 = () => {
    return (
        <Fragment>

            <GridContainer center>

                <ContenedorPrincipal radius2>

                    <FlexContainer jcSpaceBetween marginT3>

                        <FlexContainer>
                            <Image src={Marc} circle sizeM />
                            <Typography marginT3 p3 textWhite>Lorem ipsum dolor sit amet</Typography>
                        </FlexContainer>

                        <FlexContainer marginT2 marginR5>
                            <Image src={Punto} alt="" sizeS/>
                        </FlexContainer>

                    </FlexContainer>

                </ContenedorPrincipal>

            </GridContainer>

        </Fragment>
    )
}

export default cardUser04
