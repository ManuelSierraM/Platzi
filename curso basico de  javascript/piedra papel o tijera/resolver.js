//          PIEDRA PAPEL O TIJERA

// var piedra = 'piedra';
// var papel = 'papel';
// var tijera = 'tijera';


// function resolver(opcion) {
//     var opcionpc =  Math.random(`${piedra} ${papel} ${tijera}`);
//     (opcion == pc)
 

// }


const ROCK = "./images/rock.png" ;
const PAPER = "./images/paper.png";
const SCISSORS = "./images/scissors.png";

const TIE = 0;
const WIN = 1;
const LOST = 2;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

rockBtn.addEventListener("click", () => {
    play(ROCK);
});
paperBtn.addEventListener("click", () => {
    play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
    play(SCISSORS);
});



function play(userOption) {

    userImg.src = userOption;

    resultText.style.fontWeight = "normal";
    resultText.innerHTML = "Escogiendo!";
    
    
    const interval = setInterval(function () {
        const machineOption = calcMachineOption(); 
        machineImg.src = machineOption;
    }, 200);
    
    setTimeout(function () {

        clearInterval(interval);

        const machineOption = calcMachineOption(); 
        const result = calcResult(userOption, machineOption);

        machineImg.src = machineOption;
    
        switch (result) {
            case TIE:
                resultText.innerHTML = "Empate!"
                resultText.style.fontWeight = "bold";
                break;
            case WIN:
                resultText.innerHTML = "Ganaste!"
                resultText.style.fontWeight = "bold";
                break;
            case LOST:
                resultText.innerHTML = "Perdiste!"
                resultText.style.fontWeight = "bold";
                break;
            default:
                break;
    }
    }, 2000)



    


}

function calcMachineOption (){
   const number =  Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
        default:
            break;
    }
}

function calcResult(userOption, machineOption) {
   
    if (userOption === machineOption) {
        return TIE;
    }  else if (userOption === ROCK ) {
       if ( machineOption === PAPER){ return LOST};
       if ( machineOption === SCISSORS){  return WIN};
        
    } else if (userOption === PAPER) {
        if (machineOption === SCISSORS){ return LOST};
       if ( machineOption === ROCK){  return WIN};
        
    } else if (userOption === SCISSORS) {
        if (machineOption === ROCK){ return LOST};
       if ( machineOption === PAPER){  return WIN};
        
    }
}