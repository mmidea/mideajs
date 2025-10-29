function tennis(input) {
    let tournamentCount = Number(input[0]);
    let startPoints = Number(input[1]);
    let allNewPoints = 0;
    let winsCount = 0;

    for (let i = 2; i <= (tournamentCount + 1); i++) {
        let curTournament = input[i];

        switch (curTournament) {
            case 'W': allNewPoints += 2000; winsCount++;
                break;
            case 'F': allNewPoints += 1200;
                break;
            case 'SF': allNewPoints += 720;
                break;
    

        }

    }

console.log(`Final points: ${startPoints + allNewPoints}`);
console.log(`Average points: ${Math.floor(allNewPoints/tournamentCount)}`);
console.log(`${((winsCount*100)/tournamentCount).toFixed(2)}%`);

}
tennis(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]) ;
