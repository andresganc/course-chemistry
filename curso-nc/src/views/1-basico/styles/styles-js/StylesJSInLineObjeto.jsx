
import React, { Fragment } from 'react';

// Styles In-Line
const style = {
    backgroundColor: 'blue'

}

function StylesJSInLineObjeto() {
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
                    width: '80%',
                    left: '20%',
                    padding: '20px, 20px, 20px, 40px',
                    margin: '20px',
                    transition: '0.5s'
                }}>

                    <h2 style={{
                        color: '#fff',
                        textTransform: 'uppercase',
                        fontSize: '1.5em',
                        lineHeight: '1em'
                    }}
                    >
                        STYLES CSS IN LINE - EN REACT
                    </h2>

                    <p style={{color: '#fff'}} > 
                    Este estilo se agrega en la misma propiedad o atributo style del componente
                    </p>

                </div>
            </div>
        </Fragment>
    );
}

export default StylesJSInLineObjeto;