
import React, { Fragment } from 'react';

// Styles CSS externo
import './assets/css/styles.css'

const StylesCSSExterno = () => {
    return (
        <Fragment>
            <div className="div">
                <h3> STYLES OUT </h3>
                <button className="btn-cancelar"> Cancelar </button>
                <button className="btn-guardar"> Guardar </button>
            </div>
        </Fragment>
    )
}

export default StylesCSSExterno