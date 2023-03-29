import React from "react";
import '../components/Menu';
import Menu from "../components/Menu";
import { useState } from "react";

function buscador (){

    const[albums, setAlbums] = useState ([]);

    const searchSpotyAlbums = async e=>{
        e.preventDefault();
  
        const headerObj = new Headers();
        headerObj.append('Content-Type', 'application/json');
        headerObj.append('Authorization', `Bearer ${window.localStorage.getItem("token")}`)
                
        const opt = {method: "GET", headers: headerObj}
        const url = `https://api.spotify.com/v1/search?q=mozart&type=album`;        
        
        let response = await fetch(url, opt);
        let data = await response.json();
        console.log(data)
        console.log(data.albums.items);
        setAlbums(data.albums.items);      
    }
}

export default buscador;
