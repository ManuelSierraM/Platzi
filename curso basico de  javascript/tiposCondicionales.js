function perfil(name, lastname, nickname) {
    const name1 = name;
    const lastName1 = lastname;
    const completeName = name1 + lastName1;
    const nickname1 = nickname;

    console.log(`Mi nombre es ${name} pero prefiero que me digas ${nickname}`);

}


perfil('manuel', 'sierra', 'manu');

//-----------------------------------------------



const tipSusc = 'basic';

if (tipSusc == 'free') {
    console.log(`Solo puedes tomar os curso gratis`);
} else  if (tipSusc == 'basic') {
    console.log(`puedes tomar casi todos los cursos de platzi durante un mes`);
} else if (tipSusc == 'expert') {
    console.log(`puedes tomar casi todos los cursos de platzi durante un año`);
} else if (tipSusc == 'expertPlus´') {
    console.log(`tu y alguien mas pueden tomar todos los cursos de platzi durante un año`);
} else {
    console.log('Escoja la opcion que mas se adecue  a su presupuesto.');

};

//2

const tipSusc = 'basic';

if (tipSusc === !'') {

    if (tipSusc == 'free') {
        console.log(`Solo puedes tomar os curso gratis`);
    } 
    
    if (tipSusc == 'basic') {
        console.log(`puedes tomar casi todos los cursos de platzi durante un mes`);
    } 
    
    if (tipSusc == 'expert') {
        console.log(`puedes tomar casi todos los cursos de platzi durante un año`);
    } 
    
    if (tipSusc == 'expertPlus´') {
        console.log(`tu y alguien mas pueden tomar todos los cursos de platzi durante un año`);
    } 

}

if (tipSusc === '') {
    
    tipSusc = alert('Escoja la opcion que mas se adecue  a su presupuesto. y buelva a intentarlo!')
}



