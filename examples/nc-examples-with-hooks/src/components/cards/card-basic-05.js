import React, { Fragment } from 'react'
import styled from 'styled-components'

// Componentes
import GridContainer from '../grid-container/grid-container'
import FlexContainer from '../flex-container/flex-container'
import Typography from '../typography/typography'
import Button from '../buttons/button'



const Card = styled(GridContainer)`
    background-color: #fff;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    width: 300px;
    height: 350px;
`

const ContenedorImage = styled(GridContainer)`
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    width: 300px;
    height: 200px;
    background: linear-gradient( 150deg, #9575CD,#B3E5FC ,#E1BEE7);
`

const BloqueImage = styled(FlexContainer)`
    width: 100px;
    height: 100px;
`

const ContenedorTexto = styled(GridContainer)`
    background-color: #fff;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    width: 300px;
    height: 190px;
    padding: 15px;
`

const cardBasic05 = () => {
    return (
        <Fragment>
            <Card>
                <ContenedorImage center>
                    <BloqueImage marginT6>
                        <img src="https://bucket-nc-images.s3.amazonaws.com/cards/computador-640px.png" alt="" />
                    </BloqueImage>
                </ContenedorImage>

                <ContenedorTexto>

                    <GridContainer>
                        <Typography h4 textGray700 bold >sit amet</Typography>
                        <Typography p3 marginY4 textGray500>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat similique quia</Typography>
                    </GridContainer>


                    <GridContainer>
                        <FlexContainer marginY3>
                            <Button bgLightBlueA700 textWhite shadow >ipsum dolor</Button>
                        </FlexContainer>
                    </GridContainer>

                </ContenedorTexto>

            </Card>

        </Fragment>
    )
}

export default cardBasic05