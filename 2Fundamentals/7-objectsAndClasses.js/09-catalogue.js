function solve(arr){
let catalogue ={};
for(let el of arr){
    let [product, price] =el.split(" : ");
    price = Number(price);
    catalogue[product] = price;   
}

let keys = Object.keys(catalogue).sort((a, b) =>  a.localeCompare(b));
//console.log(keys);
console.log(keys[0][0]);
console.log(`${keys[0]}: ${catalogue[keys[0]]}`);


for( let i=1; i<keys.length; i++){

    if(keys[i][0] != keys[i-1][0] ){
        console.log(`${keys[i][0]}`);
        
    }
   console.log(`${keys[i]}: ${catalogue[keys[i]]}`);
   
}

}
solve([

    'Appricot : 20.4',
    
    'Fridge : 1500',
    
    'TV : 1499',
    
    'Deodorant : 10',
    
    'Boiler : 300',
    
    'Apple : 1.25',
    
    'Anti-Bug Spray : 15',
    
    'T-Shirt : 10'
    
    ]);