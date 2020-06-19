
import React, { Fragment } from 'react';

function PaginaInicio () {
    return(
        <Fragment>
            <h2> Pagina Inicio </h2>
            <button> Pagina Inicio</button>
            <button> Pagina 2 </button>
            <button> Pagina 3 </button>

            <nav>
                <ul>
                    <li> <a href=""> Inicio </a> </li>
                    <li> <a href=""> Pagina 2</a> </li>
                    <li> <a href=""> Pagina 3 </a> </li>
                </ul>
            </nav>
        </Fragment> 
    );
}

export default PaginaInicio;