function dog(input){

    let foodPurchased = Number(input[0])*1000;
    let curLIne = input[1];
    let i = 1;
    let eatenFood = 0;
    while (curLIne !== "Adopted"){

        eatenFood += Number(curLIne);
        
        i++;
        curLIne = input[i];

    }
    if(eatenFood > foodPurchased ){
        console.log(`Food is not enough. You need ${eatenFood - foodPurchased} grams more.`);

    }
    else {
        console.log(`Food is enough! Leftovers: ${foodPurchased - eatenFood} grams.`);
        
    }
 
         

}
dog(["4",

    "130",
    
    "345",
    
    "400",
    
    "180",
    
    "230",
    
    "120",
    
    "Adopted"]);