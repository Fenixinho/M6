<?php
    session_start();
    $id = $_POST['id'];

    $con = new mysqli('localhost', 'sergio', 'sergio', 'm6m7');

  if (!$con) {
      echo "Error: No se pudo conectar a MySQL.";
      exit;
  }

  echo "viendo donde las cosas se pierden";
    
    //Elimino primero por dependencias
    $deleteImg = $con->prepare("DELETE FROM imagenes where id_animal=?");
    $deleteImg->bind_param("i",$id);
    $deleteImg->execute();

    //Eliminamos animal
    $stmt = $con->prepare("DELETE FROM animales WHERE id=?");

    $stmt->bind_param("i", $id);
    $stmt->execute();

    $con->close();

    header("location:indexSelect.php");

?>
