const prompt = require("prompt-sync")();

const arr =["ROCK", "PAPER", "SCISSOR"];
let humanScore = 0;
let computerScore = 0;
let computerIndex =0;
let humanChoiceIndex = 0;

function getComputerChoice(){
    computerIndex = Math.floor(Math.random() * arr.length);
}

function getHumanChoice(){
    humanChoiceIndex = prompt("Enter your choice (ROCK = 0, PAPER = 1, SCISSOR = 2):"); 
}

function playRound(){
    if (humanChoiceIndex == computerIndex){
        console.log("Draw match");
    }
    else if (humanChoiceIndex == 0 && computerIndex == 1){
        console.log("You loose! Paper beats Rock.");
        computerScore ++;
    }
    else if (humanChoiceIndex == 0 && computerIndex == 2){
        console.log("You win! Rock beats Scissor.");
        humanScore ++;
    }
    else if (humanChoiceIndex == 1 && computerIndex == 0){
        console.log("You win! Paper beats Rock.");
        humanScore ++;
    }
    else if (humanChoiceIndex == 1 && computerIndex == 2){
        console.log("You loose! Scissor beats Paper.");
        computerScore ++;
    }
    else if (humanChoiceIndex == 2 && computerIndex == 0){
        console.log("You loose! Rock beats Scissor.");
        computerScore ++;
    }
    else if (humanChoiceIndex == 2 && computerIndex == 1){
        console.log("You win! Scissor beats Paper.");
        humanScore ++;
    }
}

function playGame(){
    
    for (let i = 0; i<5; i++){
        getHumanChoice();
        getComputerChoice();
        playRound();
    }
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

playGame(); 