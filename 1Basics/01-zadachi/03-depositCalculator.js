// От конзолата се четат 3 реда:

// 1. Депозирана сума – реално число в интервала [100.00 … 10000.00]

// 2. Срок на депозита (в месеци) – цяло число в интервала [1…12]

// 3. Годишен лихвен процент – реално число в интервала [0.00 …100.00]

function depositCalculator(input){
    let deposit = Number(input[0]);
    let ratio = Number((input[2])/100);
    let sum = deposit + Number(input[1])*((deposit * ratio)/12);
    console.log(sum);
    
    
    }
    depositCalculator(["2350",
    
        "6 ",
        
        "7 "]);