function solve(arr){
let participants = arr.shift().split(", ");
//console.log(participants);
let objParticipants = {};
for(let el of participants){
    objParticipants[el] = 0;
}

let curline = arr.shift();

while(curline !== 'end of race'){

let name = "";
let miles = 0;
let testLetter = /[A-Za-z]/;
let testNumber = /[0-9]/;

for(let char of curline){
if(testLetter.test(char)){
name += char;
}
if(testNumber.test(char)){
miles += Number(char);
}    
}

miles = Number(miles);

if(objParticipants.hasOwnProperty(name)){
    objParticipants[name] += miles;
}




    curline = arr.shift();
}

let kvps = Object.entries(objParticipants).sort((a, b) => b[1] - a[1]);

console.log(`1st place: ${kvps[0][0]}`);
console.log(`2nd place: ${kvps[1][0]}`);
console.log(`3rd place: ${kvps[2][0]}`);





}
solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    
    'Mi*&^%$ch123o!#$%#nne787) ',
    
    '%$$B(*&&)i89ll)*&) ',
    
    'R**(on%^&ald992) ',
    
    'T(*^^%immy77) ',
    
    'Ma10**$#g0g0g0i0e',
    
    'end of race']);