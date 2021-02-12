
import React, { Fragment } from 'react'

// Componentes

import GridContainer from '../grid-container/grid-container'
import FlexContainer from '../flex-container/flex-container'
import Typography from '../typography/typography'
import Button from '../buttons/button'

//image
import Desarrollo from './assets/img/desarrollador-web.jpg'

//styles
import styles from './assets/css/card-basic-04.module.css'

const CardBasic04 = () => {
    return (
        <Fragment>

            <GridContainer className={styles.gc_contenedor} center>

                <FlexContainer className={styles.gc_contenedor_img}>
                    <img className={styles.gc_contenedor_bq_img} src={Desarrollo} alt=""/>
                </FlexContainer>

                <GridContainer className={styles.gc_contenedor_text}>
                    <Typography className={styles.gc_contenedor_tg} h3 textBlack bold center> ipsum dolor</Typography>
                    <Typography className={styles.gc_contenedor_st} h4 textGray800 center>amet consectetur </Typography>
                </GridContainer>

                <GridContainer className={styles.gridc_bloque_text}>
                    <Typography className={styles.gridc_bloque_tipog} p3 textGray500 center>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat similique quia voluptatem</Typography>
                </GridContainer>

                <GridContainer className={styles.gridc_bloque}>
                    <FlexContainer className={styles.gridc_bloque_button} jcCenter>
                        <Button circle className={styles.gridc_bloque_cbu} bgIndigo900 textWhite> F </Button>
                        <Button circle className={styles.gridc_bloque_cbu} bgBlue300 textWhite> F </Button>
                        <Button circle className={styles.gridc_bloque_cbu} bgPink300 textWhite> F </Button>
                    </FlexContainer>
                </GridContainer>

            </GridContainer>

        </Fragment>
    )
}

export default CardBasic04

