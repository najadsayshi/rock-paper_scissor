
// Getting computer choice using math.random
function getComputerChoice(){
    const choices = 3;

    let choice = Math.floor(Math.random()*choices)
    let pick = ""
    if (choice==1){
        pick =  "rock";
    }
    else if (choice==2){
        pick = "paper";
    }
    else{
        pick = "scissors";
    }
    return pick;
}

//taking input from human using prompt 
// function getHumanChoice(){
//     const choice = prompt("Rock, Paper or Scissors?");
//     return choice.toLowerCase();
// }

//assigning choices to variables


//assigning variables for points
let humanScore = 0;
let computerScore = 0;



//Each round logic
function playRound(humanSelection,computerSelection){

    //rock
    if (humanSelection=="rock" && computerSelection == "rock"){
        
        console.log("COMPUTER : " + computerSelection + "\n YOu : " + humanSelection+"\nComputer Score:" + computerScore + "\n Your score: " + humanScore);
        console.log("This round is a Tie");

    }
    else if (humanSelection == "rock" && computerSelection == "paper"){
        computerScore +=1
        
        console.log("COMPUTER : " + computerSelection + "\n YOu : " + humanSelection+"\nComputer Score:" + computerScore + "\n Your score: " + humanScore);
        console.log("Computer won this round");

    }
    else if (humanSelection == "rock" && computerSelection == "scissors"){
        humanScore+=1
        
        console.log("COMPUTER : " + computerSelection + "\n YOu : " + humanSelection+"\nComputer Score:" + computerScore + "\n Your score: " + humanScore);
        console.log("You won this round\n")
    }
    //paper
    else if (humanSelection=="paper" && computerSelection == "paper"){
        
        console.log("COMPUTER : " + computerSelection + "\n YOu : " + humanSelection+"\nComputer Score:" + computerScore + "\n Your score: " + humanScore);
        console.log("This round is a Tie");

    }

    else if (humanSelection == "paper" && computerSelection == "rock"){
        humanScore+=1
        
        console.log("COMPUTER : " + computerSelection + "\n YOu : " + humanSelection+"\nComputer Score:" + computerScore + "\n Your score: " + humanScore);
        console.log("You won this round\n")
    }

    else if (humanSelection == "paper" && computerSelection == "scissors"){
        computerScore +=1
        
        console.log("COMPUTER : " + computerSelection + "\n YOu : " + humanSelection+"\nComputer Score:" + computerScore + "\n Your score: " + humanScore);
        console.log("Computer won this round");

    }
    //scissor


    else if (humanSelection=="scissors" && computerSelection == "scissors"){
        
        console.log("COMPUTER : " + computerSelection + "\n YOu : " + humanSelection+"\nComputer Score:" + computerScore + "\n Your score: " + humanScore);
        console.log("This round is a Tie");

    }

    else if (humanSelection == "scissors" && computerSelection == "paper"){
        humanScore+=1
        
        console.log("COMPUTER : " + computerSelection + "\n YOu : " + humanSelection+"\nComputer Score:" + computerScore + "\n Your score: " + humanScore);
        console.log("You won this round\n")
    }

    else if (humanSelection == "scissors" && computerSelection == "rock"){
        computerScore +=1
        
        console.log("COMPUTER : " + computerSelection + "\n YOu : " + humanSelection+"\nComputer Score:" + computerScore + "\n Your score: " + humanScore);
        console.log("Computer won this round");
    }
    
}


//Logic to play the round 5 times
// for (let i = 0; i < 5 ; i++){
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection,computerSelection);
// }


//FINAL RESULT 



//event listener for buttons rock paper and scissor  that call your playRound
//  function with the correct playerSelection every time a button is clicked




const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissor = document.getElementById("Scissor");

rock.addEventListener("click",()=>{
    const computer= getComputerChoice()
    playRound("rock",computer)
    resultPara = document.getElementById("choices-result")
    resultPara.innerHTML = `
    <strong>Your choice:</strong> Rock<br>
    <strong>Computer choice:</strong> ${computer}<br><br>
    <strong>Your score:</strong> ${humanScore} &nbsp;
    <strong>Computer score:</strong> ${computerScore}
    `;
    checkWinner()
})

paper.addEventListener("click",()=>{
    const computer= getComputerChoice()
    playRound("paper",computer)
    resultPara = document.getElementById("choices-result")
    resultPara.innerHTML = `
    <strong>Your choice:</strong> Paper<br>
    <strong>Computer choice:</strong> ${computer}<br><br>
    <strong>Your score:</strong> ${humanScore} &nbsp;
    <strong>Computer score:</strong> ${computerScore}
    `;
    checkWinner()
})
scissor.addEventListener("click",()=>{
    const computer= getComputerChoice()
    playRound("scissors",computer)
    resultPara = document.getElementById("choices-result")
    resultPara.innerHTML = `
    <strong>Your choice:</strong> Scissors<br>
    <strong>Computer choice:</strong> ${computer}<br><br>
    <strong>Your score:</strong> ${humanScore} &nbsp;
    <strong>Computer score:</strong> ${computerScore}
    `;
    checkWinner()
})

function checkWinner(){
    if (humanScore===5){
        finalResult = document.body.querySelector(".finalResult")
        finalResult.innerHTML = `<strong> You win bro`
        rock.disabled=true;
        paper.disabled=true;
        scissor.disabled=true;

    }
    else if(computerScore===5){
        finalResult = document.querySelector(".finalResult")
        finalResult.innerHTML = `<strong> Computer win bro,You lost,its okay,You can try again`
        rock.disabled=true;
        paper.disabled=true;
        scissor.disabled=true;
    }
}
// if (humanScore > computerScore) {
//     console.log(`You win the game! Final score: You ${humanScore} - ${computerScore} Computer`);
// } else if (computerScore > humanScore) {
//     console.log(`Computer wins the game! Final score: Computer ${computerScore} - ${humanScore} You`);
// } else {
//     console.log(`The game is a tie! Final score: ${humanScore} - ${computerScore}`);
// }