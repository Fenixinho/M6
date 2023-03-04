import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrimeraPagina from './pages/PrimeraPagina';
import SecondPage from './pages/SecondPage';


//Esto sería el controlador. Es el árbol de navegación. Aquí es donde le voy a decir dónde irá cuando en el navegador escriba una u otra cosa. 

const root = ReactDOM.createRoot(document.getElementById('root'));

//Esto es el array de direcciones. lo hacemos con createBrowserRouter que hace lo que su nombre indica.
const routerReactIsBad = createBrowserRouter([
  { path: "/",
    element: <App/> },
  { path: "/primera",
    element: <PrimeraPagina/> },
  { path: "/segona",
    element: <SecondPage/> }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={routerReactIsBad} />
  </React.StrictMode>
);
