import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/css/app.css';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

/* Instalación: npm install react-router-dom y la importamos acá,
colocamos el componente BrowserRouter para que este en toda la aplicación(dentro App) */
