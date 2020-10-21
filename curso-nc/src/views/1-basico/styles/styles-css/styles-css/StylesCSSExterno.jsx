
import React, { Fragment } from 'react';

// Styles CSS externo
import './css/styles.css';

// Images
import CSS from './img/css3.png';


function StylesCSSExterno() {
    return(
        <Fragment>
            <div className="card" >
                <div className="content">
                    <h2>CSS en React</h2>
                    <br></br>
                    <p>- CSS Externo </p>
                    <p>- Se crean los estilos en un archivo independiente .css</p>
                    <p>- Se importa y se llaman las clases css creadas en la propiedad ClassName del componente</p>
                    <br></br>
                    <a href="#"> Leer mas ...</a>
                </div>
                <img src={CSS} alt=""></img>
            </div>
        </Fragment>
    );
}

export default StylesCSSExterno;