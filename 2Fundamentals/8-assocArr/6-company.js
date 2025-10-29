function solve(arr){
let companies = {};

for(let command of arr){
    let [company, idEployee] = command.split(" -> ");
    if(companies.hasOwnProperty(company)){
        companies[company].push(idEployee);
    }else{
        companies[company] = [];
        companies[company].push(idEployee);
    }
    
    
}
let keys = Object.keys(companies);

for( let key of keys){
    let set = new Set(companies[key]);
    companies[key]=set;
}

keys = keys.sort((a, b) =>  a.localeCompare(b));

for( let key of keys){

    console.log(`${key}`)
    let value = companies[key];
    for(let el of value){
        console.log(`-- ${el}`);
        
    }

}
}
solve([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ]);