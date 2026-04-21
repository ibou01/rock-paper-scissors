let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let randomNumber = Math.random ();
    if(0<=randomNumber<1/3){
        return "rock";
    }
    else if(1/3<=randomNumber<2/3){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice (){
    let choice = prompt ("what is your choice? ");
    return choice;
}