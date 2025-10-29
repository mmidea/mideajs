function solve(arr){

    let i = 0;
    let priceWithoutTaxes =0;

    while((arr[i] != "special")&&(arr[i] != "regular")){
        if(Number(arr[i])>0){
            priceWithoutTaxes += Number(arr[i]);
        }else{
            console.log("Invalid price!");
            
        }
    
    i++;
    

    }

 

    if(priceWithoutTaxes == 0){
        console.log("Invalid order!");
        return;
        
    }

    let taxes = priceWithoutTaxes * 0.20;
    let sumWithTaxes = priceWithoutTaxes + taxes;
    if(arr[i] == "special"){
        sumWithTaxes *= 0.90;
    }

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${sumWithTaxes.toFixed(2)}$`);
    
    
    
    
    

}
solve([

    '1050',
    
    '200',
    
    '450',
    
    '2',
    
    '18.50',
    
    '16.86',
    
    'special'
    
    ]);