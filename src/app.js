/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generadorDeExcusas() {
  const quienes = ["El perro", "El gato", "El conejo", "El loro"];
  const acciones = ["Se comio", "Me rompio", "Le hizo caca", "Le hizo pis"];
  const objetos = ["la tarea", "las fotos", "el proyecto", "los archivos"];
  const lugares = [
    "en la sala",
    "en el parque",
    "en la cocina",
    "en el dormitorio"
  ];

  const quien = quienes[Math.floor(Math.random() * quienes.length)];
  const accion = acciones[Math.floor(Math.random() * acciones.length)];
  const objeto = objetos[Math.floor(Math.random() * objetos.length)];
  const lugar = lugares[Math.floor(Math.random() * lugares.length)];

  return `${quien} ${accion} ${objeto} ${lugar}.`;
}

window.onload = function() {
  document.getElementById("excuse").innerHTML = generadorDeExcusas();
};
