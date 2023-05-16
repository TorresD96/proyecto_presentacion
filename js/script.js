const nav = document.querySelector("nav");
const abrir = document.querySelector(".abrir-menu");
const cerrar = document.getElementById(".cerrar");

abrir.addEventListener("click", () => {
  abrir.classList.toggle("visible");
});

cerrar.addEventListener("click", () => {
  cerrar.classList.toggle("visible");
});
