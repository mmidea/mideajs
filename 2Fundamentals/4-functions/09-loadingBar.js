function loadingBar(loadingNumber){


    if(loadingNumber < 100){
        let numOfProcents = loadingNumber/10;
        let numOfDots = 10-numOfProcents;
        let output = `${loadingNumber}% [` + '%'.repeat(numOfProcents ) + ".".repeat(numOfDots) + `]`;

        console.log(output);
        console.log("Still loading...");
        
        
    }else{
        console.log(`${loadingNumber}% Complete!`);
        console.log("[%%%%%%%%%%]");
        
        
    }
}
loadingBar(70);