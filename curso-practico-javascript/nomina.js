var horasUsuario = [
   {tipo: 'horasJornOrdinaria'}, 
   {tipo: 'horasDescanso'},
   {tipo: 'horasDominicales'},
   {tipo: 'horasNocturnas'},
   {tipo: 'horasExtrasNocturnas'}
];

//El usuario ingresa las horas que lleva  contavilizadas
console.group('Horas usuario')
for (let i = 0; i < 10; i++) {
    
    horasUsuario.push(cantidad => {
       return cantidad = `, cant: ${i}`;
    });
    console.log();
    horasUsuRegistradas = horasUsuario.map(element => {
        return element;
    });
};

console.table(horasUsuRegistradas);

console.groupEnd();




console.group('Datos de nomina');

var horasRegistradas = [
    {tipo: 'horasJornOrdinaria', cant: 205.33},
    {tipo:'horasDescanso', cant:34.67},
    {tipo:'horasDominicales', cant:16.00},
    {tipo:'horasNocturnas', cant:3.50},
    {tipo:'horasExtrasNocturnas',cant:29.00}
]

const horas = horasRegistradas.map(element => {
    return element;
});
console.table(horasRegistradas);

console.groupEnd();
// //Comparando valores suministrados por el usuario contra los del desprendible de pago


// const contentValues = document.getElementById('contentValues')


// var lista1 = [];
// function mostrarDatos() {

//     const valores = document.getElementById('valores').value;

//     //agregamos el valor escogido por el usuario al array
//     lista1.push(valores);

//     //ordenamos los elementos dentro del array
//     lista1.sort(function(a, b) {
//         return a - b;
//     });

//     //mostramos en pantalla  el valor escogido por el usuario ya almacenado
//     // contentValues.innerHTML = lista1;
//     let mostrarValores= []; 
//     mostrarValores.push(valores);
//     for (const dato of mostrarValores) {
//         // almacenamos cada valor  a operar en un nuevo parrafo verticalmente
//         let nuevoParrafo = contentValues.cloneNode(true);
//         let parrafoContent = document.createTextNode(dato);
//         nuevoParrafo.appendChild(parrafoContent);
//         document.body.insertBefore(nuevoParrafo, contentValues);
        
//     }


//     return lista1;

// }
// lista1 = mostrarDatos();
// lista1.shift();// eliminamos el primer elemento del array el cual es 
// //un espacio en blanco que se añade por error... '_' =(


// //limpiamos el imput para ingresar un nuevo valor
// function borrarValor () {
//     valores.value = "";
// }










// function comparar(params) {
    
// }