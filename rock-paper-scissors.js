function playGame(){

function getComputerChoice () {
    let randomNumber = Math.random ();
    if(randomNumber<1/3){
        return "rock";
    }
    else if(randomNumber<2/3){
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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
 humanChoice = humanChoice.toLowerCase();

   if(humanChoice===computerChoice){
        console.log("It's a tie!");
        return;
   }

   else if(humanChoice==="paper"){
        if(computerChoice==="rock"){
            console.log("You win! Paper beats Rock");
            humanScore++;
        }
        else if(computerChoice==="scissors"){
            console.log("You lose! Scissors beat Paper");
            computerScore++;
        }
   }

   else if(humanChoice==="rock"){
        if(computerChoice==="paper"){
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
        else if(computerChoice==="scissors"){
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }
        
   }

   else if(humanChoice==="scissors"){
        if(computerChoice==="paper"){
            console.log("You win! Scissors beat Paper");
            humanScore++;
        }
        else if(computerChoice==="rock"){
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
   }
} 

for(let i=0; i < 5; i++){
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
}
if(humanScore<computerScore){
    console.log("You Lose!");
}
else if(humanScore>computerScore){
    console.log("You Win!");
}
else {
    console.log("It's a Draw");
}
}
