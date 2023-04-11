//para todo lo relacionado con letras
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RightClickMenuComponent from '../components/RightClickMenuComponent';


function Detail () {

    //Con los corchetes, estoy recogiendo el valor del id de la página de Search
    const {id} = useParams();
    const [album,setAlbum]= useState(null);
    const[menuInfo, setMenuInfo]=useState({
                                          show: false, 
                                          posX: 0, 
                                          posY:0, 
                                          track:""});


    console.log({id}, "Variable id recogida");

    console.log("estado inicial", {menuInfo});


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

      function handleClick(e){
        /*botón derecho (2), entonces se le de al objeto MenuInfo las modificaciones del evento click */
         if (e.nativeEvent.button === 2) {
          setMenuInfo({show: true, 
                       posX: e.pageX, 
                       posY:e.pageY, 
                       track: e.target.getAttribute("data-key")});
          } 

      }

      function handleLeftClick(e){
        setMenuInfo({show: false, 
          posX: e.pageX, 
          posY:e.pageY, 
          track: e.target.getAttribute("data-key")});

      }

      return (
       
            <div>
              {menuInfo.show ? <RightClickMenuComponent data={menuInfo}/> : null}
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
                      <><div className="AlbumArtista" key={index}>
                      <h5>{track.name}</h5>
                    </div>
                    <div onClick ={handleLeftClick} onContextMenu={handleClick} key={track.id} data-key={track.id}>
                    </div></>
                      
                  ))}
                </div>
              )}
            </div>
      )
}

export default Detail;
