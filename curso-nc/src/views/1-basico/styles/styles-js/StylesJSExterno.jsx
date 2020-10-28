 
import React, { Fragment } from 'react';

// Images
import JS from './img/js.png';


// Styles CSS externo
import stylesJSExterno from  './styles/styles';


function StylesJSExterno() {
    return(
        <Fragment>
            <div style={stylesJSExterno.divCard} >
                <div style={stylesJSExterno.divContent}>
                    <h2 style={stylesJSExterno.h2} >
                        REACT
                    </h2>
                    <h2 style={stylesJSExterno.h2} >
                        STYLES JS
                    </h2>
                    <p style={stylesJSExterno.p} > 
                    <strong>Tipo: </strong> Archivo externo
                    </p>
                    <p style={stylesJSExterno.p} > 
                    <strong>Libreria: </strong> Ninguna
                    </p>
                    <p style={stylesJSExterno.p} > 
                    <strong>Metodo: </strong> Ninguno
                    </p>
                    <p style={stylesJSExterno.p} > 
                    <strong>Notas: </strong>
                        Los estilos con js puro tiene algunas limitaciones como:
                        - Selectores (Globales, Hover etc)
                        - Anidamientos
                        - Animaciones
                        - Modulos
                    </p>
                                        
                </div>
                <img src={JS} style={stylesJSExterno.img} alt=""></img>
            </div>
        </Fragment>
    );
}

export default StylesJSExterno;