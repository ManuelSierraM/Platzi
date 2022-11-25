//leyendo propiedades de la lista de actividades de dashboard
const dashboardContainer = document.querySelector('#dashboardContainer');
const dashboardBtnActivities = document.querySelector('#btnActivities');
const dashboardBtnPoints = document.querySelector('.bx-dots-horizontal-rounded');
const dashboardActivities = document.querySelector('.dashboardList');
const btnFiguras = document.querySelector('.bx-shape-triangle');
const btnNomina = document.querySelector('.bx-id-card');
//leyendo propiedades de la actividad "figuras geometricas" de dashboard
const figuras = document.querySelector('#figuras-geometricas');
const opcCuadrado = document.getElementById('opcCuadrado');
const opcTriangulo = document.getElementById('opcTriangulo');
const opcCirculo = document.getElementById('opcCirculo');

//leyendo propiedades de la actividad "nomina" de dashboard
const nomina = document.querySelector('#nomina');//container de actividad
const btnNomAnteriores = document.querySelector('.btnNomAnteriores');//boton de  seccion
const btnNomActual = document.querySelector('.btnNomActual');//boton de  seccion
const btnHorasEmpleado = document.querySelector('.btnHorasEmpleado');//boton de  seccion
const horasEmpleado = document.querySelector('.horasEmpleado');//seccion
const nomAnteriores = document.querySelector('.nomAnteriores');//seccion
const nomActual = document.querySelector('.nomActual');//seccion

const dateIni  = document.querySelector('#dateIni').value;
const dateFin  = document.querySelector('#dateFin').value;
const cantHours  = document.querySelector('#cant').value;
const typeHours  = document.querySelector('#type').value;


//desplegando/contrayendo lista  de actividades
dashboardBtnActivities.addEventListener('click',() => {
        
    if (dashboardActivities.style.display == 'flex') {
        setTimeout(5000);
        dashboardActivities.style.display = 'none';
        dashboardBtnPoints.style.display = 'block';
        dashboardBtnActivities.classList.replace('bx-caret-left', 'bx-caret-right');
        dashboardBtnActivities.style.marginRight = '-11px';
            
    }else{
        setTimeout(5000);
        dashboardActivities.style.display = 'flex';
        dashboardBtnPoints.style.display = 'none';
        dashboardBtnActivities.classList.replace('bx-caret-right', 'bx-caret-left' );
        dashboardBtnActivities.style.marginRight = 0;
    }
});
dashboardContainer.addEventListener('mouseleave', () =>{//cerrando lista cuando mouse no este ensima
    dashboardActivities.style.display = 'none';
    dashboardBtnActivities.classList.replace('bx-caret-left', 'bx-caret-right');
    dashboardBtnPoints.style.display = 'block';
dashboardBtnActivities.style.marginRight = '-11px';
});



//desplegando actividad FIGURAS GEOMETRICAS
btnFiguras.addEventListener('click', () =>{
        figuras.style.display = 'block';
        nomina.style.display = 'none';
});
//desplegando actividad NOMINA
btnNomina.addEventListener('click', () =>{
        nomina.style.display = 'block';
        figuras.style.display = 'none';
});


//----Actividad de FIGURAS GEOMETRICAS
//desplegando y limpiando areas de la actividad
function opcCuadrado1() {
document.querySelector('#formCuadrado').reset();
document.getElementById('resultadoC').innerHTML= '';
    opcCuadrado.style.display="block"; 
    opcTriangulo.style.display="none";
    opcCirculo.style.display="none";
};   
function opcTriangulo1() {
document.querySelector('#formTriangulo').reset();
document.getElementById('resultadoT').innerHTML= '';
    opcCuadrado.style.display="none"; 
    opcTriangulo.style.display="block";
    opcCirculo.style.display="none";
}
function opcCirculo1() {
document.querySelector('#formCirculo').reset();
document.getElementById('resultadoCir').innerHTML= '';
    opcCuadrado.style.display="none"; 
    opcTriangulo.style.display="none";
    opcCirculo.style.display="block";
}

