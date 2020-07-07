
import React from 'react';
import ReactDOM from 'react-dom';

// Pages
import ContadorClases from 'views/2-intermedio/hooks/ContadorConClases';
import ContadorHooks from 'views/2-intermedio/hooks/ContadorConHooks';
import ContadorHooksArrowFuera from 'views/2-intermedio/hooks/ContadorConHooksArrowFuera';
import StateConConstructorYProps from 'views/1-basico/states/StateConConstructorYProps';

import ContadorClaseUseEffect from 'views/2-intermedio/hook-use-effect/ContadorClaseUseEffect';

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
          
    
  </React.StrictMode>,
  document.getElementById('root')
);


