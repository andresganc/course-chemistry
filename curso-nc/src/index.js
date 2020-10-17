
import React from 'react';
import ReactDOM from 'react-dom';

// Pages
//import FormHooks from 'views/2-intermedio/forms-hooks/FormHookStringEnvio';
//import FormSuma from 'views/2-intermedio/forms-hooks/FormHookSuma';
//import CambiarEstado from 'views/2-intermedio/hooks/CambiarEstadoFelizContentoClasses';
//import ImagenesMicrosoft from 'views/1-basico/metodos-de-siclo-de-vida/ImagenesMicrosoft';

// Componentes
import StylesJSSInLine01 from 'views/1-basico/styles/styles-jss-in-line/StylesJSSInLine01';
import StylesCSSInJSInLine from 'views/1-basico/styles/styles-css-in-js-in-line/StylesCSSInJSInLine';
import StylesCSSExterno from 'views/1-basico/styles/styles-css-externo/StylesCSSExterno';
import StylesJSSExterno from 'views/1-basico/styles/styles-jss-externo/StylesJSSExterno';

// Routes
import Rutas from 'routes/Routes';


ReactDOM.render(
  <React.StrictMode>

      <br></br>
      <StylesJSSInLine01 />
      <br></br>
      <StylesCSSInJSInLine />
      <br></br>
      <StylesCSSExterno />
      <br></br>
      <StylesJSSExterno />
              
  </React.StrictMode>,
  document.getElementById('root')
);


