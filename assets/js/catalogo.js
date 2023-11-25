document.addEventListener('DOMContentLoaded', (event) => {
    // Primero, seleccionamos todos los botones
    let botones = document.querySelectorAll('.boton-cat');

    // Luego, añadimos un event listener a cada botón
    botones.forEach((boton) => {
        boton.addEventListener('click', () => {
            // Cuando se hace click en un botón, primero ocultamos todos los divs

            let divs = document.querySelectorAll('div[class^="contenedor-celulares-"]');
            divs.forEach(div => {
                div.style.display = 'none';
            });
            // Luego, mostramos el div correspondiente al botón clickeado
            let target = boton.getAttribute('data-target');
            let divMostrar = document.querySelector('.' + target);
            if (divMostrar) {
                divMostrar.style.display = 'flex';
                let elementos = document.getElementsByClassName('fondo-espera');
                for (let i = 0; i < elementos.length; i++) {
                    elementos[i].style.display = 'none';
                }
            }
        });
    });
});
