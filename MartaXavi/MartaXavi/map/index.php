<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1LqPNfReHlA4RTAU1YOuVKZxTqvCPa0g&callback=initMap" async defer></script>
    <style>  
        #map{
            height: 303px;  
            width:707px;  
        }  
    </style> 

</head>
<body>
    <div id="map"></div>  
    <form>
        <input name="direccion" value="" id="direccion"/>
    <button type="button" class="btn btn-secondary" onclick="getDireccion()" id="findLoc">Buscar dirección</button> <br> 
    </form>
    <input name="lat" value="" id="latitude"/>  <br>
    <input name="lng" value="" id="longitude"/>
    <script src="map.js"></script>

</body>
</html>