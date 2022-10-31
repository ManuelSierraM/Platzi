var frutas = ['manzana', 'platano', 'cereza', 'fresa'];

console.log(frutas);

// metodos  para manipular los  arrays.

frutas.push('uvas'); // .push suma una  cadena de  texto mas  al array
frutas.pop([4]); /*or*/ frutas.pop('uvas'); // .pop elimina el elemento
                                            //dentro del array  que  se  indique.
frutas.unshift('uvas');//.unshift agrega un elemento seleccionado al array y 
                       // lo ubica de primeras en el orden dentro del array
frutas.shift([0]);// .shift([0]); elimina un elemento en la posicion selecionada dentro del array.
frutas.shift('uvas');// .shift elimina el elemento que se reconosca  igual al seleccionado.
