//        METODOS PARA  LA MODIFICACION O EDICIN DE  ARRAYS


//metodo push();  este metodo permite  agregar uno o mas  elementos  al final de un array
// por ejemplo en este array se  agregaran dos articulos mas  con su nombre y su costo respectivamente


var articulos = [
    
    {nombre : 'bici',costo: 3000},
    {nombre : 'Tv',costo: 2500},
    {nombre : 'libro',costo: 320},
    {nombre : 'celular',costo: 10000},
    {nombre : 'laptop',costo: 20000},
    {nombre : 'teclado',costo: 500},
    {nombre : 'audifonos',costo: 1700}
];

articulos.push(
    {nombre: 'camara', costo: 5000},
    {nombre: 'parlantes', costo: 50000}
);


// metodo shift(); este metodo permite eliminar  un elemento del array  que este de primeras.
//por ejemplo en este  array se añadira el metodo para  eliminar el primer elemento
//dando como resultado  un elemento menos al inicio y mostrando que  elemento se  elmino
var articulos = [
    
    {nombre : 'bici',costo: 3000},
    {nombre : 'Tv',costo: 2500},
    {nombre : 'libro',costo: 320},
    {nombre : 'celular',costo: 10000},
    {nombre : 'laptop',costo: 20000},
    {nombre : 'teclado',costo: 500},
    {nombre : 'audifonos',costo: 1700}
];

articulos.shift();

//metodo  pop()  este elemento funciona  igual que  shift()  pero  eliminando el ultimo
//elemento en lugar del primero.
//por ejemplo en este  array se añadira el metodo para  eliminar el ultimo elemento
//dando como resultado  un elemento menos al final y mostrando que  elemento se  elmino

var articulos = [
    
    {nombre : 'bici',costo: 3000},
    {nombre : 'Tv',costo: 2500},
    {nombre : 'libro',costo: 320},
    {nombre : 'celular',costo: 10000},
    {nombre : 'laptop',costo: 20000},
    {nombre : 'teclado',costo: 500},
    {nombre : 'audifonos',costo: 1700}
];

articulos.pop();

