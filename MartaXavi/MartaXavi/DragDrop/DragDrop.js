let img = [];

let dropArea = document.getElementById('area');
let dragDropText = document.getElementById('dragDropText');
let button = document.getElementById("boton");
let input = document.getElementById("input");
let previewImg = document.getElementById("preview");

let eventos = ['dragover','dragleave','drop'];

eventos.forEach(evt=>{
    dropArea.addEventListener(evt, prevDefault);
    //evito que la imagen que se arrastre, una vez dentro la img ocupe toda la pantalla
    dropArea.addEventListener(evt, function(e){  
        //Aplico la función a cada evento en lugar de hacer los eventos por separado.
        //Por una parte aplico el switch a cada uno y por otra cuando suceda llamo a la funcion prevent default
        switch(evt){
            case 'dragover':
                dropArea.classList.add('active');
                dragDropText.innerText='Depositar'
                break;
            case 'dragleave':
                dropArea.classList.remove('active');
                dragDropText.innerText='Aquí puedes añadir tus imágenes'
                break;
            case 'drop':
                /* let recojo = e.dataTransfer.files;
                las pongo dentro del array img
                img = Array.from(recojo);
                console.log("recojo el array"); */
                img = img.concat(Array.from(e.dataTransfer.files));
                showFiles();
                dropArea.classList.remove('active');
                dragDropText.innerText = 'Aquí puedes añadir tus imágenes';
                break; 
            default:
                break;
        }         
    });        
});

button.addEventListener("click", function(e){
    e.preventDefault();
    input.click()
});

input.addEventListener("change", function(e){
    img = img.concat(Array.from(input.files));
    console.log('Se ha concatenado bien ',img);
    showFiles(); 
});

//Funciones

function showFiles(){ 
    previewImg.innerHTML = '';

    const validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
        img.forEach((element,index) =>{
            const docType = element.type;
            if(validExtensions.includes(docType)){
                preview(element,index);
            }else{
                img.splice(index,1);
            }  
        })
}

function removeImg(i){
    img.splice(i,1);
    console.log(img);
    previewImg.innerHTML = '';
    console.log('The image has been deleted');
    showFiles();
    
}

function prevDefault(e){
        e.preventDefault();
}

function preview(image,index){
//declaro
    let reader = new FileReader();
//le digo que lea la imagen que le estamos pasando x parámetro
    reader.readAsDataURL(image)
    //De forma asíncrona va cargando la img, Cuando se haya cargado la imagen ejecutará lafunciónm
    reader.addEventListener("load", function () {

        let previewFile = `<div class="previewImage">
                            <img src="${this.result}"/>
                            <span onclick="removeImg(${index})" class=" ml-12 material-symbols-outlined removeBtn">X</span>
             </div>`;

            previewImg.innerHTML += previewFile;
      }, false);


}





    
    

