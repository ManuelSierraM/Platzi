//  Codigo de botones de opciones
const opcCuadrado = document.getElementById('opcCuadrado');
const opcTriangulo = document.getElementById('opcTriangulo');
const opcCirculo = document.getElementById('opcCirculo');

function opcCuadrado1() {

    opcCuadrado.style.display="block"; 
    opcTriangulo.style.display="none";
    opcCirculo.style.display="none";
};   

function opcTriangulo1() {
    opcCuadrado.style.display="none"; 
    opcTriangulo.style.display="block";
    opcCirculo.style.display="none";
}

function opcCirculo1() {
    opcCuadrado.style.display="none"; 
    opcTriangulo.style.display="none";
    opcCirculo.style.display="block";
}



//              Codigo del cuadrado
console.group('cuadrados');


// const ladoCuadrado = 5;
// console.log(`lados del cuadrado miden ${ladoCuadrado}cm`);
function perimetroCuadrado(lado) {
    return lado * 4;
}



// console.log(`El perimetro del cuadrado es ${perimetroCuadrado}cm`);

function areaCuadrado(lado) {
    return lado * lado ;
}
// console.log(`El area del cuadrado es ${areaCuadrada}cm^2`);


console.groupEnd();
//---------------------------------------------------------------------


//codigo del triangulo

// console.group('triangulos');
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(`lados del triangulo miden 
// ${ladoTriangulo1}cm, 
// ${ladoTriangulo2}cm,  
// ${baseTriangulo}cm`
// );

// const alturaTriangulo = 5.5;
// console.log(`La altura del triangulo es de ${alturaTriangulo}cm`)

function perimetroTriangulo (lado1,lado2,base){
        return parseFloat(lado1) + parseFloat(lado2) + parseFloat(base);
};


// console.log(`El perimetro del triangulo es ${perimetroTriangulo}cm`);

function areaTriangulo (base, altura){
    return (base * altura) / 2;
};

console.groupEnd();
//------------------------------------------------------------------------




//Codigo del circulo

console.group('Circulos');
//radio
// const radioCirculo = 4;
// console.log(`El radio del circulo es ${radioCirculo}cm`);


//diametro

function diametroCirculo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;

//circunferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI; 
}

//area

function areaCirculo(radio) {
    return (radio * radio) * PI; 
}

console.groupEnd();
//-----------------------------------------------------------------



// aqui interactuamos  con html

// interaccion con cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById('inputCuadrado');
    const resultado = document.getElementById('resultadoC');
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    resultado.innerHTML = `${perimetro}cm`;
}

function calcularAreaCuadrado() {
    const input = document.getElementById('inputCuadrado');
    const resultado = document.getElementById('resultadoC');
    const value = input.value;

    const area = areaCuadrado(value)
    resultado.innerHTML = `${area}cm`;
}

//interaccion  con triangulo
function alturaTriangulo(lado1, lado2, base) {
    var calculo = (lado1* lado2) - base;
    calculo = Math.sqrt(calculo);
    return parseInt(calculo);
}

function calcularAlturaTriangulo() {
    const lado1 = document.getElementById('inputTriangulo1').value;
    const lado2 = document.getElementById('inputTriangulo2').value;
    const base = document.getElementById('inputTriangulo3').value;
    const resultado = document.getElementById('resultadoT');
    const altura = alturaTriangulo(lado1, lado2, base);

    if (lado1 === lado2 || lado1 === base || base === lado2) { 
        resultado.innerHTML= `Es un triangulo isoseles y su  altura es:  ${parseInt(altura)}`;
    }
    resultado.innerHTML = `${parseInt(altura)}cm`;
}
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById('inputTriangulo1');
    const lado2 = document.getElementById('inputTriangulo2');
    const base = document.getElementById('inputTriangulo3');
    const resultado = document.getElementById('resultadoT');

    var perimetro = perimetroTriangulo (lado1.value, lado2.value, base.value);
    resultado.innerHTML = `${perimetro}cm`;
}

function calcularAreaTriangulo() {
    const lado1 = document.getElementById('inputTriangulo1').value;
    const lado2 = document.getElementById('inputTriangulo2').value;
    const base = document.getElementById('inputTriangulo3').value;
    const altura = alturaTriangulo(lado1, lado2, base);
    const resultado = document.getElementById("resultadoT");
    
    
    const area = areaTriangulo(base, altura);
    resultado.innerHTML = `${area}cm`; 
}   

// interacion con circulo

function calcularDiametroCirculo() {
    const valueR = document.getElementById('inputCirculo').value;
    const resultado = document.getElementById('resultadoCir');
    const diametro = diametroCirculo(valueR);
    resultado.innerHTML = `${diametro}cm`;
}


function calcularPerimetroCirculo() {
    const valueR = document.getElementById('inputCirculo').value;
    const resultado = document.getElementById('resultadoCir');
    const perimetro = perimetroCirculo(valueR);
    resultado.innerHTML = parseInt(perimetro)+'cm';
}

function calcularAreaCirculo() {
    const valueR = document.getElementById('inputCirculo').value;
    const resultado = document.getElementById('resultadoCir');
    const area = areaCirculo(valueR);
    resultado.innerHTML = parseInt(area) + 'cm';
}