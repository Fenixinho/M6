import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Context from './components/Context';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Search from './pages/Search';
import Detail from './pages/Detail';



//Esto sería el controlador. Es el árbol de navegación. Aquí es donde le voy a decir dónde irá cuando en el navegador escriba una u otra cosa. 

/*Aquí montaremos la aplicación inicial de React, guardamos esto en constante root. Así se inicializa una app en react. */
const root = ReactDOM.createRoot(document.getElementById('root'));

//Esto es el array de direcciones. lo hacemos con createBrowserRouter que hace lo que su nombre indica.
const router = createBrowserRouter([
  { path: "/",
    element: <App/> },
  { path: "search",
    element: <Search/> },
  { path: "search/detalle/:id",
      element: <Detail/>}
       
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

