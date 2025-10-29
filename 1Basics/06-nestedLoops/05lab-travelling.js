function traveling(input) {
    let index = 0;
    let curDestination;
    let curTripCoast;
    let curInput = input[index];
   
    
    while (curInput !== "End") {
        curDestination = input[index];
        index++;
        curTripCoast = Number(input[index]);
        index++;
        let allSavedMoney = 0;

        for (index; index < input.length; index++) {
            let curSaving = Number(input[index]);
            allSavedMoney += curSaving;
            if (allSavedMoney >= curTripCoast){
                console.log(`Going to ${curDestination}!`);
                break;
            }    
        }


        index++;
        curInput = input[index];
    
    }





}
traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);