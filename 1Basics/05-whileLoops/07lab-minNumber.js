function minNumber(input){
    let minNumber = Number.MAX_SAFE_INTEGER;
    let curNumber = input[0];
    let i = 0;
    while (curNumber !== 'Stop') {
        if(minNumber > Number(curNumber)){
            minNumber = Number(curNumber)   
        }
        i++;
        curNumber = input[i];
    }
    console.log(minNumber);
    
    
    }
    minNumber(["-1", "-2", "Stop"]);