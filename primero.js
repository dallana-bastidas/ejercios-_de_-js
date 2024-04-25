// 1. Se necesitan sumar los números del 1 a n, donde n es un número que le pedimos
// al usuario.

let form = document.querySelector("#problema1");
form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  let numero = evento.target.numero_usuario.value;
  let resultado = 0;
  for (let x = 1; x <= numero; x++) {
    resultado = resultado + x;
  }
  document.querySelector("#resultadoPunto1").innerHTML = resultado;
});
