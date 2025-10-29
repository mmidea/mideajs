function solve(arr){

let line = arr.shift();
let totalIncome = 0;
let pattern = /%(?<name>[A-Z][a-z]+)%[^$%.|]*?<(?<product>\w+)>[^$%.|]*?\|(?<qty>\d+)\|[^$%.|]*?(?<price>\d+\.?\d+?)\$/;

while(line !== "end of shift"){

if(pattern.test(line)){
    let match = pattern.exec(line); 
    let {name, product, qty, price} = match.groups;
    //console.log(name, product, qty, price);
    price= Number(price);
    qty = Number(qty);
    totalIncome += qty*price;
    let total = qty*price;
    console.log(`${name}: ${product} - ${total.toFixed(2)}`);
    
    
}

    line = arr.shift();
}
console.log(`Total income: ${totalIncome.toFixed(2)}`);

}
solve(['%InvalidName%<Croissant>|2|10.3$',

    '%Peter%<Gum>1.3$',
    
    '%Maria%<Cola>|1|2.4',
    
    '%Valid%<Valid>valid|10|valid20$',
    
    'end of shift']);
solve(['%George%<Croissant>|2|10.3$',

    '%Peter%<Gum>|1|1.3$',
    
    '%Maria%<Cola>|1|2.4$',
    
    'end of shift'] );