
import React, { Fragment } from 'react';


function ButtonProps(props) {
    return(
        <Fragment>
            <h2> Megusta :</h2>
            <h2> { props.numero } </h2>
        </Fragment>
    );
}


function ModPropsMismoArchivo() {
    return(
        <Fragment>

          <ButtonProps />

        </Fragment>
    );
}

export default ModPropsMismoArchivo;