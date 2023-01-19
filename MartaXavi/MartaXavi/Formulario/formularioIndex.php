<?php
include "../functions.php";

?>
<?php
get_head();
get_header();
?>
<div>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
<link rel="stylesheet" href="../DragDrop/DragDrop.css">

    <form action="insert.php" method="POST" class="grid-cols-2 gap-4 border border-blue" id= "form" enctype="multipart/form-data">
        <label>Name:</label><br>
            <input type="text" name="nombre" class="border border-green"><br>
        <label>Category:</label><br>

                    <?php
                        $con = new mysqli('localhost', 'sergio', 'sergio', 'm6m7');
                        if ($mysqli->connect_error) {
                            die("Error de conexión");
                        }
  
                        $result = $con -> query("SELECT * FROM categoria");
                        
                        $options = "";
                        /*creo una variable donde almacenaré todos los option value, es */
                        while ($fila = $result->fetch_array()) {
                            $options = $options . '<option value="' . $fila["id"] . '">' . $fila["nombre"] . '</option>';
                            /*para sacar los resultados, recurro al while de sqli. Le digo que mientras haya
                            una fila en el resultado de la query, que siga el bucle. Creo una variable vacía
                            donde guado los resultados, concatenándolos.*/
                        };
                    ?>

        <select name="animales" id="compañia" class="border border-green" onchange="seleccionSubcategoria()">
            <?php echo $options; ?>
        </select><br>
        
        <label>Subcategory:</label><br>
            <select name="subcategorias" id="cat2" class="border border-green"></select><br>
        <label>Description:</label><br>
            <textarea name="descripcion" class="border border-green"></textarea><br>
        
        <label>Images:</label><br>
        <div class="drop-area" id= "area">
            <h2 id="dragDropText">Drag & Drop files</h2>
            <button id="boton">Upload files</button>
            <input type="file" name="inputFiles[]" id="input" hidden multiple />
        </div>
        <div id="preview"></div>  

        <input type="submit" value="Submit" class="border border-green">
    </form>
</div>
<a href="indexSelect.php">Quieres ver los animales que has agregado en la protectora</a>
<script src="jsFormulario.js"></script>
<script src="../DragDrop/DragDrop.js"></script>
<?php
get_footer();
?>


<!-- enctype="multipart/form-data"  -->