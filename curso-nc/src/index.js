
import React from 'react';
import ReactDOM from 'react-dom';

// Pages
import ContadorClases from 'views/2-intermedio/hooks/ContadorConClases';
import ContadorHooks from 'views/2-intermedio/hooks/ContadorConHooks';
import ContadorHooksArrowFuera from 'views/2-intermedio/hooks/ContadorConHooksArrowFuera';

// Routes
import Rutas from './routes/routes';


ReactDOM.render(
  <React.StrictMode>
    <ContadorClases />
    <br></br>
    <ContadorHooks />
    <ContadorHooksArrowFuera />
  </React.StrictMode>,
  document.getElementById('root')
);


