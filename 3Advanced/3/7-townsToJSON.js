function solve(data){
let pattern = / ?\| ?/gm;
data.shift();
let result =[];
for(let line of data){
let coco = line.split(pattern); 
let Town = coco[1];
let Latitude = Number((Number(coco[2])).toFixed(2));
let Longitude = Number((Number(coco[3])).toFixed(2));
//console.log(town, latitude, longitude);
result.push ({
    Town, Latitude, Longitude
});

}
return JSON.stringify(result);

}
solve(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |'])