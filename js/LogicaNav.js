const screen = document.getElementById('screen');

function changeChannel(view){
    //añade efectos de estatica visual
    fetch(`${view}.html`)
        .then(response => response.text())
        .then(html => {
            screen.innerHTML = html;
            //reiniciar los scripts especificos segun la vista si es neecesario
        });
}

function cambiarCanal(canal) {
    const contenedor = document.getElementById('contenido-dinamico');
    // la animacion de estatica del ctr
    document.getElementById('pantallactr').style.opacity = 0.5;
    fetch(`${canal}.html`)
        .then(response => response.text())
        .then(data => {
            setTimeout(() => {
                contenedor.innerHTML = data;
                document.getElementById(pantallactr).style.opacity= "1";
            }, 300);
        })
        .catch(err => console.error("error al sincronizar:", err));
}