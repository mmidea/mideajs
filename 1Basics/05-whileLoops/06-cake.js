function cake(input){
    let allPieces = Number(input[0])*Number(input[1]);
    index = 2;
    let curTakenPieces = input[index];
    let sumTakenPieces = 0;
    
    while (curTakenPieces !== "STOP") {
        sumTakenPieces += Number(curTakenPieces);
        if (sumTakenPieces >= allPieces) {   
            console.log(`No more cake left! You need ${sumTakenPieces - allPieces} pieces more.`);
            break;
        }
        index++;
        curTakenPieces = input[index];
    }
    
    if(curTakenPieces === "STOP"){
        console.log(`${allPieces - sumTakenPieces} pieces are left.`);
        
    }
    
    
    }