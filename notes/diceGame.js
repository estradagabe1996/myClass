// we need 3 functions kind of 

// user 1
    let dice1 = Math.ceil(Math.random() * 6);
    let dice2 = Math.ceil(Math.random() * 6);
    let totalOne = dice1 + dice2;
    console.log("Player 1: ", totalOne)

// user 2
    let dice3 = Math.ceil(Math.random() * 6);
    let dice4 = Math.ceil(Math.random() * 6);
    let totalTwo = dice3 + dice4;
    console.log("Player 2: ", totalTwo)

// And results

    function diceRoll(){
        if(totalOne > totalTwo){
            console.log("Player 1 Wins!");
        } else if(totalOne < totalTwo){
            console.log("Player 2 Wins!");
        } else 
        console.log("Players tied.");
        }

// Called Functions
diceRoll();

console.log("anything");
    