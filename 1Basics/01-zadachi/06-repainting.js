// · Предпазен найлон - 1.50 лв. за кв. метър
// · Боя - 14.50 лв. за литър
// · Разредител за боя - 5.00 лв. за литър

// За всеки случай, към необходимите материали, Румен иска да добави още 10% от количеството
//  боя и 2 кв.м. найлон, разбира се и 0.40 лв. за торбички. Сумата, която се заплаща на майсторите
//   за 1 час работа, е равна на 30% от сбора на всички разходи за материали.
//Входът се чете от конзолата и съдържа точно 4 реда:
// 1. Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
// 2. Необходимо количество боя (в литри) - цяло число в интервала [1…100]
// 3. Количество разредител (в литри) - цяло число в интервала [1…30]
// 4. Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9] 
function repainting(input){

    let nailonMeter = Number(input[0]);
    let paintLittre = Number(input[1]);
    let razreditelLitter = Number(input[2]);
    let hours = Number(input[3]);
      
    let nailonMeterSum = 1.5 * (nailonMeter + 2);
    let paintLittreSum = 1.1 * (14.50 * paintLittre);
    let razreditelLitterSum = 5 * razreditelLitter;
    let sumMaterials = nailonMeterSum + paintLittreSum + razreditelLitterSum + 0.4;
    
    let hoursSum = 0.3 * sumMaterials * hours;
    let sum = sumMaterials + hoursSum;
    console.log(sum);
    
    }
    repainting(["5 ",
    
        "10 ",
        
        "10 ",
        
        "1 "]);