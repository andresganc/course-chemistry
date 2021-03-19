
import React, { Fragment } from 'react'

// NC Components
import FlexContainer from '../flex-container/flex-container'
import Typography from '../typography/typography'
import Button from '../buttons/button'

// Imagen
import Times from './assets/img/shop-01.png'

// Styles
import styles from './assets/css/card-basic-01.module.css'

const cardBasic01 = () => {
    return (
        <Fragment>
            <div className={styles.div_container}>
                <div className={styles.div_image}>
                    <img className={styles.image} src={Times} alt=""/>
                </div>

                <div className={styles.div_texto}>
                    <Typography h4 textBlue500 bold center> Lorem, ipsum dolor. </Typography>
                    <Typography h5 textPink700 center> Lorem, ipsum dolor. </Typography>
                    <Typography p3 center> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae modi, laborum totam aliquam excepturi saepe? </Typography>
                </div>

                <div className={styles.div_button}>
                    <Button bgBlue500 textWhite> Lorem, ipsum. </Button>
                </div>
                
            </div>
        </Fragment>
    )
}

export default cardBasic01
