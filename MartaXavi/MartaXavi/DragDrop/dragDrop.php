<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="DragDrop.css">
    <title>Drag&Drop</title>
</head>
<body>
        <div class="drop-area" id= "area">
            <h2 id="dragDropText">Drag & Drop files</h2>
            <button id="boton">Upload files</button>
            <input type="file" name="inputFiles[]" id="input" hidden multiple />
        </div>
    <div id="preview"></div>

    <script src="DragDrop.js"></script>
</body>
</html>