// Rock, Paper, Scissors: Refactored with Functions

const initGame=()=>{
    const startGame=confirm("Shall we play rock, paper, or scissors?");
    startGame? playerGame() : alert("Ok, may be n")
}