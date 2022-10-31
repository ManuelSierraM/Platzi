
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




//Realizamos los calculos para hallar la mediana
const calcMediana = document.getElementById('calcMediana');
let medianaTotal = document.getElementById('medianaTotal');
function mediana(){

    
    function calcularMediaAritmetica(lista) {
    
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento) {
                const vlrAcumulado = Number(valorAcumulado);
                const newElement = Number(nuevoElemento);
                return vlrAcumulado + newElement;

            }
        );

        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }



    const mitadLista1 = parseInt(lista1.length / 2);

    function esPar(numero) {
        if (numero % 2 === 0) {
            //par
            return true;
        } else {
            //impar
            return false;
        }
    }

    let mediana;

    if (esPar(lista1.length) /*lista1 es par?*/) {
        const elemento1 = lista1[mitadLista1 -1]; 
        const elemento2 = lista1[mitadLista1]; //nesesitamos dos elementos
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);// - el promedio 
        mediana = promedioElemento1y2; // - la mediana
        medianaTotal.innerText = mediana;
    } else {
        mediana = lista1[mitadLista1]// posicion mitadLista1 dentro de lista 1
        // mediana
        medianaTotal.innerText = mediana;
    }

}