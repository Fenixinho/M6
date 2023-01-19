<?php

session_start();

$idAnimal= $_POST['idUpdate'];

//Select

$con = new mysqli('localhost', 'sergio', 'sergio', 'm6m7');
if ($mysqli->connect_error) {
    die("Error de conexión");
}

$sql = "SELECT a.nombre, a.descripcion, i.ruta from imagenes i join animales a on i.id_animal=a.id where a.id=?";

$stmt = $con->prepare($sql);
$stmt->bind_param('i', $idAnimal);

// Ejecutar consulta
$stmt->execute();

// Recoger resultado
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {  

      
        echo '<div class="flex flex-col">';
        echo '<h3 class="text-2xl">'.$row['nombre'].'</h3>'.'</br>';
        echo '<p class="text-base">'.$row['descripcion'].'</p>'.'</br>';
        echo '<img src="'.$row['ruta'].'" class="w-64 h-64">'.'</br>';
        echo '<form action="edit.php" method="POST"> 
            <input type="text" class="bg-red-500 text bluep-2" name="nombre" value="'.$row['nombre'].'">
            <input type="text" class="bg-red-500 text bluep-2" name="descripcion" value="'.$row['descripcion'].'">
            <input type="hidden" value ="'.$idAnimal.'" name ="idAn">
            <button type="submit" class="bg-red-500 text-red p-2">Modificar</button>
            </form>';
    }

} else {
echo "No se ha encontrado ningún animal";
}

$con->close();
?>