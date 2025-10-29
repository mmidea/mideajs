function solve(arr){
let minecraft = {};
for(let i = 0; i <arr.length; i ++){
    let material = arr[i];
    i++;
    let quantity = Number(arr[i]);
if(minecraft.hasOwnProperty(material)){
    minecraft[material] += quantity;
} else{
    minecraft[material] = quantity;
}   


}
for( let [key, value] of Object.entries(minecraft)){
    console.log(`${key} -> ${value}`)}

}
solve([

    'Gold',
    
    '155',
    
    'Silver',
    
    '10',
    
    'Copper',
    
    '17'
    
    ]);