
import React from 'react';
import ReactDOM from 'react-dom';

// Pages
import OperacionesMatematicas from 'views/2-intermedio/operaciones-matematicas/OperacionesMatematicas';

// Routes
import Rutas from './routes/routes.js';




ReactDOM.render(
  <React.StrictMode>
    <OperacionesMatematicas />
  </React.StrictMode>,
  document.getElementById('root')
);


