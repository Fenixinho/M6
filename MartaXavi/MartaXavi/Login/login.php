<?php
session_start();


$mail = $_POST['user'];
$password = $_POST['psw'];

$con = new mysqli('localhost', 'sergio', 'sergio', 'm6m7');

  if (!$con) {
      echo "Error: No se pudo conectar a MySQL.";
      exit;
  }

if(usuarioExiste($con,$mail,$password)){

    echo("El usuario está registrado, ya puedes acceder a nuestra página");
    $con->close();
    header("location:../Formulario/formularioIndex.php");

}else{

    echo("Este usuario no existe,prueba de nuevo");
}

echo "Todo ha ido 'bien', cerramos la conexión";



function usuarioExiste($con,$mail,$password){
    
    $idUser='';
    $passHash='';

    $consulta = $con->prepare("SELECT id,pass from users where email=?");

    
    $consulta->bind_param("s",$mail);

    $consulta->execute();
    
    $consulta->bind_result($idUser,$passHash);

    if($consulta->fetch()){
        print_r($passHash .  "<br>");
        print_r($idUser. "<br>");
        session_start();
        echo "sesión iniciada".'<br>';
        $_SESSION["id"] = $idUser;
        return true;
    }
    echo "no existeix l'usuari";
    return false;
}
?>