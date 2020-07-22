
import React from 'react';
import ReactDOM from 'react-dom';

// Pages
import FormHooks from 'views/2-intermedio/forms-hooks/FormHookStringEnvio';
import FormSuma from 'views/2-intermedio/forms-hooks/FormHookSuma';
import CambiarEstado from 'views/2-intermedio/hooks/CambiarEstadoFelizContentoClasses';
import ImagenesMicrosoft from 'views/1-basico/metodos-de-siclo-de-vida/ImagenesMicrosoft';

// Routes
import Rutas from 'routes/Routes';


ReactDOM.render(
  <React.StrictMode>

      <FormSuma />
      <br></br>
      <FormHooks />
      <br></br>
      <CambiarEstado />
      <br></br>
      <ImagenesMicrosoft />
      
              
  </React.StrictMode>,
  document.getElementById('root')
);


