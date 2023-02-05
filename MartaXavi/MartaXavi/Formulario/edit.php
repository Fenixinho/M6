<?php
    session_start();
    $nombreAnimal = $_POST['nombre']; 
    $desAnimal = $_POST['descripcion'];
    $animalID = $_POST['idAn'];

    echo $nombreAnimal;
    echo $desAnimal;

    $con = new mysqli('localhost', 'sergio', 'sergio', 'm6m7');
            if ($mysqli->connect_error) {
                die("Error de conexión");
            }

// Consulta para recoger todos los animales que un usuario haya puesto en adpopción
$sql = "UPDATE animales SET nombre=?, descripcion=? where id=?";


$stmt = $con->prepare($sql);
$stmt->bind_param('ssi', $nombreAnimal,$desAnimal,$animalID);

// Ejecutar consulta
$stmt->execute();

$con->close();

 header("location:indexSelect.php");


?>