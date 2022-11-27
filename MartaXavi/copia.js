//Avisar al usuario que no ha rellenado el campo "Name"

let usernameInput = document.getElementById("inputUsername");
usernameInput.addEventListener("focusout",() => {
    //valor que hay en el input(el texto)   
    console.log("Aquí entra");
    let usernameText = usernameInput.value;
    if(usernameText === ""){
        usernameInput.classList.add("border-red");
        usernameInput.classList.remove("boder-green");
        //mensaje();
        console.log("Estoy dentro del input vacío");
    }
    
    if(!usernameText === ""){
        usernameInput.classList.add("border-green");
        usernameInput.classList.remove("boder-red"); 
        console.log("No está vacío");   
    }
});

/* let emailInput = document.getElementById("inputEmail")
emailInput.addEventListener("focusout",() => {
    //valor que tenemos en el input del correo
    let emailText = emailInput.value;
    if(validateEmail(emailText)){
        emailInput.classList.add("boder-green");
        emailInput.classList.remove("border-red");
    }else{
        //mensajeEmail();
    }    
});

document.getElementById("validationPassword").addEventListener("input", function(){
}) */







/* let pswInput = document.getElementById("inputPsw");
pswInput.addEventListener('input', (e) => { 
    let pswText = pswInput.value;
    let pattern1 = minuscula("e");
    let pattern2 = mayscula("e");
    let pattern3 = noNumero("e");
    let pattern4 = specialCharacter("e");
    
    if(pattern1){
       
    }else{
    }
    if(pattern2){

    }
    if(!pattern3){

    }
    if(pattern4){

    }
});



let pattern = longValid(document.getElementById("pswInput"));
if(pattern.length >=8 && pattern.length <=15){
    pass
} 



    





//validador de email
function validateEmail(email) {
    let emailInput = document.getElementById("inputEmail");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){      
       return true;
    }else{
       return false;
    }
}

