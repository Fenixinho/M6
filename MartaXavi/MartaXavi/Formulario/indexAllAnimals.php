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

//al ser una query que no requiere de entrada externa creo que no es necesario que la prepare
    $resultado = $con->query("SELECT a.nombre, a.descripcion, i.ruta from imagenes i join animales a on id_animal=a.id");

    while ($fila = $resultado->fetch_array()) { 
        echo '<div class="flex flex-col">';
        echo '<h3 class="text-2xl">'.$fila['nombre'].'</h3>'.'</br>';
        echo '<p class="text-base">'.$fila['descripcion'].'</p>'.'</br>';
        echo '<img src="'.$fila['ruta'].'" class="w-64 h-64">'.'</br>';
        }

$con->close();

?>

<div>
    <a href="indexAllAnimals.php">Quieres ver tus animales?</a>
</div>
<div>
    <a href="indexSelect.php">Quieres volver a tus animales?</a>
</div>

<?php
    get_footer();
?>
