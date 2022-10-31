// //Media armonica


var array1 = [
    4,
    5,
    6,
    10,
    12,
    15
]
// const medArmonica = (array1.length)/((1/array1[0])+(1/array1[1])+(1/array1[2])+(1/array1[3])+(1/array1[4]));
// console.log(`La media armonica es: ${medArmonica}`);

//Media cuadratica
var cuadratica = [];
var medCuadratica;

array1.forEach(function (elemento) {
    cuadratica.push(Math.pow(elemento, 2));
});


// for (let i = 0; i < array1.length; i++) {
//  medCuadratica = Math.pow(array1[i], 2);
//  cuadratica = medCuadratica;
// console.log(`${cuadratica} soy  la variable cuadratica`);
// }


medCuadratica = Math.sqrt(cuadratica.reduce(function(a, b){ return a + b; }) / cuadratica.length).toFixed(2);
console.log(medCuadratica);

// cuadratica = cuadratica / array1.length;
// Math.sqrt(cuadratica);
// console.log(parseFloat(cuadratica));







// const lista = [
//     4,
//     5,
//     6,
//     10,
//     12,
//     15
// ];

// const listaNueva = [];
// var sumaLista;

// function calcularMediaCuadratica(lista){
//     lista.forEach(function(elementos){
//         listaNueva.push(Math.pow(elementos, 2));
//     })
    
//     sumaLista = Math.sqrt(listaNueva.reduce(function(a, b){ return a + b; }) / listaNueva.length).toFixed(2);
//     return sumaLista;
// }

// console.log(calcularMediaCuadratica(lista));