let llistatCicles = [];

//clase cicle y su constructor
class Cicle{
    //numEdicions=0; es lo mismo meterlo aquí que dentro del constructor
    constructor(nom, categoria, numAlumnes, abreviatura){

        this.nom = nom;
        this.categoria = categoria;
        this.numAlumnes = numAlumnes;
        this.abreviatura = abreviatura;
        this.numEdicions = 0; //duda pregunta 1 y 2
        this.horaEdicion = null;
        this.arrayModuls = [];
    }

    //Función Número ediciones
    setNumEdicions(){
        this.numEdicions++;
        horaEdicion = new Date(); 
    }

    //Funcion toString
    toString(index){
        let str = `class="block p-6 mb-3 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${this.abreviatura.toUpperCase()}. ${this.nom}</h5>
                <h6 class="text-gray-700">${this.categoria}</h6>
                <p class="font-normal text-gray-700">Num d'alumnes: ${this.numAlumnes}</p>`
               
            this.arrayModuls.forEach(element =>{
                str += `<p class="font-normal text-blue-700"Mòduls: ${this.arrayModuls}</p>`
            })

       str +=` <button type="button" onClick="removeCicle(${index})" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Eliminar</button>
                <button type="button" onClick="editCicle(${index})" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Editar</button>
                <button type="button" onClick="calculHores(${index})" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Càlcul hores</button>`
            
        return str;
        //la parte del index la tengo que tocar y aún no sé qué
    }

    //Agregar Módulo
    agregaModul(modulo){
        this.arrayModuls.push(modulo);
        console.log(this.arrayModuls);
    }

}

/* ______________________________________________________________________*/

class Modul{
    constructor(num, nombre, horas){
        this.num = num;
        this.nombre = nombre;
        this.horas = horas;
    }
    toString(){
        return `-   MP${this.num}. ${this.nombre}. ${this.horas}.horas`;
    }
}

/*____________________________________________________________________________ */

function afegirCicle(){
    let nom = document.getElementById("cicle_nom").value;
    let categoria = document.getElementById("cicle_categoria").value;
    let numAlumnes = document.getElementById("cicle_alumnes").value;
    let abreviatura = document.getElementById("cicle_abr").value;

    let cicle = new Cicle(nom,categoria, numAlumnes,abreviatura);
    console.log(cicle);
    let valueEdit = document.getElementById("editCicle").value;
    if( valueEdit === "-1"){//para qué estás haciendo esto? en algún momento cambia el valor de -1?
        //Afegim el cicle al llistat
        llistatCicles.push(cicle);
    }else{
        //Editar cicle
        llistatCicles[valueEdit].nom = nom

        
        let ciclo = document.getElementById('cicle_nom');
        llistatCicles.forEach(function(element, index){
            opt.value = index;
            opt.text = element.nom;
            if(ciclo === opt.text){
                editCicle(index);
                //tengo que enviarle una posición del array de ciclos para que edite?Preguntar a Marta
                //accedir a l'objecte i cridar a la funció d'aquest
            }  
        });   
    }
    
    //Actualitzem el selector
    actualitzarSelector();

    //Printem la llista
    printLlistat(llistatCicles);

    //Netegem els formularis
    netejarFormularis();

    document.getElementById("editCicle").value=-1;
}

function afegirModul(){
    let cicle = document.getElementById("modul_cicle").value;
    let modul_nom = document.getElementById("modul_nom").value;
    let modul_num = document.getElementById("modul_num").value;
    let modul_hores = document.getElementById("modul_hores").value;

    let modul = {cicle: cicle, nom: modul_nom, num: modul_num, hores: modul_hores}
    console.log(modul);

    //Printem la llista
    printLlistat(llistatCicles);
   
    netejarFormularis();
}

//Funció per llistar els cicles
function printLlistat (llistat){
    let str="";
    llistat.forEach(function(element, index){
        str += element.toString(index);
    });

    document.getElementById("llistat").innerHTML=str;
}

//Funció per actualitzar el selector de cicles cada vegada que afegim un cicle
function actualitzarSelector(){
    let select = document.getElementById('modul_cicle');
    select.innerHTML = "";
    llistatCicles.forEach(function(element, index){
        let opt = document.createElement('option');
        opt.value = index;
        opt.text = element.nom;
        select.appendChild(opt);
    });
}

//Funció per eliminar un cicle
function removeCicle(i){
    
    llistatCicles.splice(i,0);
    //Igualo su valor a 0 pero tendría que hacer un innerchild. No estoy seguro, preguntar
}

//Funció per editar un cicle
function editCicle(i){
    document.getElementById("cicle_nom").value = llistatCicles[i].nom;
    document.getElementById("cicle_categoria").value = llistatCicles[i].categoria;
    document.getElementById("cicle_alumnes").value = llistatCicles[i].numAlumnes;
    document.getElementById("cicle_abr").value = llistatCicles[i].abreviatura;

    document.getElementById("editCicle").value=i;

}//Esta función me confunde. Le está pasando la posición del array donde está el ciclo que se va a editar pero no veo dnd debería estar ese for

//Funció per netejar els formularis
function netejarFormularis(){
    let inputs = document.getElementsByTagName("input");
    for (let i=0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

    let selects = document.getElementsByTagName("select");
    for (let i=0; i < selects.length; i++) {
        selects[i].value = 0;
    }
}