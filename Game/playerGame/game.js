// Rock, paper, scissors game.....

let playGame = confirm("Shall we paly Rock, Paper, Scissors Game?");

if (playGame) {
    let playerChoice = prompt("please enter rock, paper, or scissors.");
    if (playerChoice) {

        let playerOne = playerChoice.trim().toLowerCase();

        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {

            let computerChoice = Math.floor(Math.random() * 4 + 1);
            
            let computer = computerChoice === 1 ? "rock"
                          : computerChoice === 2 ? "paper"
                          : "scissors";

            let result =
                playerOne === computer
                          ? "Tie game"
                          : playerOne === "rock" && computer === "paper"
                          ? `playerOne:${playerOne} \n computer:${computer}
                           \n computer wins!` 
                          : playerOne === "paper" && computer === "scissors"
                          ? `playerOne : ${playerOne} \ncomputer : ${computer}
                           \n computer wins!`
                          : playerOne === "scissors" && computer === "rock"
                          ? `playerOne : ${playerOne} \ncomputer : ${computer}
                           \n computer wins!`
                          : `playerOne : ${playerOne} \ncomputer : ${computer}
                          \n playerOne wins`
                alert(result);

                let playAgain = confirm("play again")
                playAgain ? location.reload() : alert("Thanks for playing have nice day...")

        } else {
            alert("you didn't enter rock, paper, scissors")
        }
    } else {
        alert("I guess you changed your mind. may be next time.")
    }
}
else {
    alert("Ok, may be next time.")
}