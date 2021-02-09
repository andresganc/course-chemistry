
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

// NC Components
import FlexContainer from '../flex-container/flex-container'
import Typography from '../typography/typography'

// Fonts
import roboto from '../assets/fonts/fonts'

// Colors
import {
    red as red,
    pink,
    purple,
    deepPurple,
    indigo,
    blue,
    lightBlue,
    cyan,
    teal,
    green,
    lightGreen,
    lime,
    yellow,
    amber,
    orange,
    deepOrange,
    brown,
    gray,
    blueGray,
    black,
    white,
    darkText,
    lightText,
    darkIcons,
    lightIcons
} from '../assets/colors/colors-system'

// Icons
import Bar from './assets/img/bars-solid.svg'
import Close from './assets/img/times-solid.svg'

// Utils
import { device } from '../assets/utils/divice'



// ======================= STYLES =======================

const ButtonDefaultStyles = css `
font-size: .9rem;
padding: .5rem 1.5rem;
border: none;
border-radius: .2rem;
cursor: pointer;
outline: none;
transition: .2s;


    &:hover {
        background-color: ${ blue[400] };
        //background-color: rgba(255, 255, 255, .1)
    }
`


const Menu = styled(FlexContainer) `

    /* =============== DESKTOP =============== */
    @media ${device.desktop} {

        align-items: center;
        flex-flow: row wrap;
        padding: 1rem 1rem;

        .nav__logo {
        display: flex;
        margin-left: 1rem;
        }

        .nav__menu {
        display: flex;
        margin-right: 1rem;

            .nav__menu_link {
                text-decoration: none;
                list-style: none;
            }
            
            .nav__menu_li {
                list-style: none;
                margin: 0 .5rem;
                padding: .5rem .5rem;
                border-radius: .3rem;
                &:hover {
                    background-color: #1E88E5;
                    transition: .3s;
                }
            }
        }


        .nav__btn {
        ${ButtonDefaultStyles}
        background-color: ${pink[500]};
        display: none;

            .nav__btn_img_bar {
                width: 12px;
            }

            .nav__btn_img_close {
                width: 12px;
            }
        }
    }
    /* =============== DESKTOP =============== */
    

    /* =============== TABLET =============== */
    @media ${device.tablet} {

    padding: .8rem .8rem;

        .nav__menu {
            margin-right: .5rem;

            .nav__menu_li {
                margin: 0 .3rem;
                padding: .5rem .3rem;
            }
        }
    }
    /* =============== TABLET =============== */


    /* =============== MOBILE =============== */
    @media ${device.mobileL} {

        .nav__menu {
        display: none;
        }

        .nav__menu_mobile {
            position: absolute;
            display: block;
            list-style: none;
            left: 0;
            top: 59px;
            width: 100vw;
            background-color: #9E9E9E;
            padding: 1rem;
            margin: 0;

            .nav__menu_link {
                text-decoration: none
            }

            .nav__menu_li {
                list-style: none;
                text-decoration: none !important;
                padding: .5rem .5rem;
                border-radius: .3rem;
                &:hover {
                    background-color: #1E88E5;
                    transition: .3s;
                }
            }  
        }

        .nav__btn {
            display: inline-flex;
        }
    }
    /* =============== MOBILE =============== */

`
// ======================= STYLES =======================



const MenuBasic01 = () => {

    const [ isMobile, setIsMobile ] = useState(false);

    return(
        <Fragment>
            <Menu  jcSpaceBetween bgBlue700>

                <ul className="nav__logo">
                    <Typography h4 textWhite bold> LOGO </Typography>
                </ul>

                <ul className={isMobile? "nav__menu_mobile" : "nav__menu"} onClick={() => setIsMobile(false)}>
                    <Link href="#" className="nav__menu_link"><li className="nav__menu_li"><Typography textWhite> Inicio </Typography> </li></Link>
                    <Link href="#" className="nav__menu_link"><li className="nav__menu_li"><Typography textWhite> Acerca de </Typography> </li></Link>
                    <Link href="#" className="nav__menu_link"><li className="nav__menu_li"><Typography textWhite> Servicios </Typography> </li></Link>
                    <Link href="#" className="nav__menu_link"><li className="nav__menu_li"><Typography textWhite> Section </Typography> </li></Link>
                    <Link href="#" className="nav__menu_link"><li className="nav__menu_li"><Typography textWhite> Contactenos </Typography> </li></Link>  
                </ul>

                <button className="nav__btn" onClick={() => setIsMobile(!isMobile)}>
                    { isMobile ? (
                        <img className="nav__btn_img_close" src={Close} alt=""/>
                    ) : (
                        <img className="nav__btn_img_bar" src={Bar} alt=""/>
                    )}
                </button> 
               
                 
            </Menu>
        </Fragment>
    );
}

export default MenuBasic01