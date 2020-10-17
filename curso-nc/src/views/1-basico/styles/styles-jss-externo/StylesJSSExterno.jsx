
import React, { Fragment } from 'react';

// Styles CSS externo
import './jss/styles.js';

// Images
import Thor from './img/thor.png';


function StylesJSSExterno() {
    return(
        <Fragment>
            <div className="card" >
                <div className="content">
                    <h2>JSS en React</h2>
                    <br></br>
                    <p>- CSS Externo </p>
                    <p>- Se crean los estilos en un archivo independiente .js</p>
                    <p>- Se importa y se llaman las clases css creadas en la propiedad ClassName del componente</p>
                    <br></br>
                    <a href="#"> Leer mas ...</a>
                </div>
                <img src={Thor} alt=""></img>
            </div>
        </Fragment>
    );
}

export default StylesJSSExterno;