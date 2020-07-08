
import React from 'react';
import ReactDOM from 'react-dom';

// Pages
import ContadorClases from 'views/3-hooks/hooks/ContadorConClases';
import ContadorHooks from 'views/3-hooks/hooks/ContadorConHooks';
import ContadorHooksArrowFuera from 'views/3-hooks/hooks/ContadorConHooksArrowFuera';
import StateConConstructorYProps from 'views/1-basico/states/StateConConstructorYProps';
import ContadorClaseUseEffect from 'views/3-hooks/hook-use-effect/ContadorClaseUseEffect';
import FuentesGoogle from 'views/1-basico/fuentes-tipograficas/FuentesGoogle';

// Routes
import Rutas from './routes/routes';


ReactDOM.render(
  <React.StrictMode>

    <ContadorClases />

    <br></br>

    <StateConConstructorYProps
      texto="Texto de boton por props"
    >
    </StateConConstructorYProps>

    <br></br>

    <ContadorHooks />

    <br></br>

    <ContadorHooksArrowFuera />

    <ContadorClaseUseEffect />

    <FuentesGoogle />
          
    
  </React.StrictMode>,
  document.getElementById('root')
);


