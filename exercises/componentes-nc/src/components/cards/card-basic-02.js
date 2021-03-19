
import React, { Fragment } from 'react'

// Componentes
import GridContainer from '../grid-container/grid-container'
import FlexContainer from '../flex-container/flex-container'
import Typography from '../typography/typography'
import Button from '../buttons/button'

// Imagen
import Esfera from './assets/img/esfera.png'

// Styles 
import styles from './assets/css/card-basic-02.module.css'


const cardBasic02 = () => {
    return (
        <Fragment>
            <GridContainer className={styles.gridcontainer_contenedor}>
                <FlexContainer className={styles.flexcontainer_img_contenedor}>
                    <img className={styles.flexcontainer_img} src={Esfera} alt=""/>
                </FlexContainer>
                
                <GridContainer className={styles.flexcontainer_contenedor}>
                    <Typography h4 textBlack bold center> Dolor sit </Typography>
                    <Typography p3 textBlack center> Lorem ipsum dolor sit amet consectetur adipisicing elit Consequatur, facilis quibusdam accusamus cum magnam amet </Typography>
                </GridContainer>

                <FlexContainer className={styles.flexContainer_button}>
                   <Button bgPink400 textWhite >ipsum dolor</Button>
                </FlexContainer>

            </GridContainer>
           
        </Fragment>
    )
}

export default cardBasic02