//VARIABLES GLOBALES DEL JUEGO

let palabra;
//palabra del juego

let palabrasTotales;

let letrasTotales;
//usadas en cada juego, para la imagen del ahorcado

//String donde guardo palabra para juego. Tendré que cambiar código y eliminar esta por innecesaria si hago todo con arrays.
let palabraOculta;

//array donde guardo la palabra oculta y la cambio. Veo más rápido y sencillo hacerlo así.
let nuevaPalabra = [];


//Variables para estadísticas 2 

partidasTotales = window.localStorage.getItem('partidas');

if (partidasTotales == null) {
    partidasTotales = 0;
} else {
    partidasTotales = parseInt(partidasTotales);
}

let ganadas = window.localStorage.getItem('ganadas');

if (ganadas == null) {
    ganadas = 0;
} else {
    ganadas = parseInt(ganadas);
}

let perdidas = window.localStorage.getItem('perdidas');

if (perdidas == null) {
    perdidas = 0;
} else {
    perdidas = parseInt(perdidas);
}


//FUNCIONES

function iniciarJuego() {
    //palabra que se adivina
    palabra = pedirPalabra();
    //palabra que se va descubriendo a medida que se adivinan letras
    let palabraOculta = palabra;
    palabraOculta = palabraParaAdivinar(palabraOculta);

    //selecciona una letra
    activarTeclado();
}


function activarTeclado() {
    let abecedario = 'abcdefghijklmnñopqrstuvwxyz';
    let letrasEnPantalla = "";

    for (let i = 0; i < abecedario.length; i++) {
        letrasEnPantalla += '<button type="button" class="mt-10 border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline" onclick="seleccionLetra(\'' + abecedario.charAt(i) + '\')">' + abecedario.charAt(i) + '</button>';
    }
    let letras = document.getElementById("abecedario");

    letras.innerHTML = letrasEnPantalla;
}


function pedirPalabra() {

    return prompt("Qué palabra se va a adivinar?");
}


function palabraParaAdivinar(palabraOculta) {

    for (let i = 0; i < palabra.length; i++) {
        nuevaPalabra[i] = "_";
    }

    palabraOculta = document.getElementById("jocPenjat");

    console.log(palabraOculta);

    palabraOculta.innerText = nuevaPalabra.join(" ");

    console.log(nuevaPalabra);

    nuevaPalabra = palabraOculta.split('');

    console.log(nuevaPalabra[0] + nuevaPalabra[1]);

    return nuevaPalabra;

}


function seleccionLetra(letraSeleccionada) {

    console.log(letraSeleccionada);

    //Tengo que mirar como inabilitar letras una vez se han usado. Ahora me centro en la funcionalidad básica

    
     if(palabra.includes(letraSeleccionada)){
        descubrirLetra(letraSeleccionada, palabraOculta);
    }

    //tengo que activar la funcionalidad en pantalla.
    letrasTotales = letrasTotales + letraSeleccionada;
}


function descubrirLetra(letraSeleccionada, palabraOculta){
    for(let i = 0; i < palabra.length;i++){
        if(letraSeleccionada === palabra.charAt(i)){
            palabraOculta.charAt(i) = letraSeleccionada;
            console.log(palabraOculta);
        }
    }   
}

/* 
1.-comparo letra con letras que hay en palabra a adivinar.
2.-Si existe la letra miro en qué posición está
3.-Pongo la letra en la posición que le toca en palabra */