
import React, { Fragment, useState } from 'react'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Link React
import { Link } from 'react-router-dom'
// Link Next
//import Link from 'next/link'


// NC Components
import FlexContainer from 'components/flex-container'
import Image from 'components/image'
import Input from 'components/inputs'

// Font Awesome Icon
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'

// Utils
import { device } from 'components/assets/utils/divice'



// ======================= STYLES =======================

const ButtonDefaultStyles = css`
    font-size: .9rem;
    padding: .5rem 1.5rem;
    border: none;
    border-radius: .2rem;
    cursor: pointer;
    outline: none;
    transition: .2s;


    &:hover {
        background-color: #42A5F5;
        //background-color: rgba(255, 255, 255, .1)
    }
`



const Menu = styled(FlexContainer)`

    /* =============== DESKTOP =============== */
    @media ${device.desktop} {

        align-items: center;
        flex-flow: row wrap;
        padding: .7rem 1rem;
        font-size: .9rem;
        background-color: #42A5F5;
        background-color: #1E88E5;

        // Posicion fija
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;

        .nav__logo {
        display: flex;
        
            & img {
                width: 40px;           
            }
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
                padding: .3rem .5rem;
                border-radius: .3rem;
                cursor: pointer;
                &:hover {
                    background-color: #5E5E5E;
                    transition: .3s;
                }
                & a {
                color: #fff;
                text-decoration: none !important;
                cursor: pointer;
                }
            }

            
        }


        .nav__btn {
        ${ButtonDefaultStyles}
        background-color: #E91E63;
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

    padding: .5rem .8rem;

        .nav__menu {
            margin-right: .5rem;

            .nav__menu_li {
                margin: 0 .3rem;
                padding: .1rem .3rem;
            }

            & a {
                color: #fff;
                text-decoration: none !important;
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
            top: 69px;
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
                & a {
                color: #fff;
                text-decoration: none !important;
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



const MenuSearch01 = () => {

    const [isMobile, setIsMobile] = useState(false);

    return (
        <Fragment>
            <Menu jcSpaceBetween bgGray800>

                <ul className="nav__logo">
                    <img src='https://bucket-nc-images.s3.amazonaws.com/nc/logos/nc/imagotipo/imagotipo-nc.png'/>
                </ul>

                <ul className={isMobile ? "nav__menu_mobile" : "nav__menu"} onClick={() => setIsMobile(false)}>
                    <Link to="/" className="nav__menu_link"><li className="nav__menu_li"><a> INICIO </a></li></Link>
                    <Link to="#" className="nav__menu_link"><li className="nav__menu_li"><a> DOCUMENTACION </a></li></Link>
                    <Link to="#" className="nav__menu_link"><li className="nav__menu_li"><a> COMPONENTES </a></li></Link>
                </ul>

                <ul>
                    <Input placeholder="Buscar" marginR2 radius3 /> 
                    <FontAwesomeIcon icon={faSearch} color='#FFFFFF'/>

                </ul> 

                <button className="nav__btn" onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? (
                        <FontAwesomeIcon icon={faBars} size='2x' color='#FFFFFF'/>
                    ) : (
                        <FontAwesomeIcon icon={faTimes} size='2x' color='#F44336'/>
                    )}
                </button>


            </Menu>
        </Fragment>
    );
}

export default MenuSearch01