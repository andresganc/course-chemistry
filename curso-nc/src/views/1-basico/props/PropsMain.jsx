
import React, { Fragment } from 'react';

import PropsProductosPrecios  from 'views/1-basico/props/PropsProductosPrecios';

function PropsMain () {
    return (
        <Fragment>
            <PropsProductosPrecios
            producto1="Memoria USB 32 Gb : "
            precio1="15000"
            producto2="Memoria USB 64 Gb : "
            precio2="30000"
            >
            </PropsProductosPrecios>
        </Fragment>
    );
}

export default PropsMain;