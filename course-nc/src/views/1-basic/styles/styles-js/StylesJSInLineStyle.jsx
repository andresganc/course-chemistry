
/* =========== STYLES CSS IN LINE 01 - EN REACT ============ */
// Este estilo se agrega en la misma propiedad o atributo style del componente y se usa JavaScript

import React, { Fragment } from 'react';


function StylesJSInLineStyle() {
    return (
        <Fragment>
            <div style={{
                position: 'relative',
                width: '600px',
                height: '350px',
                margin: '20px',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #d41e31, #491f8f)'
            }}
            >
                <div style={{
                    position: 'relative',
                    width: '90%',
                    left: '10%',
                    padding: '20px, 20px, 20px, 40px',
                    margin: '10px',
                    transition: '0.5s'
                }}>

                    <h2 style={{
                        color: '#fff',
                        textTransform: 'uppercase',
                        fontSize: '1.5em',
                        lineHeight: '1em'
                    }}
                    >
                        STYLES JSS IN LINE 01 - EN REACT
                    </h2>

                    <p style={{color: '#fff'}} > 
                    Este estilo se agrega en la misma propiedad o atributo style del componente y se usa JavaScript
                    </p>

                </div>
            </div>
        </Fragment>
    );
}

export default StylesJSInLineStyle;