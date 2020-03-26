// Dependencias
import React from 'react';
// import ReactDOM from 'react-dom';    // Render desde el ReactDOM
import {render} from 'react-dom';       // Render directo
import {BrowserRouter as Router} from 'react-router-dom';

// Routes
// import App from './components/App';      // Se importa App cuando no hay mas rutas
import AppRoutes from './routes';           // Se importa AppRoutes cuando hay varias rutas

// Assets
import './index.css';

//import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));   // Con ReactDOM
render(
//<App />,      // Se llama la App Cuando es solo una ruta (Solo una APP)  
<Router>
    <AppRoutes/>
</Router>,
document.getElementById('root')
);
//registerServiceWorker();
