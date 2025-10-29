function solve(...all){
let result = {};

for(let argument of all){
    let type = typeof(argument);
    console.log(`${type}: ${argument}`);
    if(result.hasOwnProperty(type)){
        result[type] += 1;
    }else{
        result[type] = 1;
    }
    
}

let kvps = Object.entries(result).sort((a, b) => b[1] - a[1]);

kvps.forEach(kvp => console.log(`${kvp[0]} = ${kvp[1]}`))


}
solve('cat', 42, function () { console.log('Hello world!'); } )