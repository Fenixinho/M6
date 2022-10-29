// POKEMONS
//VARIABLES GLOBALES

let dades;
let contenidoTabla = document.getElementById("content_table");
let arrayPokemons = [];
let arrayLabels =[];
let arrayDadesGraf =[];
let backgroundColor =[];
let borderColor =[];
let resultadoBusqueda=[];
let sumaPesos = 0;
/* let Objectpokemons = {id,
                nombre,
                img,
                height}; */ 


// POKEMONS

fetch("data/pokemon.json")
.then((response) => response.json())
.then((data) => {
    dades = data.pokemon;

    dades.forEach(pokemon=>{
        let pok = [pokemon.id, pokemon.name, pokemon.height,pokemon.img];
        arrayPokemons.push(pok);
        //He creado un array de 3 dimensiones. Cuidado.
        pokemon.type.forEach(type=>{
            if(!arrayLabels.includes(type)){
                arrayLabels.push(type);
                arrayDadesGraf.push(0);
                //Cada vez q pasa por aquí pushea un 0
            }

            //Buscar l'índex
            let index = arrayLabels.indexOf(type);
            arrayDadesGraf[index]++;
        })
    })
   
    //console.table(arrayDadesGraf);//luego este me interesa
    printList(dades);
});

//FUNCIONES

//reiniciar
function refresh(){
    location.reload();
}
//mostrar lista pokemons
function printList(llista){
    contenidoTabla.innerHTML="";
    llista.forEach(pokemon => {
        let fila = document.createElement("tr");
        //creo fila
        let tdId = document.createElement("td");
        //creo elemento tdid
        tdId.innerHTML= pokemon.id;
        /**pongo contenido a la variable que he creado */
        fila.appendChild(tdId);
        /**Le digo donde va , en este caso le digo q es hijo de esta fila*/
        let tdName = document.createElement("td");
        tdName.innerHTML = pokemon.name;
        fila.appendChild(tdName);

        let tdWeaknesses = document.createElement("td");
        tdWeaknesses.innerHTML = pokemon.height;
        fila.appendChild(tdWeaknesses);
       
        let tdImage = document.createElement("td");
        tdImage.innerHTML = `<img src="${pokemon.img}"/>`;
        fila.appendChild(tdImage);
        tdImage.classList.add("flex");
        tdImage.classList.add("justify-center");

       
        contenidoTabla.appendChild(fila);
        /*la fila está dentro de contenido tabla. Cojo toda la fila y la pongo dentro de contenido tabla, para seguir con la siguiente */
    });
}

//ordenar
function orderList(tipoOrden){

   
    if(tipoOrden === "Desc"){

        dades.reverse();
        console.log(dades);
       
    }

    if(tipoOrden === "Asce"){//No está ordenado,preguntar.
       
        dades.reverse();
        console.log(dades);
       
    }

    printList(dades);
}

//Calcula media
function calcMitjana(){//en ejemplo calcula media de peso
    //toFixed(2)//para que coja sólo 2 decimales
    let contador = 0;
    let newPeso = 0;
    let mediaPeso = 0;

	arrayPokemons.forEach(pokemon=>{
        newPeso = pokemon[2].substring(0,4);
        newPeso = Number.parseFloat(newPeso);
		sumaPesos = sumaPesos + newPeso;  
		contador = contador + 1;
	})
    document.getElementById("media"); 
    mediaPeso = (sumaPesos/contador).toFixed(2);
    media.innerHTML = mediaPeso;
}

//Mostrar gráfico
function showGraph(){
    //document.getElementById("chart-container").style.display("");//me falta ponerle algo dentro. LUego tengo que hacer lo mismo con otro para que empiece estando escondido
   
    let buscaTable = document.getElementById("buscaTable");
    buscaTable.classList.add("hidden");
    arrayLabels.forEach(nuevoColor=>{
        let r = Math.random()*256;
        let g = Math.random()*256;
        let b = Math.random()*256;
        backgroundColor.push("rgba("+r+","+g+","+b+",0.3)");
        borderColor.push("rgb("+r+","+g+","+b+")");
    });

    const data = {
        labels: arrayLabels,
        datasets: [{
            label: 'My First Dataset',
            data: arrayDadesGraf,
            backgroundColor: [
           
            ],
            borderColor: borderColor,
            backgroundColor: backgroundColor,
        }]
    };

    const config = {
        type: 'polarArea',
        data: data,
        options: {}
      };

      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
}

function showTable(){
	location.reload();
}

//Buscador  
let inputSearch = document.getElementById('txtSearch');
inputSearch.addEventListener('input', (e) => {
    let arraySearch = arrayPokemons.filter(function(element){
        return element[1].toLowerCase().includes(inputSearch.value.toLowerCase());
    });
    console.log(arraySearch);
    printList(arraySearch)
}); 