
import React from 'react';
import ReactDOM from 'react-dom';

// Pages
import StateSinstaxisBasica from 'views/1-basico/states/StateSintaxisBasica';
import StateSinstaxisConstructor from 'views/1-basico/states/StateSintaxisContructor';

// Routes
import Rutas from './routes/routes';


ReactDOM.render(
  <React.StrictMode>

      <StateSinstaxisConstructor />
              
  </React.StrictMode>,
  document.getElementById('root')
);


