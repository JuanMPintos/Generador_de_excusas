/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generadorDeExcusas() {
  const QUIENES = ["El perro", "El gato", "El conejo", "El loro"];
  const ACCIONES = ["Se comio", "Me rompio", "Le hizo caca", "Le hizo pis"];
  const OBJETOS = ["la tarea", "las fotos", "el proyecto", "los archivos"];
  const LUGARES = ["en la sala", "en el parque", "en la cocina", "en el dormitorio"];

  const QUIEN = QUIENES[Math.floor(Math.random() * QUIENES.length)];
  const ACCION = ACCIONES[Math.floor(Math.random() * ACCIONES.length)];
  const OBJETO = OBJETOS[Math.floor(Math.random() * OBJETOS.length)];
  const LUGAR = LUGARES[Math.floor(Math.random() * LUGARES.length)];

  return `${QUIEN} ${ACCION} ${OBJETO} ${LUGAR}`;
}

window.onload = function() {
  document.getElementById("excuse").innerHTML = generadorDeExcusas();
}
