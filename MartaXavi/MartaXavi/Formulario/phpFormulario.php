<?php

session_start();

$cat = $_POST['animales'];

header("Content-type: application/json");
$con = new mysqli('localhost', 'sergio', 'sergio', 'm6m7');
    //ME CONECTO
$result = $con -> query("SELECT * FROM subcategoria where id_categoria=$cat");
    //echo "Conexion creada";
$subcategories = array();
while ($fila = $result->fetch_array()) {
    $dades_subcategoria = new stdClass();
    /* $dades_subcategoria->nombre = $row["nombre"];
    $dades_subcategoria->id = $row["id"]; */
    $dades_subcategoria = array("id"=>$fila[0], "nombre"=> $fila["nombre"]);
    array_push($subcategories, $dades_subcategoria);
};
$con->close();
echo json_encode($subcategories);
?>