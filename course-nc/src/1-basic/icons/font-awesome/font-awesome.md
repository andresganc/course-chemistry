
## ICONS FONT-AWESOME


### Install

    - Se debe instalar estas 3 dependencias para usar como minimo los iconos libres

    $ npm i --save @fortawesome/fontawesome-svg-core
    $ npm install --save @fortawesome/free-solid-svg-icons
    $ npm install --save @fortawesome/react-fontawesome
    $ npm install --save @fortawesome/free-brands-svg-icons
    $ npm install --save @fortawesome/free-regular-svg-icons


    Ejemplo
    <code>

    import React, { Fragment } from 'react'

    // Icons Fonts Awesome
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faCoffee } from '@fortawesome/free-solid-svg-icons'
    import { faAnchor } from '@fortawesome/free-solid-svg-icons'


    const FontAwesome = () => {
        return (
            <div>
                <h2> ICONS FONT AWESOME </h2>
                <FontAwesomeIcon icon={faAnchor} size='5x' color='#D500F9' />
            </div>
        )
    }

    export default FontAwesome