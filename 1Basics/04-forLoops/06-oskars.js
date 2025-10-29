function oskars(input){
let bgActor = input[0];
let firstPoints = Number(input[1]);
let juryCount = Number(input[2]);
let points = 0;

for (let i = 3; i < input.length ; i += 2) {
    let curJury = input[i];
    let curJuryPoints = Number(input[i+1]);
    let length = curJury.length;
    points = points + (length * curJuryPoints)/2;
    if((points + firstPoints)>1250.5){
        console.log(`Congratulations, ${bgActor} got a nominee for leading role with ${(points + firstPoints).toFixed(1)}!`);  
        break;
    }
  
}

if((points + firstPoints)<=1250.5){
    let pointsNeeded =(1250.5 - (points + firstPoints)).toFixed(1);
    console.log(`Sorry, ${bgActor} you need ${pointsNeeded} more!`);
    
}

}
oskars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);