//Funciones
function seleccionSubcategoria() {
    let cat = document.getElementById("compañia").value;
    console.log("Valor que recojo " + cat);

    let formData = new FormData();
    formData.append("animales", cat);
    /*eL NOMBRE de la variable animales tiene que se igual al nombre que haya puesto en el post php,
    no del id del index.php o nombre. El nombre se rocoje en desde el submit una vez se envían datos*/

    console.log(formData);
    //recojo el valor que se ha escogido.

    let options = {
        method: 'POST',
        body: formData
    }

    fetch("./phpFormulario.php", options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            document.getElementById('cat2').innerHTML = "";
            //así lo limpio cada vez y no se acumulan

            data.forEach(e => {
                option = document.createElement('option');
                option.value = e.id;
                option.text = e.nombre;
                document.getElementById('cat2').appendChild(option);

            });
        })
        .catch((error) => {
            console.log("Algo no ha ido bien...");

        });
}

let form = document.getElementById('form');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const dataTransfer = new DataTransfer();

    img.forEach(file => {
        dataTransfer.items.add(file);
    })
    input.files = dataTransfer.files;

    console.log("Veamos si imprimimos algo de las imágenes", img);

    form.submit();
});

