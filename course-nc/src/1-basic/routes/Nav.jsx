
import React, { Fragment } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

// Iconos de Material UI
import HomeIcon from '@material-ui/icons/Home';


function Nav(props) {

    const { history } = props

    return (
        <Fragment>
            
            {/* Metodo 1 */}
            <h4> Menu Links, a, Link + Button </h4>
            <Link to="/"> <HomeIcon />  Inicio </Link>
            <a href="/pagina2"> <button> Pagina 2 </button> </a>
            <Link to="/pagina3"> <button> Pagina 3 </button> </Link>
            { false && <Redirect to="/" /> }

            {/* Metodo 2 */}
            <h4> Menu Button + History </h4>
            <button onClick={ () => history.push('/') } > Inicio </button>
            <button onClick={ () => history.push('/pagina2') } > Pagina 2 </button>
            <button onClick={ () => history.push('/pagina3') } > Pagina 3 </button>
            <button onClick={ () => history.goBack() } > Atras </button>
            <button onClick={ () => history.goForward() } > Adelante </button>

        </Fragment>
    );
}

export default withRouter(Nav);