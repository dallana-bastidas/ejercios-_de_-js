// Validar cuál es el valor de matrícula (1’000.000) que debe pagar un estudiante,teniendo en cuenta que:
// a. Si el promedio fue menor a 3 no se le descuenta nada.
// b. Cuando el promedio sea entre 3 y 4 se le descuenta el 5%
// c. Cuando el promedio sea mayor que 4, se le descuenta 50

// voy a declarar una variable  que me va a seleccionar el id del html para luego darle un evento
// luego voy a declarar 4 variables: la primera promedio_estudiante donde por medio del target le estoy diciendo que va a adquirir
// el valor del promedio que va a ingresar el usuario
// la segunda precio  tiene el valor de la matricula
// la tercera promedio_medio se realiza una operacion para sacar el 5% del precio
// la cuarta tambien se realiza una operacion,pero esta vez para sacar el 50%
// despues le estoy diciendo que si promedio estudiante es menor a 3 le digo a el usuario que no se le descuenta nada
// despues le estoy diciendo que si promedio estudiantte es mayor a 3 y menor que 4 entonces realice la operacion
// y le diga a el usuario el valor de su matricula
// si llega a ser falso que pase a la siguiente condicion y evalue si promedio estudiante es mayor a 4 y realice la operacion
// y le diga a el usuario el valor de su matricula wuw

let problema6y = document.querySelector("#problema6");
problema6y.addEventListener("submit", function (evento) {
    evento.preventDefault();
    let promedio_estudiante = parseFloat(evento.target.promedio.value);
    console.log("🚀 ~ promedio_estudiante:", promedio_estudiante);
    let precio = 1000000;
    let promedio_medio = precio * 0.95;
    let promedio_alto = precio * 0.5;

    if (promedio_estudiante < 3) {
        document.querySelector("#resultadoPunto6").innerHTML = "Su matricula tiene el valor de: 1.000.000 ";
    } else if (promedio_estudiante >= 3.1 && promedio_estudiante <= 4) {
        document.querySelector("#resultadoPunto6").innerHTML = `2 Su matricula tiene el valor de: ${promedio_medio}`;
    } else {
        document.querySelector("#resultadoPunto6").innerHTML = `3 Su matricula tiene el valor de: ${promedio_alto}`;
    }
});
