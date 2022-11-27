let palabra;
let partidasTotales;
let letrasTotales;
let letrasUsadas= [];
let palabraOculta;
let nuevaPalabra = [];
let partidasGanadas;
let partidasPerdidas;
let intentos = 0;

partidasTotales = window.localStorage.getItem('partidasTotales');

if (partidasTotales == null) {
    partidasTotales = 0;
} else {
    partidasTotales = parseInt(partidasTotales);
}

partidasGanadas = window.localStorage.getItem('partidasGanadas');

if (partidasGanadas == null) {
    partidasGanadas = 0;
} else {
    partidasGanadas = parseInt(partidasGanadas);
}

let PartidasPerdidas = window.localStorage.getItem('partidasPerdidas');

if (partidasPerdidas == null) {
    partidasPerdidas = 0;
} else {
    partidasPerdidas = parseInt(partidasPerdidas);
}


//FUNCIONES

function iniciarJuego() {
    //imagen ahorcado
    /* imagen.src = 'img/img0.png';  */
    //palabra que se adivina
    palabra = pedirPalabra();
    //palabra que se va descubriendo a medida que se adivinan letras
    palabraOculta = palabra;
    palabraOculta = palabraParaAdivinar(palabraOculta);
    //selecciona una letra
    activarTeclado();
    console.log("después de función");
    document.getElementById('img').classList.remove('hidden');  
}

function activarTeclado() {
    let abecedario = 'abcdefghijklmnñopqrstuvwxyz';
    let letrasEnPantalla = "";

    //let expresion = `<button onclick="seleccionLetra(${abecedario.charAt(i)})" id="${abecedario.charAt(i)}">`;

    for (let i = 0; i < abecedario.length; i++) {
        letrasEnPantalla += '<button type="button" class="mt-10 border border-gray-700 bg-white-700 text-black rounded-md px-4 py-2 m-2 transition duration-500 select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline" onclick="seleccionLetra(\'' + abecedario.charAt(i) + '\')">' + abecedario.charAt(i) + '</button>';
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

    palabraOculta.innerText = nuevaPalabra;

    return nuevaPalabra;

}

function seleccionLetra(letraSeleccionada) {

    console.log(letraSeleccionada);
    //Tengo que mirar como inabilitar letras una vez se han usado. Ahora me centro en la funcionalidad básica
     if(palabra.includes(letraSeleccionada)){
        descubrirLetra(letraSeleccionada, palabraOculta);

        
    }else{
        intentos++;
        let letraFallada = document.getElementById("lletresUtilitzades");
        letrasUsadas.push(letraSeleccionada);
        letraFallada.innerText = letrasUsadas;
        ahorcadoImg(intentos);

    }

    if(palabraOculta.join('') == palabra){
        alert('You won');
        partidasGanadas++;
        partidasTotales++;
        window.localStorage.setItem('partidasTotales', partidasTotales);
        window.localStorage.setItem('partidasGanadas', partidasGanadas);
        historial(partidasGanadas, partidasPerdidas);
        retry();
    }
    //tengo que activar la funcionalidad en pantalla.
    letrasTotales = letrasTotales + letraSeleccionada;
}

function descubrirLetra(letraSeleccionada, palabraOculta){
    for(let i = 0; i < palabra.length;i++){
        if(letraSeleccionada === palabra.charAt(i)){
            nuevaPalabra = document.getElementById("jocPenjat");
            palabraOculta[i] = letraSeleccionada;
            console.log(palabraOculta);
            nuevaPalabra.innerText = palabraOculta;           
        }
    }   
}

function retry() {
    intentos = 0;
    palabra ='';
    letrasUsadas = [];
    let reinicioLetras = document.getElementById('lletresUtilitzades');
    reinicioLetras.innerHTML = letrasUsadas;
    ahorcadoImg(intentos);
    let nuevoInicio =  document.getElementById('jocPenjat');
    palabra = '';
    nuevoInicio.innerText = palabra;
}

function ahorcadoImg(intentos) {
    if(intentos!=6){
        let image = document.getElementById('img');
        image.src = './img/penjat_'+intentos+'.png';
    }else{
        alert('Perdiste!La próxima será mejor ;)');
        partidasPerdidas++;
        partidasTotales++;
        window.localStorage.setItem('partidasTotales', partidasTotales);
        window.localStorage.setItem('partidasPerdidas', partidasPerdidas);
        historial(partidasGanadas, partidasPerdidas);
        retry();
    }
}

function destroy(){
        window.localStorage.clear();
      
}

function historial(partidasGanadas, partidasPerdidas) {
    partidasTotal= partidasGanadas + partidasPerdidas;
    partidasTotal= partidasGanadas + partidasPerdidas;
    document.getElementById("total").innerHTML = "Has jugado " + partidasTotales+"\n Has ganado "+ partidasGanadas + "que es un "+ partidasGanadas/partidasTotal*100 +
    "% \n Y ha perdido " + partidasPerdidas + " que es un "+ partidasPerdidas/partidasTotal*100 + "%";
    destroy();
  }

  function estadisticas(){
    let total = document.getElementById('jugadas');
    let win = document.getElementById('ganadas');
    let lost = document.getElementById('perdidas');
    total.innerText = partidasTotales;
    win.innerText = partidasGanadas;
    lost.innerText = partidasPerdidas;

}
