<?php
include "../functions.php";
?>
<?php
get_head();
get_header();
?>
<div>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

<?php
    session_start();
    $id_user = $_SESSION['id'];

    $con = new mysqli('localhost', 'sergio', 'sergio', 'm6m7');
            if ($mysqli->connect_error) {
                die("Error de conexión");
            }

    //con esta query saco todos los animales cuyo id es igual a id_animal en imágenes:

    //select nombre, descripcion, id_categoria, id_subcategoria, ruta from imagenes join animales on id_animal=animales.id;


// Consulta para recoger todos los animales que un usuario haya puesto en adpopción
$sql = "SELECT a.id, a.nombre, a.descripcion, i.ruta from imagenes i join animales a on id_animal=a.id where idUsuario=?";

$stmt = $con->prepare($sql);
$stmt->bind_param('i', $id_user);

// Ejecutar consulta
$stmt->execute();

// Recoger resultado
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {  
          
        

        echo '<div class="flex flex-col">';
        echo '<h3 class="text-2xl">'.$row['nombre'].'</h3>'.'</br>';
        echo '<p class="text-base">'.$row['descripcion'].'</p>'.'</br>';
        echo '<img src="'.$row['ruta'].'" class="w-64 h-64">'.'</br>';
        echo '<form action="delete.php" method="POST">
               <input type="hidden" class="bg-red-500 text bluep-2" name="id" value="'.$row['id'].'">
               <button type="submit" class="bg-red-500 text-red p-2">Eliminar animal</button>
               </form>';
        echo '<form action="update.php" method="POST"> 
               <input type="hidden" class="bg-red-500 text bluep-2" name="idUpdate" value="'.$row['id'].'">
               <button type="submit" class="bg-red-500 text-red p-2">Modificar</button>
               </form>';
             
    }
} else {
        echo "No se ha encontrado ningún animal";
    }


$con->close();

?>
<div>
<a href="indexAllAnimals.php">Quieres ver todos los animales que tenemos en nuestra Asociación?</a>
<div> </div>

<?php
    get_footer();
?>
