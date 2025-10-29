// • Пакет химикали - 5.80 лв.

// • Пакет маркери - 7.20 лв.

// • Препарат - 1.20 лв (за литър) 

// От конзолата се четат 4 числа:

// · Брой пакети химикали - цяло число в интервала [0...100]

// · Брой пакети маркери - цяло число в интервала [0...100]

// · Литри препарат за почистване на дъска - цяло число в интервала [0…50]

// · Процент намаление - цяло число в интервала [0...100]

function suppliesForSchool(input){
    let pencilsPacks = Number(input[0]);
    let markerPacks = Number(input[1]);
    let liquidLitres = Number(input[2]);
    let discount = (Number(input[3]))/100;
    let sum = (pencilsPacks * 5.80 + markerPacks * 7.20 + liquidLitres * 1.20);

    

    let sumWithDiscount =  sum - sum * discount;
    console.log(sumWithDiscount);
    
}
suppliesForSchool(["4 ",

    "2 ",
    
    "5 ",
    
    "13 "]);