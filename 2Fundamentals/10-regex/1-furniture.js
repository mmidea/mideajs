function solve(arr){
    let i = 0;
    let line = arr[0];
let pattern = />>(?<item>[A-Z]\w*)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/;
console.log("Bought furniture:");
let totalPrice =0;

    while(line !== "Purchase"){
        if(pattern.test(line)){
            let match = pattern.exec(line);
            let {item, price, quantity} = match.groups;
            
            console.log(item);
            totalPrice += price*quantity;
        }
        
        
        //let {item, price, quantity} = match.groups;
        i++;
        line = arr[i];

    }

    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
    

// />>[A-Z]\w*<<\d+\.?\d*!\d+/gm;
}
solve(['>>Laptop<<312.2323!3',

    '>>TV<<300.21314!5',
    
    '>Invalid<<!5',
    
    '>>TV<<300.21314!20',
    
    '>>Invalid<!5',
    
    '>>TV<<30.21314!5',
    
    '>>Invalid<<!!5',
    
    'Purchase']);