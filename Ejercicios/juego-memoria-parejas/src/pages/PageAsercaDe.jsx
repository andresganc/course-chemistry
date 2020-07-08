
import React, { Fragment } from 'react';


function PageAsercaDe(props) {

    const { history } = props
    
    return(
        <Fragment>
            <h2> Pagina Aserca De</h2>
            <button onClick={ () => history.push('/') } > Atras </button>
        </Fragment>
    );
}

export default PageAsercaDe;