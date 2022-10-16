const drawLottery = (numberOfPlayers) => {
    let finalizedRanks = ["Lottery Results of Rankings...."];
    let ranks = Array.from(Array(numberOfPlayers).keys());
    let personNumber = 1;
    let i = ranks.length;
    while (i--) {
        var random = ranks.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        finalizedRanks.push(`\n Person ${personNumber} - Rank ${random + 1}`);
        personNumber++;
    }
    window.alert(finalizedRanks);
}

const numberOfPlayers = parseInt(window.prompt("Enter number of players"));

if(isNaN(numberOfPlayers)){
    console.log("Entered value was not a number");
} else if(numberOfPlayers < 1){
    console.log("Enter a positive number");
} else {
    drawLottery(numberOfPlayers);
}