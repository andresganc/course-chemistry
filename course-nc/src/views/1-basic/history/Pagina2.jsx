
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Pagina2 () {
    return(
        <Fragment>
            <h2> Pagina 2 </h2>
            <Link to="/"> <button> Pagina Inicio</button> </Link>
            <Link to="/pagina2"> <button> Pagina 2 </button> </Link>
            <Link to="/pagina3"> <button> Pagina 3 </button> </Link>
        </Fragment> 
    );
}

export default Pagina2;