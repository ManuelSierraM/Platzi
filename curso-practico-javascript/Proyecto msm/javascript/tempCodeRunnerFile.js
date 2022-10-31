for (let iterador of argumento) {
    const argument = iterador;
    const muestraDeHoras  = {
        fechaInicial: argument.dateIni.value,
        fechaFinal: argument.dateFin.value ,
        cantidadHoras: argument.cantHours.value,
        tipoHoras: argument.hoursType.value
     };
     //almacenando horas
    
     let registroDeHoras = [];
      registroDeHoras.push({
        fechaInicial: argument.dateIni.value,
        fechaFinal: argument.dateFin.value,
        cantidadHoras: argument.cantHours.value,
        tipoHoras: argument.hoursType.value
     });