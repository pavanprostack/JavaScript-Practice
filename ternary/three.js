

let player = "rock";
let computer = "pk";

let result =
             player === computer 
            ? "Tie game"
            :player==="rock" && computer==="paper"
            ? "computer wins"
            :player==="paper" && computer==="scissors"
            ?"computer wins" 
            :player==="scissors" && computer==="rock"
            ?"computer wins" 
            :"player wins"

console.log(result)           

            