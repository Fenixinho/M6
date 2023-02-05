<?php

    session_start();
    
    $nombre = $_POST['nombre'];
    $descripcion =$_POST['descripcion'];
    $categoria = $_POST['animales'];
    $subcategoria =  $_POST['subcategorias'];

    $id_user = $_SESSION['id'];

    echo $id_user;

    $categoria = intval($categoria);
    $subcategoria = intval($subcategoria);

    $dir_subida ='../uploads/';
     
    for ($i=0; $i<count($_FILES["inputFiles"]['name']); $i++) {
        $fichero_subido = $dir_subida.basename($_FILES['inputFiles']['name'][$i]);

        if(move_uploaded_file($_FILES['inputFiles']['tmp_name'][$i],$fichero_subido)){
            echo "El fichero es válido y se subió con éxito.";
        }else {
            echo "Ha habido un error";
        }        
    } 
    
    $con = new mysqli('localhost', 'sergio', 'sergio', 'm6m7');

    if (!$con) {
        echo "Error: No se pudo conectar a MySQL.";
        exit;
    }

    $consulta = "INSERT INTO animales(nombre, descripcion, id_categoria, id_subcategoria, idUsuario)
    VALUES (?, ?, ?, ?, ?)";

    $insert =$con->prepare($consulta);

    $insert->bind_param("ssiii",$nombre,$descripcion,$categoria,$subcategoria,$id_user); 

    $insert->execute();

    $idAnimal = mysqli_insert_id($con);


    echo "Todo ha ido bien";

    //insert de imágenes

    $consultaIMG = "INSERT INTO imagenes(ruta, id_animal)
    VALUES (?, ?)";
    $insertIMG = $con->prepare($consultaIMG);
    $insertIMG->bind_param ("si",$fichero_subido,$idAnimal);
    $insertIMG->execute();

    echo $fichero_subido;

    //insert
    $con->close();
    
    header("location:formularioIndex.php");
?>