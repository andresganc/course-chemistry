
import React, { Fragment } from 'react';

function ButtonProps(props) {
    return(
        <Fragment>
            <button> { props.texto } </button>
        </Fragment>
    );
} 

export default ButtonProps;