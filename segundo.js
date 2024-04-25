// Se necesita validar si un número ingresado por el usuario es par o impar.


// === tiene en cuenta el tipo de dato
let problema2y = document.querySelector("#problema2");
problema2y.addEventListener("submit", function (evento) {
  evento.preventDefault();
  let numeroUsuario = evento.target.numero_usuario.value;
  numeroUsuario;
  if (numeroUsuario % 2 === 0) {
    document.querySelector("#resultadoPunto2").innerHTML = "tu numero es par";
  } else {
    document.querySelector("#resultadoPunto2").innerHTML = "tu numero es impar";
  }
});
