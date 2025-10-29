function coins(change){
change = Number(change);
let ednolevCount = 0;
let dvulevCount = 0;
let fiftyCount = 0;
let twentyCount = 0;
let tenCount = 0;
let fiveCount = 0;
let twoCount = 0;
let oneCount = 0;

let changeLevs = Math.trunc(change);

let changeStotinki = Math.round((change - changeLevs)* 100);

if(changeLevs % 2 == 0){
    dvulevCount = changeLevs/2;
} else {
    dvulevCount = Math.trunc(changeLevs/2);
    ednolevCount = 1;
}



// if(changeStotinki >= 50){
//     changeStotinki -= 50
//     fiftyCount++;
// }

// if(changeStotinki >=20){
//     twentyCount = Math.trunc(changeStotinki/20);
//     changeStotinki = changeStotinki - twentyCount*20;
// }

// if (changeStotinki >= 10){
//     tenCount = Math.trunc(changeStotinki/10);
//     changeStotinki = changeStotinki - tenCount*10;
// }

// if (changeStotinki >= 5){
//     fiveCount = Math.trunc(changeStotinki/5);
//     changeStotinki = changeStotinki - fiveCount*5;
// }

// if (changeStotinki >= 2){
//     twoCount = Math.trunc(changeStotinki/2);
//     changeStotinki = changeStotinki - twoCount*2;
// }

// if (changeStotinki >= 1){
//     oneCount = Math.trunc(changeStotinki/1);
//     changeStotinki = changeStotinki - oneCount*1;
// }


let masiv = [50, 20, 10, 5, 2, 1]; 
let newAllCoins = 0;
for (let index = 0; index <= 5; index++) {
  
let moneta = Number(masiv[index]);
let temp =0;
    if (changeStotinki >= moneta){
        temp = Math.trunc(changeStotinki/moneta);
        newAllCoins += temp;
        changeStotinki = changeStotinki - temp*moneta;
    }


    
}

console.log(newAllCoins + dvulevCount + ednolevCount);


// let allCoins = dvulevCount + ednolevCount + fiftyCount + twentyCount + tenCount + fiveCount + twoCount + oneCount; 
// console.log(allCoins);


}
coins(["2.73"]);