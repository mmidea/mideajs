function solve(stepsCount, footMeter, kmsPerHour ){
let footKm = footMeter/1000;
let minutesToAdd = Math.floor(footKm*stepsCount*1000/500);
//console.log(minutesToAdd);

let time = ((footKm*stepsCount/kmsPerHour))*60;
//console.log(time);
let arr = [];
//console.log(Math.round((time + minutesToAdd)*60));
let allSeconds = Math.round((time + minutesToAdd)*60);
let hours = Math.trunc(allSeconds/(60*60));
//arr.push(hours);
allSeconds = allSeconds - hours*60*60;
let minutes = Math.trunc(allSeconds/60);
//arr.push(minutes);
allSeconds -= minutes*60;
let seconds = allSeconds;
arr.push(hours, minutes, seconds);
arr = arr.map((x) => {
    if((String(x)).length == 1){
         x =  "0" + String(x)}else{
            x = String(x);
         }
         return x;
        
});


console.log(arr.join(":"));




}
solve(4000, 0.60, 5);