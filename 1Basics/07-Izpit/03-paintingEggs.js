function paintingEggs(eggKind, color, partids){
let price = 0;
    switch (eggKind) {
        case "Large":
            if(color === "Red"){price = 16}
            else if (color === "Green"){price = 12}
            else if (color === "Yellow"){ price = 9}
            
            break;
    
       case "Medium":
        if(color === "Red"){price = 13}
        else if (color === "Green"){price = 9}
        else if (color === "Yellow"){ price = 7}

       break;

       case "Small":
        if(color === "Red"){price = 9}
        else if (color === "Green"){price = 8}
        else if (color === "Yellow"){ price = 5}

       break;
    }

    let profit = partids * price * 0.65;
    console.log(`${(profit).toFixed(2)} leva.`);
    

    

}
paintingEggs("Large",

    "Red",
    
    7);