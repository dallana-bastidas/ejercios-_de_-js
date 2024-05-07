// Se necesita crear un menú de opciones, donde la persona escriba que quiere de
// comer, se le vaya sumando el valor a lo seleccionado hasta que el usuario escriba
// pagar, Una vez termine de comprar, se le debe mostrar el valor que debe pagar.
// (El menú y precios lo decide el programado@r.)
// Con 2 arrays o con 1 array de objeto FIND

// Estoy declarando una variable donde me va traer el idproblema6 del html para asignarle un evento
// despues cree una array con tres objetos que contienen su producto y su precio
// despues declare dos variables: La primera "pedido" que guardara los dulces que usuario pida
// y la segunda "total" que guardara el valor de los dulces pedidos por el usuario
// reset deja el imput en limpio
//
//
//
//

let menu = [
  { producto: "chocolatina", precio: 3000 },
  { producto: "bomombum", precio: 1000 },
  { producto: "masmelos", precio: 2000 },
  { producto: "cables", precio: 500 },
];
let total = 0;
let problema4y = document.querySelector("#problema4");
problema4y.addEventListener("submit", function (evento) {
  evento.preventDefault();
  let pedidoUsuario = evento.target.pedido_usuario.value;
  if (pedidoUsuario != "pagar") {
    let dulces = menu.find((dallana) => dallana.producto === pedidoUsuario);
    total = total + dulces.precio;
    evento.target.reset();
  } else {
    alert(total);
  }
});

// 

// let menu = [
//   {producto: "chocolatina", precio: 3000},
//   {producto: "bombombum", precio: 1000},
//   {producto: "masmelos", precio:2000},
//   {producto: "cables", precio:500},
// ];
// let total= 0;
// let problema4y = document.querySelector("#problema4");
// problema4y.addEventListener ("submit",function (evento){
//   evento.preventDefault();
//   let pedidoUsuario = evento.target.pedido_usuario.value;
//   if (pedidoUsuario != "pagar") {
//     let dulces = menu.findIndex()
    
//   }

// }







