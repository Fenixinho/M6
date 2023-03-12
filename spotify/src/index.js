import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Context from './components/Context';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrimeraPagina from './pages/PrimeraPagina';
import SecondPage from './pages/SecondPage';




//Esto sería el controlador. Es el árbol de navegación. Aquí es donde le voy a decir dónde irá cuando en el navegador escriba una u otra cosa. 

/*Aquí montaremos la aplicación inicial de React, guardamos esto en constante root. Así se inicializa una app en react. */
const root = ReactDOM.createRoot(document.getElementById('root'));

//Esto es el array de direcciones. lo hacemos con createBrowserRouter que hace lo que su nombre indica.
const router = createBrowserRouter([
  { path: "/",
    element: <App/> },
  { path: "/primera",
    element: <PrimeraPagina/> },
  { path: "/segona",
    element: <SecondPage/> }
]);
/*Aquí le digo a react qué voy a tener dentro de mi aplicación */

root.render(
<React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);

reportWebVitals();

