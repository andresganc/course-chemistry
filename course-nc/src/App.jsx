
import React from 'react'

// Components 
import ConditionalRender from 'views/1-basic/render-conditional/ConditionalRender'
import ArrayRender from 'views/1-basic/render-array/ArrayRender'

// Fetch
import FetchReactPromisesJPH from 'views/2-medium/fetch/fetch-with-promises/fetch-promises-api-jsonplaceholder'
import FetchReactPromisesTable from 'views/2-medium/fetch/fetch-with-promises/fetch-promises-with-table'
import FetchReactPromisesImages from 'views/2-medium/fetch/fetch-with-promises/fetch-promises-with-images'
import FetchReactAsyncAwaitJPH from 'views/2-medium/fetch/fetch-with-async-await/fetch-async-await-api-jsonplaceholder'
import FetchReactAsyncAwaitImages from 'views/2-medium/fetch/fetch-with-async-await/fetch-async-await-with-images'
import FetchReactAsyncAwaitTable from 'views/2-medium/fetch/fetch-with-async-await/fetch-async-await-with-table'

// UseContext
import UseContextAPIUser from './views/2-medium/hook-use-context/useContextAPIUser'


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

            <UseContextAPIUser />
            <hr/>

            <FetchReactPromisesTable />
            <hr/>
            <FetchReactAsyncAwaitTable />
            <hr/>

            <FetchReactPromisesImages />
            <hr/>
            <FetchReactAsyncAwaitImages />
            <hr/>


            <FetchReactPromisesJPH />
            <hr/>
            <FetchReactAsyncAwaitJPH />
            

        </div>
    )
}

export default App
