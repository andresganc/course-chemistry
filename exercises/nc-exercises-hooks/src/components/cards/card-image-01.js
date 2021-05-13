
import React, { Fragment } from 'react'
import styled from 'styled-components'

//Componentes
import GridContainer from 'components/grid-container/'
import FlexContainer from 'components/flex-container/'
import Typography from 'components/typography/'
import Button from 'components/buttons/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Font Awesome Icon
import { faChartPie } from '@fortawesome/free-solid-svg-icons'
import { faCropAlt } from '@fortawesome/free-solid-svg-icons'

const Card = styled(GridContainer)`
    position: relative;
    background-repeat: no-repeat;
    width: 600px;
    height: 400px;
    padding: 20px;

    &::before {
        width: 600px;
        height: 400px;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url('https://bucket-nc-images.s3.amazonaws.com/cards/card-626px-03.jpg');
        content: "";
        filter: blur(1px) brightness(40%);
    }
`

const BloqueIcono = styled(FlexContainer)`
    position: relative;   
`

const ContenedorButton = styled(Button)`
    position: relative;
    width: 160px;
    height: 45px;
    padding: 5px;
`

const BloqueButton = styled(FontAwesomeIcon)`
    margin-right: 6px;
`

const cardImage01 = () => {
    return (
        <Fragment>

            <Card>

                <GridContainer>

                    <BloqueIcono jcCenter aiCenter marginT7>
                        <FontAwesomeIcon icon={faChartPie} color='#E91E63'/>
                        <Typography h5 textPink400 relative marginL1> Amet </Typography>
                    </BloqueIcono>

                    <GridContainer relative>
                        <Typography h4 textWhite marginB3 center> Ipsum dolor sit amet </Typography>
                        <Typography p3 textWhite center> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti atque expedita </Typography>
                        <Typography p3 textWhite center> dicta ex accusamus mollitia voluptatem odit, in corporis illum dicta ex </Typography>
                        <Typography p3 textWhite center> accusamus mollitia voluptatem odit, in corporis illum dicta ex accusamus </Typography>
                        <Typography p3 textWhite center> atque expedita dicta ex accusamus mollitia voluptatem odit </Typography>
                    </GridContainer>
                    
                    <FlexContainer jcCenter>
                        <ContenedorButton bgPink400 textWhite marginY4 shadow>
                            <BloqueButton icon={faCropAlt} />
                            ipsum dolor
                        </ContenedorButton>
                    </FlexContainer>

                </GridContainer>

            </Card>

        </Fragment>
    )
}

export default cardImage01
