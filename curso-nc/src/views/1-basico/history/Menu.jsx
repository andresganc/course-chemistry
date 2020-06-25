
import React, { Fragment } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

function Menu(props) {
    const { history } = props
    return (
        <Fragment>
            <h2> Menu </h2>
            <Link to="/"> <button> Pagina Inicio</button> </Link>
            <Link to="/pagina2"> <button> Pagina 2 </button> </Link>
            <Link to="/pagina3"> <button> Pagina 3 </button> </Link>
            <button onClick={() => history.back}> Atras </button>
            <button > Adelante </button>
            { false && <Redirect to="/" /> }
        </Fragment>
    );
}

export default Menu;