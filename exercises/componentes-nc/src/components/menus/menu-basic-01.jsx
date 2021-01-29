
import react, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

// NC Components
import FlexContainer from '../flex-container/flex-container'
import Typography from '../typography/typography'
import Button from  '../buttons/button'

// Fonts
import roboto from '../assets/fonts/fonts'


// Styles
import './assets/css/menus.css'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'

// Icons
import Bar from './assets/img/bars-solid.svg'
import Close from './assets/img/times-solid.svg' 

import Bar2 from './assets/img/home.png'


const MenuBasic01 = () => {

    const [ isMobile, setIsMobile ] = useState(false);

    return(
        <Fragment>
            <FlexContainer className="nav" jcSpaceBetween bgBlue700>
                <ul className="nav__logo">
                    <Typography h4 textWhite bold> LOGO </Typography>
                </ul>

                <ul className={isMobile? "nav__menu-mobile" : "nav__menu"} onClick={() => setIsMobile(false)}>
                    <Link className="nav__link"> <li className="nav__li"><Typography textWhite> Inicio </Typography> </li> </Link>
                    <Link className="nav__link"> <li className="nav__li"><Typography textWhite> Acerca de </Typography> </li> </Link>
                    <Link className="nav__link"> <li className="nav__li"><Typography textWhite> Servicios </Typography> </li> </Link>
                    <Link className="nav__link"> <li className="nav__li"><Typography textWhite> Section </Typography> </li> </Link>
                    <Link className="nav__link"> <li className="nav__li"><Typography textWhite> Contactenos </Typography> </li> </Link>  
                </ul>

                <Button className="nav__btn" onClick={() => setIsMobile(!isMobile)} default bgPink500>
                    { isMobile ? (
                        <img className="nav__btn-img-close" src={Close} alt=""/>
                    ) : (
                        <img className="nav__btn-img-bar" src={Bar} alt=""/>
                    )}
                </Button> 
               
                 
            </FlexContainer>
        </Fragment>
    );
}

export default MenuBasic01