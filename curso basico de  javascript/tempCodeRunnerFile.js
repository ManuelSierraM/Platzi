//              METODOS PARA  RECORRER UN ARREGLO COMPLEJO

// // metodo filter() extrae del array  los datos de areas 
// // especificas vasandose  en filtrar la informacion que se le pide
// // en este caso valores dentro de  costo que sean menor que 500  
// var articulos = [
    
//     {nombre : 'bici',costo: 3000},
//     {nombre : 'Tv',costo: 2500},
//     {nombre : 'libro',costo: 320},
//     {nombre : 'celular',costo: 10000},
//     {nombre : 'laptop',costo: 20000},
//     {nombre : 'teclado',costo: 500},
//     {nombre : 'audifonos',costo: 1700}
// ];
// var articulosFiltrados = articulos.filter(function (articulo) {
//     return articulo.costo <= 500;
// });


// // metodo map();  extrae del array los  datos de una seccion 
// //en especifico  en este caso nombre:
// var articulos = [
    
//     {nombre : 'bici',costo: 3000},
//     {nombre : 'Tv',costo: 2500},
//     {nombre : 'libro',costo: 320},
//     {nombre : 'celular',costo: 10000},
//     {nombre : 'laptop',costo: 20000},
//     {nombre : 'teclado',costo: 500},
//     {nombre : 'audifonos',costo: 1700}
// ];

// var nombreArticulos = articulos.map(function (articulo) {
//     return articulo.nombre;
// });


// // metodo find();  trae el objeto completo al que  haga referencia  la condicion
// //por ejemplo en este caso hace  referencia al nombre que tenga laptop como valor
// // y trae todo el objeto donde ese nombre  se encuentra.
// var articulos = [
    
//     {nombre : 'bici',costo: 3000},
//     {nombre : 'Tv',costo: 2500},
//     {nombre : 'libro',costo: 320},
//     {nombre : 'celular',costo: 10000},
//     {nombre : 'laptop',costo: 20000},
//     {nombre : 'teclado',costo: 500},
//     {nombre : 'audifonos',costo: 1700}
// ];

// var encuentraArticulo = articulos.find(function (articulo) {
//     return articulo.nombre === 'laptop'
// });


// //metodo  forEach();  trae   en una nueva  variable solo  los elementos
// // a los que haga referencia el console.log por ejemplo  en el console.log
// // se  esta refeneciando nombre de articulo dando como resultado  la devolucion de
// // solo los nombres de  todos los articuos dentro del array

// var articulos = [
    
//     {nombre : 'bici',costo: 3000},
//     {nombre : 'Tv',costo: 2500},
//     {nombre : 'libro',costo: 320},
//     {nombre : 'celular',costo: 10000},
//     {nombre : 'laptop',costo: 20000},
//     {nombre : 'teclado',costo: 500},
//     {nombre : 'audifonos',costo: 1700}
// ];

// articulos.forEach(function (articulo) {
//     console.log(articulo.nombre);
// });