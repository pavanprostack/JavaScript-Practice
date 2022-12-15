// updating previuos game using while loop

let playGame = confirm("Shall we play rock, paper, or scissors game?");

if(playGame){

    while (playGame) {

        const playerChoice = prompt("please enter rock, paper, scissors");

        if (playerChoice || playerChoice === "") {

            const playerOne = playerChoice.trim().toLowerCase();

            if (playerOne === "rock" ||
                playerOne === "paper" ||
                playerOne === "scissors") {
    
                const computerChoice = Math.floor(Math.random() * 3);
                const rpsArray = ["rock", "paper", "scissors"];
                const computer = rpsArray[computerChoice];
    
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
    
                playGame=confirm("Play Again?");
                if(!playGame){
                    alert("Ok, thanks for playing.");
                    continue;
                }
                    
            } else {
                alert("you didn't enter rock, paper, scissors.");
                continue;
            }
        } else {
            alert("I guess you changed your mind, may be next time.")
            break;
        }
    }

}else{
    alert("Ok, may be next time.")
}


