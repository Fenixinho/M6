import React from "react";
import { createContext, useState, useEffect } from "react";

export const TokenContext = createContext();

const Context = ({ children }) => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    /*Recojo el valor del fragmento de identificador de ubicación de la URL actual del navegador 
    en el momento en que se ejecuta esta línea de código. */
    let hash = window.location.hash;
    if (hash) {
      //saco token
      const tokenL = hash.substring(1).split("&")[0].split("=")[1];
      setToken(tokenL);
      //vaciamos
      window.location.hash = "";
      //para que no aparezca en la barra del navegador le doy este valor "nulo"
      window.localStorage.setItem("token", tokenL);
      //dejo en localStorage el toquen
    }
  });

  const rightClickPrevent = (event) => {
    event.preventDefault();
  };

  return (
    <TokenContext.Provider value={[token, setToken]}>
      <main onContextMenu={rightClickPrevent}>{children}</main>
    </TokenContext.Provider>
  );
};

export default Context;