
import React, { Fragment } from 'react';

// Routes
import { Link } from 'react-router-dom';

/*
function PaginaInicio () {
    return(
        <Fragment>
            <h2> Pagina Inicio </h2>
            <Link to="/"> <button> Pagina Inicio</button> </Link>
            <Link to="/pagina2"> Pagina 2 </Link>
            <Link to="/pagina3"> <button> Pagina 3 </button> </Link>
        </Fragment> 
    );
}
*/


class PaginaInicio extends React.Component {
    render () {
        return (
            <Fragment>
                <h2> Pagina Inicio </h2>
                <Link to="/"> <button> Pagina Inicio</button> </Link>
                <Link to="/pagina2"> <button> Pagina 2 </button> </Link>
                <Link to="/pagina3"> <button> Pagina 3 </button> </Link>
                <button onClick={ () => history.back }> Atras </button>
                <button > Adelante </button>
            </Fragment>
        );
    }
}

export default PaginaInicio;