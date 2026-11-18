/* =======================================================
        TRIVIA DE KATSEYE
        Creado especialmente para Estre 💜
======================================================= */


/* =======================================================
        TODAS LAS PREGUNTAS
======================================================= */

const preguntas = [

{
    pregunta: "¿Cuántas integrantes tiene KATSEYE?",

    respuestas: [
        "5",
        "6",
        "7",
        "8"
    ],

    correcta: 1
},

{
    pregunta: "¿En qué año debutó KATSEYE?",

    respuestas: [
        "2022",
        "2023",
        "2024",
        "2025"
    ],

    correcta: 2
},

{
    pregunta: "¿Quién es la integrante de Filipinas?",

    respuestas: [
        "Sophia",
        "Megan",
        "Lara",
        "Daniela"
    ],

    correcta: 0
},

{
    pregunta: "¿Cuál de estas canciones pertenece a KATSEYE?",

    respuestas: [
        "Touch",
        "Butter",
        "How You Like That",
        "Cupid"
    ],

    correcta: 0
},

{
    pregunta: "¿Quién nació en Corea del Sur?",

    respuestas: [
        "Yoonchae",
        "Sophia",
        "Manon",
        "Daniela"
    ],

    correcta: 0
},

{
    pregunta: "¿Quién nació en Suiza?",

    respuestas: [
        "Sophia",
        "Manon",
        "Megan",
        "Yoonchae"
    ],

    correcta: 1
},

{
    pregunta: "¿Quién nació en Hawái?",

    respuestas: [
        "Lara",
        "Daniela",
        "Megan",
        "Sophia"
    ],

    correcta: 2
},

{
    pregunta: "¿Qué género musical hace principalmente KATSEYE?",

    respuestas: [
        "Pop",
        "Rock",
        "Jazz",
        "Reggaetón"
    ],

    correcta: 0
},

{
    pregunta: "¿Cuántos países están representados en KATSEYE?",

    respuestas: [
        "4",
        "5",
        "6",
        "7"
    ],

    correcta: 2
},

{
    pregunta: "¿Cómo se llama el grupo?",

    respuestas: [
        "Dreamcatcher",
        "KATSEYE",
        "LE SSERAFIM",
        "NewJeans"
    ],

    correcta: 1
}

];


/* =======================================================
        VARIABLES
======================================================= */

// Guarda la pregunta actual
let preguntaActual = 0;

// Guarda el puntaje
let puntaje = 0;


/* =======================================================
        CONECTA CON EL HTML
======================================================= */

const pregunta =
document.getElementById("pregunta");

const respuestas =
document.getElementById("respuestas");

const siguiente =
document.getElementById("siguiente");

const mensaje =
document.getElementById("mensaje");

const puntajeTexto =
document.getElementById("puntaje");

const numeroPregunta =
document.getElementById("numeroPregunta");

const resultadoFinal =
document.getElementById("resultadoFinal");

const resultado =
document.getElementById("resultado");

const fraseFinal =
document.getElementById("fraseFinal");


/* =======================================================
        FUNCIÓN QUE MUESTRA LA PREGUNTA
======================================================= */

function mostrarPregunta() {

    // Borra las respuestas de la pregunta anterior
    respuestas.innerHTML = "";

    // Borra el mensaje de correcta o incorrecta
    mensaje.innerHTML = "";

    // Actualiza el número de pregunta
    numeroPregunta.innerHTML =
    "Pregunta " + (preguntaActual + 1) + " de " + preguntas.length;

    // Actualiza el puntaje
    puntajeTexto.innerHTML =
    "⭐ Puntaje: " + puntaje + " / " + preguntas.length;

    // Muestra la pregunta
    pregunta.innerHTML =
    preguntas[preguntaActual].pregunta;

    // Recorre todas las respuestas
    preguntas[preguntaActual].respuestas.forEach((texto, indice)=>{

        // Crea un botón
        const boton = document.createElement("button");

        // Agrega el estilo del CSS
        boton.classList.add("respuesta");

        // Escribe el texto
        boton.innerHTML = texto;

        // Cuando hacen clic
        boton.onclick = ()=> comprobarRespuesta(indice, boton);

        // Agrega el botón al HTML
        respuestas.appendChild(boton);

    });

}


/* =======================================================
        COMPRUEBA LA RESPUESTA
======================================================= */

function comprobarRespuesta(indice, boton){

    // Desactiva todos los botones
    const botones =
    document.querySelectorAll(".respuesta");

    botones.forEach(b=>{

        b.disabled = true;

    });


    // Si acertó
    if(indice === preguntas[preguntaActual].correcta){

        boton.style.background = "green";

        mensaje.innerHTML =
        "✅ ¡Correcto!";

        puntaje++;

    }

    // Si se equivocó
    else{

        boton.style.background = "crimson";

        mensaje.innerHTML =
        "❌ Incorrecto";

        // Marca cuál era la correcta
        botones[preguntas[preguntaActual].correcta]
        .style.background = "green";

    }

}




/* =======================================================
        BOTÓN SIGUIENTE
======================================================= */

// Cuando el usuario hace clic en "Siguiente"
siguiente.onclick = function(){

    // Si todavía quedan preguntas
    if(preguntaActual < preguntas.length - 1){

        // Pasa a la siguiente pregunta
        preguntaActual++;

        // Muestra la nueva pregunta
        mostrarPregunta();

    }

    // Si ya no quedan preguntas
    else{

        // Oculta la caja de la trivia
        document.querySelector(".trivia").style.display = "none";

        // Muestra la pantalla final
        resultadoFinal.style.display = "block";

        // Muestra el puntaje obtenido
        resultado.innerHTML =
        "Obtuviste " + puntaje + " de " + preguntas.length + " puntos.";

        // Mensaje según el puntaje
        if(puntaje == 10){

            fraseFinal.innerHTML =
            "🏆 ¡INCREÍBLE! Sos una verdadera fan de KATSEYE. 💜";

        }

        else if(puntaje >= 8){

            fraseFinal.innerHTML =
            "🌟 ¡Muy bien! Sabés muchísimo sobre KATSEYE.";

        }

        else if(puntaje >= 6){

            fraseFinal.innerHTML =
            "💜 ¡Buen trabajo! Te falta muy poquito para saberlo todo.";

        }

        else{

            fraseFinal.innerHTML =
            "✨ Seguí practicando y volvé a intentarlo.";

        }

    }

}


/* =======================================================
        INICIA LA TRIVIA
======================================================= */

// Muestra la primera pregunta apenas abre la página
mostrarPregunta();