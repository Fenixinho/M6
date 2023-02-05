let projectes;
let i = 0;

//1. Crea una funció que llegeixi tots els projectes de l'arxiu data/projectes.json

$(document).ready(function(){
    $.get("./data/data.json", function(data){
       projectes = data.projectes;
       showProjecte(projectes[i]);
    });
 });

//2. Fes una funció que mostri la informació a la pantalla. Que lo meta en pantalla por html

function showProjecte() {

    /* así accedo a  los elementos img que están dentro de el id projecteContainer  y le agrego la imagen que quiero*/
    $("#projecteContainer img").attr("src", projectes[i].img);

    //agrego una clase llamada posición. Primero elimino, en caso que lo hubiera y luego agrego.

    //NO ENTIENDO, PREGUNTAR A MARTA que me ayudó
    $("#projecteContainer img").removeAttr("class").addClass(projectes[i].position);

    if(projectes[i].position == "center") {

        //saco el ancho de la imagen y lo llevo a la función que calcula el porcentaje
        
        $("#projecteContainer img").css("width", calcWidth(projectes[i].mida));
       
    }

    if (projectes[i].position == "fullScreen") {
        $(":root").css("--colorFons", "black");
    }

    if (projectes[i].position == "fullWidth") {
        $(":root").css("--colorFons", "black");
    }

    if (projectes[i].position == "fullHeight") {
        $(":root").css("--colorFons", "black");
    }

}

//Funció per calcular l'amplada en el cas que la posició sigui center
 function calcWidth(width) {
    let array = width.split("/");
    let fraccion = array[0];
    let fraccion2= array[1];

    return ((fraccion/fraccion2)*100) + '%';
}

