function solve(arr){

    let record = 0;
    let recordNum = 0;
    
   let backEl;
   let curEl; 
   let curRecord = 0;
  
for(let i = 0; i < arr.length; i++){
curEl = arr[i];
if(curEl == backEl){
    curRecord++;
}else
{
    
if(curRecord > record){
    record = curRecord;
    recordNum = backEl;
    curRecord = 0;}
    else if(curRecord = record){
        curRecord=0;
    }
}

backEl = curEl;

}
if(record == 0){
record = curRecord;
recordNum = curEl;
}
console.log(`${recordNum} `.repeat(record+1));

}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);