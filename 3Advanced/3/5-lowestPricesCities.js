function solve(data){
let result={};

for(let line of data){
    let[city, product, price] = line.split(" | ");
    price = Number(price);
    if(!result.hasOwnProperty(product)){
  result[product] = { city, price}
    }else{
        if(result[product]["price"] > price){
          result[product]["price"] = price;
          result[product]["city"] = city 
        }
    }
    
}

for(let key in result){
    console.log(`${key} -> ${result[key]["price"]} (${result[key]["city"]})`);
    
}


}
solve(["Sofia City | Audi | 100000",
"Sofia City | BMW | 100000",
"Sofia City | Mitsubishi | 10000",
"Sofia City | Mercedes | 10000",
"Sofia City | NoOffenseToCarLovers | 0",
"Mexico City | Audi | 1000",
"Mexico City | BMW | 99999",
"Mexico City | Mitsubishi | 10000",
"New York City | Mitsubishi | 1000",
"Washington City | Mercedes | 1000"])