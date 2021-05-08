
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Componentes
import GridContainer from 'components/grid-container/'
import Container from 'components/container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Utils
import { device } from 'components/assets/utils/divice'

// Font Awesome Icon
import { faSquareRootAlt, faChevronLeft, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const Card = styled(GridContainer)`
   width: 100%;
   height: 100%;
   justify-content: center;
   margin: auto;

        //==================== Tablet =====================
        @media ${device.tablet} {
            width: 100%;
        }

        //==================== Mobile =====================
        @media ${device.mobileL} {
            grid-template-columns: 100%;
            width: 100%;
        }
`

const ContenedorFoto = styled(GridContainer)`
    width: 100%;
    height: 500px;
    justify-content: flex-end;

      //==================== Tablet =====================
      @media ${device.tablet} {
            top: 50px;
            left: 0px;
        }
  
    &::before {
    width: 100%;
    height: 500px;
    position: absolute;
    top: 50px;
    left: 345px;
    background-image: url('https://bucket-nc-images.s3.amazonaws.com/cards/card-01-380px+.jpg');
    background-repeat: no-repeat;
    content: "";
    filter: blur(1px) brightness(40%);

         //==================== Tablet =====================
         @media ${device.tablet} {
            top: 50px;
            left: 0px;
        }

        //==================== Mobile =====================
        @media ${device.mobileL} {
            width: 100%;
            left: 2%;
        }
    }
`

const Bloquetext = styled(GridContainer)`
    width: 70%; 
`

const ContenedorButton = styled(Button)`
    width: 30;
    margin-bottom: 8px;
    padding: 5px;
`

const ContenedorTexto = styled(Container)`
    width: 70%;
    margin-top: 50px;

     //==================== Tablet =====================
     @media ${device.tablet} {
            justify-content: flex-start;
            margin-left: 20px;
            width: 80%;
        }


      //==================== Mobile =====================
      @media ${device.mobileL} {
           width: 42%;
           margin-left: 20px;
           margin-top: 25px;
      }
`

const cardProduct01 = () => {
    return (
        <Fragment>

            <Card relative gridCols2 marginY bgRed200>

                <ContenedorFoto bgBlue50>
                    <Bloquetext relative center bgPink500>
                        <Container center>
                            <ContenedorButton bgPink500 textGray100 radius5> Lorem, ipsum </ContenedorButton>
                        </Container>

                        <Container center marginB3>
                            <Typography h5 textGray100> Loremipsum sit</Typography>
                        </Container>

                        <Container>
                            <Typography p3 textGray300 center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, tempora</Typography>
                        </Container>
                    </Bloquetext>
                </ContenedorFoto>

                <ContenedorTexto relative bgYellow50>

                    <FlexContainer marginT3>
                        <Container marginT2 marginR3>
                            <FontAwesomeIcon icon={faSquareRootAlt} color='#EC407A' />
                        </Container>

                        <Container>
                            <Typography h5 textGray800> Lorem </Typography>
                            <Typography p4 textGray400 marginT3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eius est harum? Ad optio est distinctio perferendis esse assumenda rem </Typography>
                        </Container>
                    </FlexContainer>

                    <FlexContainer marginT4>
                        <Container marginT2 marginR3>
                            <FontAwesomeIcon icon={faChevronLeft} color='#AB47BC' />
                        </Container>

                        <Container>
                            <Typography h5 textGray800> Lorem </Typography>
                            <Typography p4 textGray400 marginT3 marginL2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eius est harum? Ad optio est distinctio perferendis esse assumenda rem </Typography>
                        </Container>
                    </FlexContainer>

                    <FlexContainer marginT4>
                        <Container marginT2 marginR3>
                            <FontAwesomeIcon icon={faUserFriends} color='#26C6DA' />
                        </Container>

                        <Container>
                            <Typography h5 textGray800> Lorem </Typography>
                            <Typography p4 textGray400 marginT3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eius est harum? Ad optio est distinctio perferendis esse assumenda rem </Typography>
                        </Container>
                    </FlexContainer>

                </ContenedorTexto>

            </Card>

        </Fragment>
    )
}

export default cardProduct01
