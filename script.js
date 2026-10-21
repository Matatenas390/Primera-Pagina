// Front-end.js
// Interactividad del portal: botón "Conoce Más"

function Conocer() {
  const bloque = document.getElementById("mas-info");
  const boton = document.getElementById("conocer");

  bloque.hidden = !bloque.hidden;
  boton.textContent = bloque.hidden ? "Conoce Más 👀" : "Mostrar Menos 🙈";
}
