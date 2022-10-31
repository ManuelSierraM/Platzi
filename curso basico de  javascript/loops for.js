//  Siclos   for:

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
//este  siclo for  permite  un mayor control ya que 
//se  le  da  un fin por  medio de un parametro

var estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel'];

function saludarEstudiantes(estudiantes) {
    console.log(`Hola  ${estudiantes}`);
}

for (let i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}



// for (const iterator of object) {
    
// }

//  este  siclo for  no permite  tanto control ya que 
//el fin de  siclo se  da cuando llegue al ultimo objeto o 
//elemento de  referencia
var estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel'];

function saludarEstudiantes(estudiantes) {
    console.log(`Hola  ${estudiantes}`);
}

for (let estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}


var estudiantes = ['maria', 'sergio', 'rosa', 'daniel'];

function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
   }
   
   while (estudiantes.length > 0) {
       var estudiante = estudiantes.shift();
       saludarEstudiantes(estudiante);
   }