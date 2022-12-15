// Rock, Paper, Scissors: Refactored with Functions

const initGame = () => {
    const startGame = confirm("Shall we play rock, paper, or scissors?");
    startGame ? playerGame() : alert("Ok, may be next time.")
};

// Game flow function

const playerGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === "") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decidedNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice) {
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();

        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if(askToPlayAgain()){
            continue;
        }else{
            thanksForPlaying();
            break;
        }
    }

};




const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, scissors.");
};

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

const invalidChoice = () => {
    alert("you didn't enter rock, paper, scissors.")
};

const decidedNotToPlay = () => {
    alert("I guess you changed your mind, may be next time.")
};

const evaluatePlayerChoice = (playerChoice) => {
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    } else {
        return false;
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
    const winner =
                   player === computer? "Tie Game"
                   :player==="rock" && computer === "paper" 
                   ?`player : ${player} \ncomputer : ${computer}
                    \n Computer Wins!` 
                   :player==="paper" && player==="scissors"
                   ?`player : ${player} \ncomputer : ${computer}
                    \n computer Wins!`
                   :player === "scissors" && computer === "rock"
                   ?`player : ${player} \ncomputer : ${computer}
                    \n Computer Wins!`
                   :`player : ${player} \ncomputer : ${computer}
                    \n Player Wins!`

    return winner;
};

const displayResult = (result)=>{
    alert(result);
}

const askToPlayAgain = ()=>{
    return confirm("Play Again?");
}

const thanksForPlaying = ()=>{
    alert("Ok, thanks for playing");
}


initGame();