import React from "react";
import {createContext, useState, useEffect} from "react";


export const TokenContext = createContext()


const Context = ({children}) =>{
    const[token, setToken] = useState(null);
    useEffect(()=>{
        let hash = window.location.hash;
        if(hash){
            const tokenL = hash.substring(1).split("&")[0].split("=")[1];
            console.log(token);
            setToken(tokenL);
            window.location.hash="";
            window.localStorage.setItem("token", tokenL)
        }
    });

    return(
<TokenContext.Provider value={[token, setToken]}>{children}</TokenContext.Provider>
    )
}
export default Context;

