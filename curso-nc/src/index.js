
import React from 'react';
import ReactDOM from 'react-dom';

// Pages
import OperacionesMatematicas from 'views/2-intermedio/operaciones-matematicas/OperacionesMatematicas';

// Routes
import Rutas from './routes/routes';


ReactDOM.render(
  <React.StrictMode>
    <Rutas />
  </React.StrictMode>,
  document.getElementById('root')
);


