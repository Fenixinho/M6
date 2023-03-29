import React from "react";
import { createContext, useState, useEffect } from "react";

export const TokenContext = createContext();

const Context = ({ children }) => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    let hash = window.location.hash;
    console.log(hash);
    if (hash) {
      const tokenL = hash.substring(1).split("&")[0].split("=")[1];
      console.log('este es el token',token);
      setToken(tokenL);
      window.location.hash = "";
      window.localStorage.setItem("token", tokenL);
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