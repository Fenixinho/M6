//variables boolanas que más ademlante usaré para verificar

let nameOk = false;
let emailOk = false;
let pswOk = false;
let psw2Ok = false;

let usernameInput = document.getElementById("inputUsername");
usernameInput.addEventListener("focusout",() => {
    //valor que hay en el input(el texto)   
    
    let usernameText = usernameInput.value;
    if(usernameText === ""){
        usernameInput.classList.remove("boder-green");
        usernameInput.classList.add("border-red");
        mensaje();
    }else{
        usernameInput.classList.remove("boder-red"); 
        usernameInput.classList.add("border-green");
        nameOk = true;   
    }
});

let emailInput = document.getElementById("inputEmail")
emailInput.addEventListener("focusout",() => {
    //valor que tenemos en el input del correo
    let emailText = emailInput.value;
    if(validateEmail(emailText)){
        emailInput.classList.remove("border-red-light");
        emailInput.classList.add("border-green");
        emailOk = true;

    }else{
        emailInput.classList.remove("border-green");
        emailInput.classList.add("border-red-light");
        mensajeEmail();
    }    
});

/* document.getElementById("validationPassword").addEventListener("input", function(){
}); */

//validador password
let pswInput = document.getElementById("inputPsw");
pswInput.addEventListener('input', (e) => { 
    let pswText = pswInput.value;
    let pattern1 = minuscula(pswText);
    let pattern2 = mayuscula(pswText);
    let pattern3 = noNumero(pswText);
    let pattern4 = specialCharacter(pswText);
    
    if(pattern1){
        document.getElementById("minusculaValido").classList.remove("text-red", "text-xs", "italic");
        document.getElementById("minusculaValido").classList.add("text-green","text-xs", "italic");
        pswOk = true;
    }
    
    if(pattern2){
        
        document.getElementById("mayusculaValido").classList.remove("text-red", "text-xs", "italic");
        document.getElementById("mayusculaValido").classList.add("text-green","text-xs", "italic");
        pswOk = true;
    }

    if(pattern3){
        document.getElementById("numeroValido").classList.remove("text-red", "text-xs", "italic");
        document.getElementById("numeroValido").classList.add("text-green","text-xs","italic");
        pswOk = true;
    }
    if(pattern4){
        document.getElementById("especialValido").classList.remove("text-red","text-xs","italic");
        document.getElementById("especialValido").classList.add("text-green","text-xs","italic");
        pswOk = true;
    }
    if(longValid(pswText)){
        document.getElementById("largoValido").classList.remove("text-red","text-xs","italic");
        document.getElementById("largoValido").classList.add("text-green","text-xs","italic");
        pswOk = true;
    }else{
        document.getElementById("mnsPws").classList.remove("text-red","text-xs","italic");
        document.getElementById("mnsPws").classList.add("text-green","text-xs","italic");
    }//Esto no está yendo, ya miraré

});

//conf psw

let confPswInput = document.getElementById("imptConfiPsw");
confPswInput.addEventListener('focusout', () => {

    if(cnfPsw()){
        document.getElementById("imptConfiPsw").classList.remove("border", "border-red-light");
        document.getElementById("imptConfiPsw").classList.add("border", "border-green-light");
        psw2Ok = true;
    }else{
        document.getElementById("imptConfiPsw").classList.remove("border", "border-green-light");
        document.getElementById("imptConfiPsw").classList.add("border", "border-red-light");
        psw2Ok = false;
    }
});

let form = document.getElementById("formRegistroUsuario");

form.addEventListener("submit", function(e){
    e.preventDefault();      
    //Validacions

    document.getElementById("formRegistroUsuario").submit();


    if(validates()){      
        //me da error aquí
    }
});

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

//mensaje nombre
function mensaje(){
   let mensaje = document.getElementById("mensaje");
   mensaje.innerText="Campo nombre obligatorio";   
}

function deleteMensaje(){
    let mensaje = document.getElementById("mensaje");
    mensaje.innerText="";
}

//mensaje email
function mensajeEmail(){
    let mensaje = document.getElementById("mensajeEmail");
    mensaje.innerText = "Email inválido";
}

function deleteMsnEmail(){
    let mensaje = document.getElementById("mensajeEmail");
    mensaje.innerText = "msnPws"; 
}

//mensaje password1
function mensajePsw(){
    let mns = document.getElementById("mnsPws");
    mns.innerText = "El o los requisitos de abajo siguen en rojo, para continuar, consigue que todos estén en verde"
}

function deleteMnsPsw(){
    let mns = document.getElementById("mnsPws");
    mns.innerText = "";
}

//Funciones que validan password
function longValid(word){
    if(word.length >=8 && word.length<=15){
        return true;
    }
    return false;
} 

function minuscula(word){
    let lowerCaseLetters = /[a-z]/g;
    return lowerCaseLetters.test(word);
    
}

function mayuscula(word){
    let upperCaseLetters = /[A-Z]/g;
    return upperCaseLetters.test(word);
}

function noNumero(word){
    let numbers = /[0-9]/g;
    return numbers.test(word);
}

function specialCharacter(word){
    let specialChars =  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(word);
}

//confirmar psw
function cnfPsw(){
    let psw = document.getElementById("inputPsw").value;
    let cnfPsw = document.getElementById("imptConfiPsw").value;
    return psw===cnfPsw;
}

//validar valores registro

function validates(){
    if(nameOk== true && emailOk == true && pswOk == true && psw2Ok == true){
        return true;
    }
    return false;
}