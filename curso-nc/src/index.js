
import React from 'react';
import ReactDOM from 'react-dom';

// Routes
//import Rutas from 'routes/routes';

// Pages
//import FormHooks from 'views/2-intermedio/forms-hooks/FormHookStringEnvio';
//import FormSuma from 'views/2-intermedio/forms-hooks/FormHookSuma';
//import CambiarEstado from 'views/2-intermedio/hooks/CambiarEstadoFelizContentoClasses';
//import ImagenesMicrosoft from 'views/1-basico/metodos-de-siclo-de-vida/ImagenesMicrosoft';


// Componentes
import ImportarImagenesMicrosoftUseEffect from 'views/2-medium/hook-use-effect/ImportarImagenesMicrosoftUseEffect'

import PosicionMouseUseEffet from 'views/2-medium/hook-use-effect/PosicionMouseUseEffet';


ReactDOM.render(
  <React.StrictMode>
    <PosicionMouseUseEffet />               
  </React.StrictMode>,
  document.getElementById('root')
);


