// La pizzería Pepitos requiere un algoritmo que permita informarle a los usuarios si
// reciben o no un premio por parte del negocio, se tienen las siguientes
// validaciones:
// a. Si es un niño menor o igual a 10 años, debe ir a reclamar un jugo. cumple
// b. Si es una persona mayor de edad (18 años) debe ir a reclamar una
// cerveza.
// c. Y si es una mujer, debe reclamar adicionalmente una porción de pizza
// Hawaiana. cumple
// d. O si es un hombre, debe reclamar adicionalmente una porción de pizza tres
// carnes. cumple
// e. Si no cumple ninguna de las condiciones, se le debe informar que
// desafortunadamente, no recibe ningún premio.

// addEventListener asigna el evento
// target es lo que dispara el evento
// preventDefault no deja de recargar la pagina

let problema3y = document.querySelector("#problema3");
problema3y.addEventListener("submit", function (evento) {
  evento.preventDefault();
  let edad = evento.target.edad_usuario.value;
  let genero = evento.target.generos.value;
  if (edad <= 10) {
    if (genero == "1") {
      document.querySelector("#resultadoPunto3").innerHTML =
        "debe ir a reclamar un jugo y pizza Hawaiana";
    } else if (genero == "2") {
      document.querySelector("#resultadoPunto3").innerHTML =
        "debe ir a reclamar un jugo y pizza de tres carnes";
    }
  } else if (edad >= 18) {
    if (genero == "1") {
      document.querySelector("#resultadoPunto3").innerHTML =
        "debe ir a reclamar una cerveza y pizza hawaiana";
    } else if (genero == "2") {
      document.querySelector("#resultadoPunto3").innerHTML =
        "debe ir a reclamar una cerveza y pizza de tres carnes";
    }
  } else {
    document.querySelector("#resultadoPunto3").innerHTML =
      "no reclamas nada :(";
  }
});
