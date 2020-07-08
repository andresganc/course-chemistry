
import React, { Fragment } from 'react';


function PageSucces(props) {

    const { history } = props

    return(
        <Fragment>
            <h2> Pagina Succes</h2>
            <button onClick={ () => history.push('/') } > Atras </button>
        </Fragment>
    );
}

export default PageSucces;