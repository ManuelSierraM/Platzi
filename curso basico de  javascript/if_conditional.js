
// La condicional if  se  puede escribir de tres formas

// 1ra  if normal

var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, sera tu 1ra votacion");
} else {
    console.log("Aun no puedes votar");
}


// 2da if-else
var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, sera tu 1ra votacion");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar");
} // O tambien se puede  anidar el if-else 
//dependiendo de la validacion y la logica del programa



// 3ra operador ternario de  if  que  da el mismo resultado de un if normal
consdition ?
  true 
 :false
// por ejemplo 
 var numero = 1;

 var resultado = numero === 1? "Si soy un uno": "No no soy un uno";
 //igualmente se puede usar  tanto  almacenando 
 //el resultado del ternario if dentro de una variable
 //como escribiendo el ternario afuera y ejecutandolo
 var numero = 1;
 numero === 1? 
    console.log("Si soy un uno")
 :console.log("No. no soy un uno");

 //----------------------------------------------------------------


 //          PIEDRA PAPEL O TIJERA

var piedra = 'piedra';
var papel = 'papel';
var tijera = 'tijera';


function resolver(opcion) {
    var opcionpc =  Math.random(`${piedra} ${papel} ${tijera}`);
    (opcion == pc)


}


