const screen = document.getElementById('screen');



let anguloPerilla = 0;

function cambiarCanal(canal) {
    const contenedor = document.getElementById('contenedor-dinamico');
    const pantalla = document.getElementById('pantallactr');
    const perilla = document.querySelector('.perilla');

    pantalla.style,opacity = "0.5"
    pantalla.style.filter= "constrats(150%) brightness(2) blur(10px)";
    
    anguloPerilla += 45;
    if(perilla) perilla.style.transform = `rotate(${anguloPerilla}deg)`;

    //document.getElementById('pantallactr').style.opacity = 0.5;
    fetch(`             /${canal}.html`)
        .then(response => {
            if (!response.ok) throw new  Error('Canal no encontrado');
            return response.text();
        })
        .then(data => {
            setTimeout(() => {
                if (contenedor) {
                    contenedor.innerHTML = data;
                }
                if (pantalla) {
                    
                    pantalla.style.opacity = "1";
                    pantalla.style.filter = "none";
                }
            }, 100);
        })
        .catch(err => {
            console.error("error al sincronizar:", err);
            contenedor.innerHTML = "<div style='color:white;text-align:center;'><h1>SIN SEÑAL</h1><p>404 NOT FOUND</p></div>";
            pantalla.style.opacity = "1";
            pantalla.style.filter = "none"; 
        });
}