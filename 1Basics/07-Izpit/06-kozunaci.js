function kozunaci(input){

    let numKozunaci = Number(input[0]);
    let i = 0;
    let winnerBaker = "";
    let winnerPoints = 0;

    for (let kozunak = 1; kozunak <= numKozunaci; kozunak++) {
        
        i++;
        let curBaker = input[i];
        i++;
        let curCommand = input[i];

        let points = 0;

        while(curCommand !== "Stop"){
           points += Number(curCommand);
           i++;
           curCommand = input[i];
        }

        console.log(`${curBaker} has ${points} points.`);
        
        
        if(points > winnerPoints){
            winnerPoints = points;
            winnerBaker = curBaker;
            console.log(`${curBaker} is the new number 1!`);
            
        }

        
    }

    console.log(`${winnerBaker} won competition with ${winnerPoints} points!`);
    
    

            

}
kozunaci(["2",

    "Chef Angelov",
    
    "9",
    
    "9",
    
    "9",
    
    "Stop",
    
    "Chef Rowe",
    
    "10",
    
    "10",
    
    "10",
    
    "10",
    
    "Stop"]);