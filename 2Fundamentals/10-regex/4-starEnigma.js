function solve(arr){
let countLines = Number(arr[0]);
arr.shift();
let attacked = [];
let destroyed = [];
let patternStar = /[star]/gmi;
let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*?:[^@\-!:>]*?(?<pop>\d+)[^@\-!:>]*?!(?<AD>[AD])![^@\-!:>]*?->(?<count>\d+)/;
for(let i = 0; i < countLines; i++){
    let line = arr[i];
    let starCount = line.match(patternStar);
    if(starCount){
        starCount = starCount.length;
    
    }else{starCount = 0};

    let newLine = "";
    //console.log(starCount);
    for ( let char of line){
        let newChar = String.fromCharCode(char.charCodeAt(0) - starCount);
        //console.log(newChar);
        newLine += newChar;
        
    }

  
if(pattern.test(newLine)){
    
  let match = pattern.exec(newLine);
  let {name, pop, AD, count}  = match.groups;
  //console.log(name, pop, AD, count);
  if(AD == "A"){
  attacked.push(name);
  }else{
 destroyed.push(name);
  }
  
  
    
}
 
}
//console.log(attacked);
//console.log(destroyed);
attacked.sort((a, b) =>  a.localeCompare(b)); 
destroyed.sort((a, b) =>  a.localeCompare(b)); 

console.log(`Attacked planets: ${attacked.length}`);
attacked.forEach( ( x => console.log(`-> ${x}`) ) );

console.log(`Destroyed planets: ${destroyed.length}`);
destroyed.forEach( ( x => console.log(`-> ${x}`) ) );




}
solve(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
//solve(['3',

   // "tt(''DGsvywgerx>6444444444%H%1B9444",
   // 
   // 'GQhrr|A977777(H(TTTT',
    
   // 'EHfsytsnhf?8555&I&2C9555SR'] );