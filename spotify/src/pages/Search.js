import React from "react";
import '../components/Menu';
import Menu from "../components/Menu";
import { useState } from "react";
import '../styles/Search.css';
import { Link } from "react-router-dom";

function Search(){

    const [album, setAlbum] = useState([]);

    //creamos un userState
    const[inputValue, setInputValue] = useState ();

    //Creo evento para setear el valor introducido por el usuario
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        console.log('Valores evento', event.target.value);
    };

    //Evento que recoge lo que se envía en la búsqueda (inputValue) de forma dinámica
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Se ha introducido este valor: ${inputValue}`);
        console.log(inputValue);
        //Envío a serachSpotyAlbums el evento recogido.
        searchSpotyAlbums(inputValue);
    }

    const searchSpotyAlbums = async inputValue=>{
       /*  e.preventDefault(); */
    
        const headerObj = new Headers();
        headerObj.append('Content-Type', 'application/json');
        headerObj.append('Authorization', `Bearer ${window.localStorage.getItem("token")}`)
                
        const opt = {method: "GET", headers: headerObj}
                
        const url = `https://api.spotify.com/v1/search?q=${inputValue}&type=album,track`;

        let response = await fetch(url, opt);
        let data = await response.json();
       
        setAlbum(data.albums.items);
        console.log(data.albums.items);  
         
    }
    return (
        <div>
            <Menu/>
            <form onSubmit={handleSubmit}>
            <label>
                Qué quieres buscar? :
                <input type="text" value={inputValue} onChange={handleInputChange} />
            </label>
            <button type="submit">Enviar</button>
            </form>
            <div className="contenedor">
                {album.map((album, index) => (
                    <div className="AlbumArtista" key={index}>

                        <Link to= {`detalle/${album.id}`}>
                            <img src={album.images[1].url} alt={`Imagen ${index + 1}`} />
                        </Link>
                        
                        <Link to= {`detalle/${album.id}`}>
                            <h2>{album.name}</h2>
                        </Link>

                    </div>
                    ))}
            </div>
        </div>
      );
}

export default Search;