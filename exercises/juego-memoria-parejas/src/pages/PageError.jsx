
import React, { Fragment } from 'react';


function PageError(props) {

    const { history } = props

    return(
        <Fragment>
            <h2> Pagina Error</h2>
            <button onClick={ () => history.push('/') } > Atras </button>
        </Fragment>
    );
}

export default PageError;