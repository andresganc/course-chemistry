import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Components
import MenuDark from './components/menus/menu-dark/MenuDark';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <br></br>
    <MenuDark />
    <br></br>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
