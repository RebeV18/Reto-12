const grid = document.getElementById("grid");

const colores = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'pink', 'brown'];

const pares = [...colores, ...colores];

pares.sort(() => Math.random() - 0.5);

pares.forEach((color) => {
  const boton = document.createElement("button");
  boton.dataset.color = color;
  boton.style.backgroundColor = color;

  setTimeout(() => {
    boton.style.backgroundColor = "white";
  }, 2000);

  grid.appendChild(boton);
});

let primerBotonPresionado = null;
let segundoBotonPresionado = null;

grid.addEventListener("click", (evento) => {
  const botonPresionado = evento.target;
  botonPresionado.style.backgroundColor = botonPresionado.dataset.color;

  if (primerBotonPresionado === null) {
    primerBotonPresionado = botonPresionado;
  } else if (
    !segundoBotonPresionado &&
    botonPresionado !== primerBotonPresionado
  ) {
    segundoBotonPresionado = botonPresionado;
  }

  if (primerBotonPresionado.dataset.color === segundoBotonPresionado.dataset.color) {
    alert('Pillaste un par');
    primerBotonPresionado = null;
    segundoBotonPresionado = null;
  } else {
    setTimeout(() => {
      primerBotonPresionado.style.backgroundColor = "white";
      segundoBotonPresionado.style.backgroundColor = "white";
      primerBotonPresionado = null;
      segundoBotonPresionado = null;
    }, 1000);
  }
});
