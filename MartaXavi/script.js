//Avisar al usuario que no ha rellenado el campo "Name"

let usernameInput = document.getElementById("inputUsername");
usernameInput.addEventListener("focusout",() => {
    //valor que hay en el input(el texto)   
    
    let usernameText = usernameInput.value;
    if(usernameText === ""){
        usernameInput.classList.add("border-red");
        usernameInput.classList.remove("boder-green");
        mensaje();
    }else{
        usernameInput.classList.remove("boder-red"); 
        usernameInput.classList.add("border-green");   
    }
});

let emailInput = document.getElementById("inputEmail")
emailInput.addEventListener("focusout",() => {
    //valor que tenemos en el input del correo
    let emailText = emailInput.value;
    if(validateEmail(emailText)){
        emailInput.classList.remove("border-red-light");
        emailInput.classList.add("boder-green");
    }else{
        emailInput.classList.remove("boder-green");
        emailInput.classList.add("border-red-light");
        mensajeEmail();
    }    
});

/* document.getElementById("validationPassword").addEventListener("input", function(){
}); */


//Funciones

//Validador email
function validateEmail(email) {
    let emailInput = document.getElementById("inputEmail");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){      
       return true;
    }else{
       return false;
    }
}


//Funciones

//mensaje nombre
function mensaje(){
   let mensaje = document.getElementById("mensaje");
   mensaje.innerText="El campo nombre es obligatorio";   
}

//mensaje email
function mensajeEmail(){
    let mensaje = `Se debe escribir un email válido`;
    document.getElementById("mensajeEmail").innerText(mensaje);
}
//mensaje Password



//Funciones que validan password
function longValid(palabra){
    if(palabra.length >=8 && palabra.length<=15){
        return true;
    }
    return false;
} 

function minuscula(letra){
    return letra === letra.toLowerCase();
}

function mayuscula(letra){
    return letra === letra.toUpperCase();
}

function noNumero(letra){
    return isNaN(letra);
}
function specialCharacter(letra){
    let specialChars =  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    specialChars.forEach(letras => {
        if(letra === letras){
            return true;
        }
    });
    return false;
}

