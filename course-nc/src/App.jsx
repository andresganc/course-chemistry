
import React from 'react'

// Components 
import ConditionalRender from 'views/1-basic/render-conditional/ConditionalRender'
import ArrayRender from 'views/1-basic/render-array/ArrayRender'

// Fetch
import FetchAsyncReactThenResponse from 'views/2-medium/fetch-async/fetch-async-react-then-response'
import FetchAsyncReactNormal from 'views/2-medium/fetch-async/fetch-async-react-normal'

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

            <FetchAsyncReactNormal />
            <hr/>
            <FetchAsyncReactThenResponse />
            

        </div>
    )
}

export default App
