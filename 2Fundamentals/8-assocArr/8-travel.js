function solve(arr){
let countries = {};

for( let el of arr){
   let [country, town, cost] = el.split(" > ");
   cost = Number(cost);
   if(!countries.hasOwnProperty(country)){
    //ako nqmame takava dyrjava - dobavqme dyrjavata s grada
    countries[country] = {};
    countries[country][town] = cost;
   }else{
    //ako imame dyrjavata, no nqmame grada - dobavqme grada
    if(!countries[country].hasOwnProperty(town)){
        countries[country][town] = cost; 
    }else{
        // ako imame dyrjavata i grada - sravnqvame ofertite
       if(countries[country][town] > cost){countries[country][town] = cost;} 
    }

   }
}

let countriesKey = Object.keys(countries).sort((a, b) =>  a.localeCompare(b));
for(let country of countriesKey){
    
    let output = country + " ->";
 let kvps = Object.entries(countries[country]).sort((a, b) => a[1] - b[1]);  
   for(let [town, cost] of kvps){
  output += " " + town + " -> " + cost;
  
 }
 console.log(output);
 
}

}
solve([

    "Bulgaria > Sofia > 500",
    
    "Bulgaria > Sopot > 800",
    
    "France > Paris > 2000",
    
    "Albania > Tirana > 1000",
    
    "Bulgaria > Sofia > 200"
    
    ]);