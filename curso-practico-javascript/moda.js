// const lista1 = [
//     1,
//     2,
//     3,
//     1,
//     2,
//     3,
//     4,
//     2,
//     2,
//     2,
//     1  
// ];


const contentValues = document.getElementById('contentValues')


var lista1 = [];
function mostrarDatos() {

    const valores = document.getElementById('valores').value;

    //agregamos el valor escogido por el usuario al array
    lista1.push(valores);

    //ordenamos los elementos dentro del array
    lista1.sort(function(a, b) {
        return a - b;
    });

    //mostramos en pantalla  el valor escogido por el usuario ya almacenado
    // contentValues.innerHTML = lista1;
    let mostrarValores= []; 
    mostrarValores.push(valores);
    for (const dato of mostrarValores) {
        // almacenamos cada valor  a operar en un nuevo parrafo verticalmente
        let nuevoParrafo = contentValues.cloneNode(true);
        let parrafoContent = document.createTextNode(dato);
        nuevoParrafo.appendChild(parrafoContent);
        document.body.insertBefore(nuevoParrafo, contentValues);
        
    }


    return lista1;

}
lista1 = mostrarDatos();
lista1.shift();// eliminamos el primer elemento del array el cual es 
//un espacio en blanco que se añade por error... '_' =(


//limpiamos el imput para ingresar un nuevo valor
function borrarValor () {
    valores.value = "";
}










//calculos
function moda() {
    const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
             lista1Count[elemento] = 1;   
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1]
    }
);

const moda = lista1Array[lista1Array.length - 1]
medianaTotal1.innerText = `La moda es ${moda[0]} `;
medianaTotal2.innerText = ` con conteo de ${moda[1]} repeticiones`
}

