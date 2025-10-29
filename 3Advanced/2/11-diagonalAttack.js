function solve(arr){
let matrix =[];
let newMatrix = [];

while(arr.length){
    //console.log(arr.shift().split(" "));
    
  matrix.push(arr.shift().split(" ")); 
   
}



//console.log(matrix);

let length = matrix.length;
let sum1 = 0;
let sum2 = 0;
//console.log(matrix.forEach(x => console.log(x)));


for(let i =0; i < matrix.length; i++){
    //console.log(matrix[i][i]);
    
sum1 += Number(matrix[i][i]);
sum2 += Number(matrix[matrix.length-1-i][i]);

}
//console.log(sum1, sum2);

if(sum1 == sum2){

for(let red =0; red < matrix.length; red++){
    let shablon = [];
   for( let col =0;col < matrix.length; col++){
   shablon.push(sum1);
   //console.log("jhjhjhj");
   
   }
//console.log(shablon);
newMatrix.push(shablon);

}


for(let i =0; i < matrix.length; i++){
    //console.log(matrix[i][i]);
    
 newMatrix[i][i] = matrix[i][i];
newMatrix[matrix.length-1-i][i] = matrix[matrix.length-1-i][i];

}
//console.log(newMatrix);
newMatrix.forEach(x => console.log(x.join(" ")))






}else{

    matrix.forEach(x => console.log(x.join(" ")))
}

}
solve(['5 3 12 3 1',

'11 4 23 2 5',

'101 12 3 21 10',

'1 4 5 2 2',

'5 22 33 11 1']);