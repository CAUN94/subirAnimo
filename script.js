let actual = 1;

function verificarRespuesta() {
    let respuestaCorrecta = ["Pez Dorado", "Porque su memoria dura 10 seg","Yo tengo un sueño","Zorrito del Desierto","7 años","El sutil arte de que te importe un carajo","Coco","Porque te quiero"];  // Respuestas correctas para cada pregunta
    let respuesta = document.querySelector(`input[name="q${actual}"]:checked`);

    if (respuesta && respuesta.value == respuestaCorrecta[actual - 1]) {
        mostrarSiguiente();
    } else {
        alert('Respuesta incorrecta, intenta de nuevo.');
    }
}

function mostrarSiguiente() {
    let siguiente = actual + 1;
    let pistaActual = document.getElementById(`pista${actual}`);
    let pistaSiguiente = document.getElementById(`pista${siguiente}`);

    if (pistaSiguiente) {
        pistaActual.style.display = 'none';
        pistaSiguiente.style.display = 'block';
        actual++;
    } else {
        alert('Tomale un pantallazo a esto y puedes usarlo como un ticket para pedirme un abrazo cuando quieras.');
    }
}
