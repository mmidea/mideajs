function steps(input){

let curSteps = input[0];
let sumSteps = 0;
let i = 0;

while (sumSteps < 10000) {
    if(curSteps === "Going home"){
        sumSteps += Number(input[i+1]);

        break;
    }

    sumSteps += Number(curSteps);
    i++;  
    curSteps = input[i];
}

if (sumSteps < 10000) {
    
    console.log(`${10000-sumSteps} more steps to reach goal.`); 
} else {
    console.log(`Goal reached! Good job!`);
    console.log(`${sumSteps - 10000} steps over the goal!`);
    
    
}

}
steps(["125", "250", "4000", "30", "2678", "4682"]);