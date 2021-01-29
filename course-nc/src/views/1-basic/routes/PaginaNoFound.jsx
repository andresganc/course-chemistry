
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function PaginaNoFound () {
    return(
        <Fragment>
            <h2> Pagina NoFound - Error Ruta no encontrada </h2>
            <Link to="/"> <button> Volver a inicio</button> </Link>
        </Fragment> 
    );
}

export default PaginaNoFound;