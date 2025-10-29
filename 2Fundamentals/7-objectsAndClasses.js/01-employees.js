function solve(arr){

for(let el of arr){
    
    let firstObject = {
        name: el,
        number: el.length,
        printing:() => console.log(`Name: ${firstObject.name} -- Personal Number: ${firstObject.number}`)
    }

    firstObject.printing();
        
}

}
solve([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ]);