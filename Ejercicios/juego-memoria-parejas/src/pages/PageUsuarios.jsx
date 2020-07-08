
import React, { Fragment } from 'react';


function PageUsuarios(props) {

    const { history } = props

    return(
        <Fragment>
            <h2> Pagina Usuarios</h2>
            <button onClick={ () => history.push('/') } > Atras </button>
        </Fragment>
    );
}

export default PageUsuarios;