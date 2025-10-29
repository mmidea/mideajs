function solve(store, orders){
    let storeProducts ={};
for(let i=0; i<store.length; i = i+2){
    
    storeProducts[store[i]]=Number(store[i+1]);
   
}
//console.log(storeProducts);
let keys = Object.keys(storeProducts);
//console.log(keys);

for(let i=0; i<orders.length; i = i+2){
if( keys.includes(orders[i]) ){
    storeProducts[orders[i]] = storeProducts[orders[i]] + Number(orders[i+1]);

}else{
    storeProducts[orders[i]]=Number(orders[i+1]);
}

}

let kvps = Object.entries(storeProducts);
for(let kvp of kvps){
     console.log(`${kvp[0]} -> ${kvp[1]}`);
    
}




}
solve([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ]);