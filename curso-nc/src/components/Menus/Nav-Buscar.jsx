
import React from 'react';

// Components
import Buscar from '../searchs/BuscarSimple';

// Styles
import StylesNav from '../../assets/styles/menus/nav-buscar';

// Assets
import ImagenInicio from '../../assets/img/home.svg';
import ImagenMenu from '../../assets/img/menu.svg';


class Menu extends React.Component {

        render() {

            return(
                <div>
                    
                    <nav style={StylesNav.nav} >

                        <div style={StylesNav.div_nav} >
                            <ul>
                                <img src={ImagenInicio} alt="" width="20px" />
                                <li style={StylesNav.li} > <a style={StylesNav.a} href="#"> Inicio </a> </li>
                                <img src={ImagenMenu} alt="" width="20px" />
                                <li style={StylesNav.li} > <a style={StylesNav.a} href="#"> Menu 1 </a> </li>
                                <img src={ImagenMenu} alt="" width="20px" />
                                <li style={StylesNav.li} > <a style={StylesNav.a} href="#"> Menu 2 </a> </li>
                                <img src={ImagenMenu} alt="" width="20px" />
                                <li style={StylesNav.li} > <a style={StylesNav.a} href="#"> Menu 3 </a> </li>
                                <img src={ImagenMenu} alt="" width="20px" />
                                <li style={StylesNav.li} > <a style={StylesNav.a} href="#"> Menu 4 </a> </li>
                            </ul>
                        </div>

                        <div style={StylesNav.div_buscar} >
                            <Buscar />
                        </div>

                    </nav> 

                    

                </div>
            );

        }


}



export default Menu;