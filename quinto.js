// Se le debe pedir al usuario un número y mostrar la tabla de multiplicar de ese
// número, adicionalmente, se debe mostrar el total de las multiplicaciones
// solicitadas por el mismo.

let problema5y = document.querySelector("#problema5");
problema5y.addEventListener("submit", function (evento) {
  evento.preventDefault();
  let numero = evento.target.numero_usuario.value;
  let numero_veces = evento.target.multiplicador.value;

  for (let x = 1; x <= numero_veces; x++) {
    let resultado = numero * x;

    document.querySelector("#resultadoPunto5").innerHTML += ` ${
      numero + "x" + x   + "=" + resultado
    } <br>`;
  }
});


