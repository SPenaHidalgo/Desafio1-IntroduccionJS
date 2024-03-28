//Constantes
const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const total = document.querySelector("#total");
const sumar = document.querySelector("#sumar");
const restar = document.querySelector("#restar");

sumar.addEventListener("click", () => {
 cantidad.innerHTML = +cantidad.innerHTML + 1;
 total.innerHTML = +cantidad.innerHTML * precio.innerHTML;
});

restar.addEventListener("click", () => {
 if (+cantidad.innerHTML > 0) {
  cantidad.innerHTML = +cantidad.innerHTML - 1;
  total.innerHTML = +cantidad.innerHTML * precio.innerHTML;
 }
});
