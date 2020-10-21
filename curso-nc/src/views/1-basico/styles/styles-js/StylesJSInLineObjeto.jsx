
import React, { Fragment } from 'react';

// Images
import JS from './img/js.png';

// Styles JS In-Line
// Los estilos con JS puro tiene algunas limitaciones
// Entre esos los selectores global, hover etc.
const stylesJSInLine = {
    divCard: {
        position: 'relative',
        width: '600px',
        height: '350px',
        margin: '20px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: '20px',
        background: 'linear-gradient(135deg, #d41e31, #491f8f)'
    },

    divContent: {
        position: 'relative',
        width: '80%',
        left: '5%',
        padding: '20px, 20px, 20px, 40px',
        margin: '20px',
        transition: '0.5s'
    },

    h2: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: '1.5em',
        lineHeight: '1em'
    },

    p: {
        color: '#fff'
    },

    img: {
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        height: '350px',
        transition: '0.5s',
        opacity: '0.3',
        '&:hover' : {
            left: '80%',
            height: '500px'
        }
    }

}

function StylesJSInLineObjeto() {
    return (
        <Fragment>
            <div style={stylesJSInLine.divCard} >
                <div style={stylesJSInLine.divContent}>
                    <h2 style={stylesJSInLine.h2} >
                        REACT
                    </h2>
                    <h2 style={stylesJSInLine.h2} >
                        STYLES JS
                    </h2>
                    <p style={stylesJSInLine.p} > 
                    <strong>Tipo: </strong> En linea
                    </p>
                    <p style={stylesJSInLine.p} > 
                    <strong>Libreria: </strong> Ninguna
                    </p>
                    <p style={stylesJSInLine.p} > 
                    <strong>Metodo: </strong> Ninguno
                    </p>
                    <p style={stylesJSInLine.p} > 
                    <strong>Notas: </strong>
                        Los estilos con js puro tiene algunas limitaciones como:
                        - Selectores (Globales, Hover etc)
                        - Anidamientos
                        - Animaciones
                        - Modulos
                    </p>
                                        
                </div>
                <img src={JS} style={stylesJSInLine.img} alt=""></img>
            </div>
        </Fragment>
    );
}

export default StylesJSInLineObjeto;