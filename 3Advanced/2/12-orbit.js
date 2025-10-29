function solve(arr){
let [rows, cols, x, y] = arr;
let field =[];
let counter = 0;
for(let red =0; red < rows; red++){
    let shablon = [];
   for( let col =0;col < cols; col++){
   shablon.push("0");}
field.push(shablon);
}

field[x][y] = 1;

let numToFill = 2;
let otstoqnieOt1 = 1;
let otstoqnieOtOtstoqnieto = 1;
let flat = field.flat().filter(x => x=="0").length;
//console.log(flat);


while(flat){
 for(let j = otstoqnieOtOtstoqnieto; j >= 1; j--){
     if(x-otstoqnieOt1>=0){
        field[x-otstoqnieOt1][Math.max(0, y-j)] = numToFill;
        //console.table(field);  
        field[x-otstoqnieOt1][Math.min(cols - 1, y+j)] = numToFill;
        //console.table(field);
        field[x-otstoqnieOt1][y] = numToFill;
        //console.table(field);
        }

     if(x+otstoqnieOt1<=rows-1){
        field[x+otstoqnieOt1][Math.max(0, y-j)] = numToFill;
        //console.table(field);  
        field[x+otstoqnieOt1][Math.min(cols - 1, y+j)] = numToFill;
        //console.table(field);
        field[x+otstoqnieOt1][y] = numToFill;
        //console.table(field);
     }
        
    //nalqvo
     if(y-otstoqnieOt1>=0){
       field[Math.max(0,x-j)][y-otstoqnieOt1] = numToFill;
       //console.table(field);
       field[Math.min(rows-1,x+j)][y-otstoqnieOt1] = numToFill;
       //console.table(field);
       field[x][y-otstoqnieOt1] = numToFill;
     }
  //nadqsno
       if(y+otstoqnieOt1<=cols-1){
       field[Math.max(0,x-j)][y+otstoqnieOt1] = numToFill;
       //console.table(field);
       field[Math.min(rows-1,x+j)][y+otstoqnieOt1] = numToFill;
       //console.table(field);
       field[x][y+otstoqnieOt1] = numToFill;
     }
   
    }
    otstoqnieOtOtstoqnieto++;
    otstoqnieOt1++;
    numToFill++;
    

flat = field.flat().filter(x => x=="0").length;
//console.log(flat);


}

    //field[x-otstoqnieOt1][y]
    //field[x+otstoqnieOt1][y]
    //field[x][y-otstoqnieOt1]
    //field[x][y+otstoqnieOt1]

//console.table(field)
field.forEach(x => console.log(x.join(" "))
)
}
solve([3, 3, 2, 2]);