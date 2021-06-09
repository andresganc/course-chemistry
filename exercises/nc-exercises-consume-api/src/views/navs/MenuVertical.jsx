
import React, { Fragment, useState } from 'react'
import Styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Link React
import { Link } from 'react-router-dom'
// Link Next
//import Link from 'next/link'

// NC Components
import FlexContainer from 'components/flex-container'
import GridContainer from 'components/grid-container'
import Image from 'components/image'
import Typography from 'components/typography'

// Icons
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faTh } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMouse } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faRProject } from '@fortawesome/free-brands-svg-icons'
import { faClock} from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import { faBroom } from '@fortawesome/free-solid-svg-icons'
import { faCubes} from '@fortawesome/free-solid-svg-icons'
import { faNpm } from '@fortawesome/free-brands-svg-icons'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faColumns } from '@fortawesome/free-solid-svg-icons'

// Utils
import { device } from 'components/assets/utils/divice'


// ======================= STYLES =======================

const ImageLogo = Styled(Image)`
    justify-content: center;
    width: 70px;
    height: 61px;
    margin-bottom: 20px;
`

const ImagenHeader = Styled(Image)`
    justify-content: center;
    margin: auto;
    width: 60px;
`

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


const Menu = Styled(GridContainer)`

    /* =============== DESKTOP =============== */
    @media ${device.desktop} {

        position: fixed;
        align-items: center;
        flex-flow: row wrap;
        padding: .1rem 1rem;

        .nav__logo {
        display: flex;

            & label {
                font-size: 1.2rem;
                color: #fff;
                font-weight: bold;
            }
        }

        .nav__menu {
        display: grid;
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
                    background-color: #1E88E5;
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
            left: 70px;
            top: 69px;
            width: 80vw;
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

const MenuVertical = () => {

    const [isMobile, setIsMobile] = useState(false);

    return (
        <Fragment>
            <Menu>

                <GridContainer marginT5 center>
                    <FontAwesomeIcon icon={faReact} color='#1E88E5' size='4x' />
                </GridContainer>

                <GridContainer marginY4 center>
                    <Typography textWhite center> MENU </Typography>
                    <Typography textWhite> REACT HOOKS </Typography>
                </GridContainer>


                <ul className={isMobile ? "nav__menu_mobile" : "nav__menu"} onClick={() => setIsMobile(false)}>

                    <FlexContainer aiCenter marginY1>
                        <FontAwesomeIcon icon={faTh} color='#A2BD00' />
                        <Link to="/menu-inicio" className="nav__menu_link"><li className="nav__menu_li"><a> Menu inicio </a></li></Link>
                    </FlexContainer>

                    <FlexContainer aiCenter marginY1>
                        <FontAwesomeIcon icon={faPaw} color='#A2BD00' />
                        <Link to="/api-pokemons" className="nav__menu_link"><li className="nav__menu_li"><a> API Pokemons </a></li></Link>
                    </FlexContainer>

                    <FlexContainer aiCenter marginY1>
                        <FontAwesomeIcon icon={faRProject} color='#A2BD00' />
                        <Link to="/api-rick-morty" className="nav__menu_link"><li className="nav__menu_li"><a> API rick and morty </a></li></Link>
                    </FlexContainer>

                    <FlexContainer aiCenter marginY1>
                        <FontAwesomeIcon icon={faClock} color='#A2BD00' />
                        <Link to="/contador-horas" className="nav__menu_link"><li className="nav__menu_li"><a> Contador horas </a></li></Link>
                    </FlexContainer>

                    <FlexContainer aiCenter marginY1>
                        <FontAwesomeIcon icon={faListUl} color='#A2BD00' />
                        <Link to="#" className="nav__menu_link"><li className="nav__menu_li"><a> Todo list basic </a></li></Link>
                    </FlexContainer>

                    <FlexContainer aiCenter marginY1>
                        <FontAwesomeIcon icon={faNpm} color='#A2BD00' />
                        <Link to="#" className="nav__menu_link"><li className="nav__menu_li"><a> Instalar dependencias </a></li></Link>
                    </FlexContainer>

                    <FlexContainer aiCenter marginY1>
                        <FontAwesomeIcon icon={faFolderPlus} color='#A2BD00' />
                        <Link to="#" className="nav__menu_link"><li className="nav__menu_li"><a> Crear carpetas </a></li></Link>
                    </FlexContainer>

                    <FlexContainer aiCenter marginY1>
                        <FontAwesomeIcon icon={faCog} color='#A2BD00' />
                        <Link href="#" className="nav__menu_link"><li className="nav__menu_li"><a> Archivos de configuracion </a></li></Link>
                    </FlexContainer>

                    <FlexContainer aiCenter marginY1>
                        <FontAwesomeIcon icon={faColumns} color='#A2BD00' />
                        <Link href="#" className="nav__menu_link"><li className="nav__menu_li"><a> Iniciar maquetacion </a></li></Link>
                    </FlexContainer>

                </ul>

                <button className="nav__btn" onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? (
                        <img className="nav__btn_img_close" src={faTimes} alt="" />
                    ) : (
                        <img className="nav__btn_img_bar" src={faBars} alt="" />
                    )}
                </button>

            </Menu>
        </Fragment>
    )
}

export default MenuVertical
