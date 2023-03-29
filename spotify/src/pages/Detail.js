//para todo lo relacionado con letras
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../components/RightClickMenu';
import RightClickMenu from '../components/RightClickMenu';


function Detail () {

    //Con los corchetes, estoy recogiendo el valor del id de la página de Search
    const {id} = useParams();
    const [album,setAlbum]= useState(null);
    console.log({id}, "Tras declarar variable id recogida");

    useEffect(() => {
        const fetchAlbum = async () => {
          const headerObj = new Headers();
          headerObj.append("Content-Type", "application/json");
          headerObj.append(
            "Authorization",
            `Bearer ${window.localStorage.getItem("token")}`
          );
    
          const opt = { method: "GET", headers: headerObj };
    
        const url =  `https://api.spotify.com/v1/albums/${id}`;    

          let response = await fetch(url, opt);
          let data = await response.json();
    
          setAlbum(data);
        };
    
        fetchAlbum();
      }, [id]);

      return (
       
            <div>
              <RightClickMenu/>
            {/*aseguro que album tenga algún valor, se escribe así, luego si hay algo imprime la imagen.*/}          
              {album && 
                  <img src={album.images[0].url} alt={`Imagen ${album.name}`} />
              }
              {album &&
                  <h2>{album.name}</h2>
              }

              {album && (
                <div className="contenedor">
                  {album.tracks.items.map((track, index) => (
                      <div className="AlbumArtista" key={index}>
                        <h5>{track.name}</h5>
                      </div>
                  ))}
                </div>
              )}
            </div>
      )
}

export default Detail;
