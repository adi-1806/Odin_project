//const prompt = require("prompt-sync")();

const arr =["ROCK", "PAPER", "SCISSOR"];
let humanScore = 0;
let computerScore = 0;
let computerIndex =0;
let humanChoiceIndex = 0;

const rockBtn = document.createElement("button")
const paperBtn = document.createElement("button")
const scissorBtn = document.createElement("button")
const result = document.createElement("p")
const humanoption = document.createElement("p")
const computeroption = document.createElement("p")



rockBtn.textContent = "Rock"
paperBtn.textContent = "Paper"
scissorBtn.textContent = "Scissor"

document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(scissorBtn);
document.body.appendChild(result);
document.body.appendChild(humanoption);
document.body.appendChild(computeroption);


function getComputerChoice(){
    computerIndex = Math.floor(Math.random() * arr.length);
}

function getHumanChoice(choice){
    humanChoiceIndex = choice
}

function playRound(){
    humanoption.textContent = "human's choice is " + arr[humanChoiceIndex];
    computeroption.textContent = "computer's choice is " + arr[computerIndex];
    if (humanChoiceIndex == computerIndex){
        result.textContent = "Draw match"
    }
    else if (humanChoiceIndex == 0 && computerIndex == 1){
        result.textContent ="You loose! Paper beats Rock."
        computerScore ++;
    }
    else if (humanChoiceIndex == 0 && computerIndex == 2){
        result.textContent = "You win! Rock beats Scissor."
        humanScore ++;
    }
    else if (humanChoiceIndex == 1 && computerIndex == 0){
        result.textContent ="You win! Paper beats Rock."
        humanScore ++;
    }
    else if (humanChoiceIndex == 1 && computerIndex == 2){
        result.textContent ="You loose! Scissor beats Paper."
        computerScore ++;
    }
    else if (humanChoiceIndex == 2 && computerIndex == 0){
        result.textContent ="You loose! Rock beats Scissor."
        computerScore ++;
    }
    else if (humanChoiceIndex == 2 && computerIndex == 1){
        result.textContent ="You win! Scissor beats Paper."
        humanScore ++;
    }
}

function playGame(){
    getComputerChoice();
    playRound();

    console.log("Final Scores are " + "Your score: " + humanScore + "Computer score: " + computerScore);
    if (humanScore > computerScore){
        console.log("You are the final winner!");
    }
    else if(humanScore < computerScore){
        console.log("Computer is the final winner!");
    }
    else{
        console.log("Draw Match");
    }
}


    
rockBtn.addEventListener("click", ()=>{
    getHumanChoice(0)
    playGame();
})

paperBtn.addEventListener("click", ()=>{
    getHumanChoice(1)
    playGame();
})

scissorBtn.addEventListener("click", ()=>{
    getHumanChoice(2)
    playGame();
})

