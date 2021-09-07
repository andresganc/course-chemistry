
import React, { Fragment, useState } from 'react'

const ArrayRender = () => {

    const [seasons, setSeasons] = useState(['Primavera', 'Verano', 'Otoño', 'Invierno'])

    return (
        <Fragment>
            RENDERIZADO POR LISTA ARRAY

            <ol>
                { seasons.map( (e, index ) => <li key={index}> {e} </li> ) }
            </ol>
            
        </Fragment>
    )
}

export default ArrayRender