//   Codigo del cuadrado
// const ladoCuadrado = 5;
// console.log(`lados del cuadrado miden ${ladoCuadrado}cm`);
function perimetroCuadrado(lado) {
    return (lado * 4)
}
// console.log(`El perimetro del cuadrado es ${perimetroCuadrado}cm`);
function areaCuadrado(lado) {
    return (lado * lado)
}
// console.log(`El area del cuadrado es ${areaCuadrada}cm^2`);
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

//------------------------------------------------------------------------

//              Codigo del circulo
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

//-----------------------------------------------------------------
// aqui interactuamos  con html
// interaccion con cuadrado
function calcularPerimetroCuadrado() {
  const valueInputCuadrado = document.getElementById('inputCuadrado');
  document.getElementById('resultadoC').innerHTML= `${perimetroCuadrado(valueInputCuadrado.value)}cm`;
}

function calcularAreaCuadrado() {
    const valueInputCuadrado = document.getElementById('inputCuadrado');
document.getElementById('resultadoC').innerHTML= `${areaCuadrado(valueInputCuadrado.value)}cm`
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

    if (lado1 == lado2 && lado1 == base && 
        base == lado2) { 
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



//----actividad de NOMINA
//desplegando  areas de la actividad
function opcNomAnteriores() {
    nomAnteriores.style.display="grid"; 
    nomActual.style.display="none";
    horasEmpleado.style.display="none";
    clearForm(document.formNomAnteriores)

};   
function opcNomActual() {
           document.getElementById('titlNomActualComp').style.display = 'none'
document.getElementById('formNomActualComp').style.display = 'none'
    nomAnteriores.style.display="none"; 
    nomActual.style.display="grid";
    horasEmpleado.style.display="none";
    clearForm(document.formNomActual);
    
}
function opcHorasEmpleado() {
    nomAnteriores.style.display="none"; 
    nomActual.style.display="none";
    horasEmpleado.style.display="grid";
    clearForm(document.formHorsEmp);
    
}
//limpiando formulario al cambiar a otro 
function clearForm(argument) {
    
    if (argument == document.formNomActual ||! registroDeHoras) {
        argument.firstButton.style.opacity = '1';
        argument.firstButton.style.pointerEvents = 'auto';
        argument.secondButton.style.opacity = '0.2';
        argument.secondButton.style.pointerEvents = 'none';
    }
    
    if (registroDeHoras.length > 0 ) {
    argument.reset();
    ol.textContent = ""
    registroDeHoras.length = 0;
    }
   
}


//almacenando y mostrando las horas registradas
let ol;
let list;
let registroDeHoras = [];
function registrar(argument) {
    
    //recibiendo  datos
    function datosRecibidos (){
            this.fechaInicial= argument.dateIni.value,
            this.fechaFinal = argument.dateFin.value ,
            this.cantidadHoras = argument.cantHours.value,
            this.tipoHoras = argument.hoursType.value
    }
    const horas = new datosRecibidos();


    switch (registroDeHoras.length) {
            
        case 6:
            argument.secondButton.style.opacity = '1'
            argument.secondButton.style.pointerEvents = 'auto'
            argument.firstButton.style.opacity = '0.2'
            argument.firstButton.style.pointerEvents = 'none'
            case 7:
                //almacenando horas en ultima posision
                registroDeHoras.push(horas)

                break;  
    default:
            //almacenando horas
            registroDeHoras.push(horas)
            break;
            
    }
    //mostrando las horas registradas
    if (argument == document.formNomAnteriores) {
        ol = document.querySelector('#listNomAntReg');
        
    }
    if (argument == document.formNomActual) {
        ol = document.querySelector('#listNomActReg');
        
    }
    if (argument == document.formHorsEmp) {
        ol = document.querySelector('#listHorsEmpReg');
        
    }
    list = document.createElement('li')
    list.textContent = `${horas.cantidadHoras} ${horas.tipoHoras}`;
    ol.appendChild(list);
    //limpiando formularios
    argument.reset();

}

//aqui realizamos las operaciones de cada seccion de la actividad

function  comparacion(argument) {
    document.getElementById('titlNomActualComp').style.display = 'inline-block';
argument.style.display = 'block';

 argument == document.formNomActualComp?(
        document.getElementById('titlNomActual').style.visibility = 'none',
        document.formNomActual.style.display = 'none'):
        console.error('no entro al ternario') 
        
        
}


