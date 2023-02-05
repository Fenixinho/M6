let map;
let latitude = document.getElementById("latitude");
let longitude = document.getElementById("longitude");
let marcadores=[];


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 41.224284, lng: 1.784294},
    zoom: 17,
  });
  const marcador = new google.maps.Marker({
    position: {lat: 41.224284, lng: 1.784294},
    map: map,
    title:"Titulo :P",
  });

  marcadores.push(marcador);
}

let boton = document.getElementById("findLoc");

function getDireccion() {
  let geocoder = new google.maps.Geocoder();
  let address = document.getElementById("direccion").value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      let lat = results[0].geometry.location.lat();  
      let lng = results[0].geometry.location.lng();  
      latitude.value = lat;  
      longitude.value = lng;

      let intersection = new google.maps.LatLng(lat, lng);
      map.setCenter(intersection);
      map.setZoom(17);
      
      marcador = new google.maps.Marker({
        position: intersection,
        map: map,
        title: address,
      });
    }
    else {
      console.log("Todo ha ido bien");
    }
  });
}