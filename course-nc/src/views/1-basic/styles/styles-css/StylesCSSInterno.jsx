
import React, { Fragment } from 'react'

const styles = {
    div: {
        backgroundColor: 'lightgray',
    },

    buttonCancelar: {
        padding: '8px 15px',
        color: 'white',
        backgroundColor: 'tomato'
    },

    buttonGuardar: {
        padding: '8px 15px',
        color: 'white',
        backgroundColor: 'teal'
    }
}

const StylesCSSInterno = () => {
    return (
        <Fragment>
            <div style={ styles.div } >
                <h3> STYLES INTERN </h3>
                <button style={ styles.buttonCancelar }> CANCELAR </button>
                <button style={ styles.buttonGuardar }> GUARDAR </button>
            </div>
        </Fragment>
    )
}

export default StylesCSSInterno



