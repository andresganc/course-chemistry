
import React from 'react'

// Components 
import ConditionalRender from 'views/1-basic/render-conditional/ConditionalRender'
import ArrayRender from 'views/1-basic/render-array/ArrayRender'

// Fetch
import FetchReactThen from 'views/2-medium/fetch/fetch-react-then'
import FetchReactAsyncAwait from 'views/2-medium/fetch/fetch-react-async-await'

// Routes
//import Rutas from 'routes/routes';

// Pages
//import FormHooks from 'views/2-intermedio/forms-hooks/FormHookStringEnvio';
//import FormSuma from 'views/2-intermedio/forms-hooks/FormHookSuma';
//import CambiarEstado from 'views/2-intermedio/hooks/CambiarEstadoFelizContentoClasses';
//import ImagenesMicrosoft from 'views/1-basico/metodos-de-siclo-de-vida/ImagenesMicrosoft';

const App = () => {
    return (
        <div>

            <FetchReactAsyncAwait />
            <hr/>
            <FetchReactThen />
            

        </div>
    )
}

export default App
