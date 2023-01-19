<?php
$nombre = $_POST['fullname'];
$mail = $_POST['email'];
$x = $_POST['password'];

  $con = new mysqli('localhost', 'sergio', 'sergio', 'm6m7');

  if (!$con) {
      echo "Error: No se pudo conectar a MySQL.";
      exit;
  }

  if(!existeUsuario($con, $mail)){
      registrarUsuario($con,$nombre, $mail, $x);
      $con->close();
      header("location:../Login/index.php");

  }else {
      echo "este usuario ya existe";
  }

  //FUNCIONES

  function registrarUsuario($con,$nombre,$mail,$x){
      
      $consulta = "INSERT INTO users (nombre, email, pass) VALUES (?, ?, ?)";

      $insert =$con->prepare($consulta);
    
      $psw = password_hash($x, PASSWORD_DEFAULT);
        
      $insert->bind_param("sss", $nombre, $mail, $psw);
        
      $insert->execute();
  }

  function existeUsuario($con, $mail){
  
    $consulta = "SELECT count(*) from users where email=?";

    $resultado = $con->prepare($consulta);
    
    if($resultado > 0){return false;}
    
        return true;
  }
?>