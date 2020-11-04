
import React from 'react';
import ReactDOM from 'react-dom';

// Pages
//import FormHooks from 'views/2-intermedio/forms-hooks/FormHookStringEnvio';
//import FormSuma from 'views/2-intermedio/forms-hooks/FormHookSuma';
//import CambiarEstado from 'views/2-intermedio/hooks/CambiarEstadoFelizContentoClasses';
//import ImagenesMicrosoft from 'views/1-basico/metodos-de-siclo-de-vida/ImagenesMicrosoft';

// Componentes
import FontsLocales from 'views/1-basico/fonts/FuentesDesdeArchivo';
import StylesCSSExterno from 'views/1-basico/styles/styles-css/styles-css/StylesCSSExterno';
import StylesJSInLineObjeto from 'views/1-basico/styles/styles-js/StylesJSInLineObjeto';
import StylesMakeStylesInLine from 'views/1-basico/styles/styles-css-in-js-material-ui/makestyles/StylesMakeStylesInLine';
import StylesMakeStylesExterno from 'views/1-basico/styles/styles-css-in-js-material-ui/makestyles/StylesMakeStylesExterno';
import StylesJSExterno from 'views/1-basico/styles/styles-js/StylesJSExterno';

// Routes
import Rutas from 'routes/Routes';


ReactDOM.render(
  <React.StrictMode>
      <br></br><br></br>
      <StylesCSSExterno />
      <br></br>      
      <StylesJSInLineObjeto />
      <br></br>
      <StylesJSExterno />
      <br></br>
      <StylesMakeStylesInLine />
      <br></br>
      <StylesMakeStylesExterno />
      <br></br>
      <FontsLocales />      
              
  </React.StrictMode>,
  document.getElementById('root')
);


