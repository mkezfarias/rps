    //this is the user inteface version

let computerScore = 0
let userScore = 0
//let playerSelection = plSelect();
var computerSelection = computerPlay();
var playerSelection = plSelect();

    var rock = document.getElementById("imgrock").addEventListener("click", (e) => {
    document.getElementById("chch").innerHTML = "rock";
    });
    var paper = document.getElementById("imgpaper").addEventListener("click", (e) => {
    document.getElementById("chch").innerHTML = "paper";
    });
    var scissors = document.getElementById("imgscissors").addEventListener("click", (e) => {
    document.getElementById("chch").innerHTML = "scissors";
    });

function plSelect(){
    if (document.getElementById("chch").innerHTML === 'rock') { return 'rock' }
    else if (document.getElementById("chch").innerHTML ==='paper') {return 'paper'}
    else if (document.getElementById("chch").innerHTML === 'scissors') {return 'scissors'}
    else { document.getElementById("chch").innerHTML = "Select one"}
}


function computerPlay() {
var options = ["rock", "paper", "scissors"];
var index = Math.floor(Math.random() * options.length);
return options[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = plSelect();
    computerSelection = computerPlay();
    
    if (playerSelection == computerSelection) {
    document.getElementById("cpuch").innerHTML = computerSelection;
    document.getElementById("result").innerHTML = "it's a tie, hunty";
    document.getElementById('compsel').src='/images/rps4.png'

}  else if (playerSelection == 'rock') {
    switch (computerSelection) {
      case 'paper':
        document.getElementById("cpuch").innerHTML = computerSelection;
        document.getElementById('compsel').src='/images/rps2.png'
        console.log("you selected: " + playerSelection);
        console.log("cpu selected: " + computerSelection);
        document.getElementById("result").innerHTML = "You lose! Paper beats Rock";
        computerScore++
        break;
      case 'scissors':
        document.getElementById("cpuch").innerHTML = computerSelection;
        document.getElementById('compsel').src='/images/rps3.png'
        console.log("you selected: " + playerSelection);
        console.log("cpu selected: " + computerSelection);
        document.getElementById("result").innerHTML = "You win! rock beats scissors";
        userScore++
        break;
    }
} else if (playerSelection == 'paper') {
    switch (computerSelection) {
      case 'rock':
        document.getElementById("cpuch").innerHTML = computerSelection;
        document.getElementById('compsel').src='/images/rps1.png'
        console.log("you selected: " + playerSelection);
        console.log("cpu selected: " + computerSelection);
        document.getElementById("result").innerHTML = "you win, paper beats rock";

        userScore++
        break;
      case 'scissors':
        document.getElementById("cpuch").innerHTML = computerSelection;
        document.getElementById('compsel').src='/images/rps3.png'
        console.log("you selected: " + playerSelection);
        console.log("cpu selected: " + computerSelection);
        document.getElementById("result").innerHTML = "you lose, scissors beat paper";
        computerScore++
        break;
    }
} else if (playerSelection == 'scissors') {
    switch (computerSelection) {
      case 'rock':
        document.getElementById("cpuch").innerHTML = computerSelection;
        document.getElementById('compsel').src='/images/rps1.png'
        console.log("you selected: " + playerSelection);
        console.log("cpu selected: " + computerSelection);
        document.getElementById("result").innerHTML = "you lose, rock beats scissors";
        computerScore++
        break;
      case 'paper':
        document.getElementById("cpuch").innerHTML = computerSelection;
        document.getElementById('compsel').src='/images/rps2.png'
        console.log("you selected: " + playerSelection);
        console.log("cpu selected: " + computerSelection);
        document.getElementById("result").innerHTML = "you win, scissors beat paper";
        userScore++
        break;
    }
} 
document.getElementById("result2").innerHTML = ('user score ' + userScore + ', cpu score ' + computerScore)
timedImg()
finalResult()
}

function timedImg() {
    setTimeout(replaceImg,2000);
}

function replaceImg(){
    document.getElementById('compsel').src='images/rps0.gif';
}

function finalResult(){
    if (userScore < computerScore && computerScore == 5) {
        alert('you a looooooseeer, now sashay away')
    } else if (userScore > computerScore && userScore == 5) {
        alert('condragulations, you are the winner of this game')
    } else {console.log('333')}
}
