
import React, { Fragment } from 'react'
import styled from 'styled-components'

// Componentes
import GridContainer from '../grid-container/grid-container'
import Typography from '../typography/typography'
import CardPricing05 from '../cards/card-pricing-05'
import CardPricing06 from '../cards/card-pricing-06'
import CardPricing07 from '../cards/card-pricing-07'
import CardPricing08 from '../cards/card-pricing-08'

// Utils
import { device } from '../assets/utils/divice'

//Image
import Portada from '../assets/img/portada-2.jpg'


const Card = styled(GridContainer)`
    
    width:100%;
    height:100%;

    &::before  {
        width:100%;
        height:100%;
        position: absolute;
        top: 0;
        left: 0;
        //background-image: url(${Portada});
        background-image: url('https://bucket-nc-images.s3.amazonaws.com/bg/bg-2000px-02.jpg');
        background-repeat: round;
        content: "";
        filter:  brightness(40%);
    }

`
const SectionText = styled(GridContainer)`

    
        //==================== Tablet =====================
        @media ${device.tablet} {
           margin: 0 40px;
           margin-bottom: 20px;
        }

        //==================== Mobile =====================
        @media ${device.mobileL}    {
             margin: 0 30px;
             margin-bottom: 10px;  
        }
`

const SectionCards = styled(GridContainer)`
    //==================== Desktop =====================
            grid-template-columns: repeat(4, auto);
            column-gap: 20px;
            margin-top: 60px;
            margin-bottom: 60px;
            

        //==================== Tablet =====================
        @media ${device.tablet} {
            grid-template-columns: repeat(2, auto);
            gap: 20px;
            margin-top: 50px;
        }

    //==================== Mobile =====================
    @media ${device.mobileL}    {
            grid-template-columns: 100%;
            margin-top: 20px;
        }
`


const sectionPricing01 = () => {
    return (
        <Fragment>

            <Card>

                <SectionText relative>
                    <Typography center textWhite h4 marginT10 marginB5> Lorem ipsum dolor sit amet </Typography>
                    <Typography center textWhite p2> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi reiciendis, ratione laudantium adipisci fuga beatae placeat tempora nulla</Typography>
                </SectionText>

                <SectionCards relative center>
                    <CardPricing05 />
                    <CardPricing06 />
                    <CardPricing07 />
                    <CardPricing08 />
                </SectionCards>

            </Card>

        </Fragment>
    )
}


export default sectionPricing01


