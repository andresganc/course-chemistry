
import React, { Fragment } from 'react';


function PageRecords(props) {

    const { history } = props

    return(
        <Fragment>
            <h2> Pagina Records</h2>
            <button onClick={ () => history.push('/') } > Atras </button>
        </Fragment>
    );
}

export default PageRecords;