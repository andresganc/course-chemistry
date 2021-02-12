
import React, { Fragment } from 'react'

//Componentes 
import GridContainer from '../grid-container/grid-container'
import FlexContainer from '../flex-container/flex-container'
import Typography from '../typography/typography'
import Button from '../buttons/button'

//img
import Computador from './assets/img/computador.png'

// Styles
import styles from './assets/css/card-basic-05.module.css'

const CardBasic05 = () => {
    return (
        <Fragment>
                <GridContainer>

                    <GridContainer className={styles.gridc_contenedor} center>
                    <FlexContainer className={styles.gric_contenedor_bimg} center>
                            <img src={Computador} alt=""/>
                    </FlexContainer>
                    </GridContainer>


                    <FlexContainer className={styles.gridc_contenedor_tx}>
                        <Typography className={styles.gridc_contenedor_tg} center h4 textBlack bold>Ipsum dolor</Typography>
                    </FlexContainer>

                </GridContainer>
        </Fragment>
    )
}

export default CardBasic05
