function solve(rows, cols){
let field = [];
    for(let red =0; red < rows; red++){
    let shablon = [];
   for( let col =0;col < cols; col++){
   shablon.push(0);}
field.push(shablon);
}

let colsIndex = cols -1;
let rowsIndex = rows - 1;
let otlqvoStartIndex = 0;
let otgoreStartIndex = 0;

let flat = field.flat().filter(x => x=="0").length;
let x =0;
let y =0;
let posoka = ["nadqsno", "nadolu", "nalqvo", "nagore"]
let i = 0;
let numToFill = 1;
let nadqsnoCol = colsIndex;
let nalqvoCol = 0;
let nagoreRow = 1;
let nadoluRow = rowsIndex;
while(flat){
switch (posoka[i]) {
    case "nadqsno":
        colsIndex = nadqsnoCol;
        while(true){
            field[x][y] = numToFill;
            if(y == colsIndex ){
                nadqsnoCol--;
                break;}
            numToFill++;
            y++;    
        }
        break;
    
    case "nadolu":
        rowsIndex = nadoluRow;
        while(true){
            field[x][y] = numToFill;
            if(x == rowsIndex){
                nadoluRow--;
                break;}
            numToFill++;
            x++;
        }
        break;

    case "nalqvo":
        otlqvoStartIndex = nalqvoCol;
        while(true){
            field[x][y] = numToFill;
            if(y == otlqvoStartIndex){
                nalqvoCol++;
                break;}
            numToFill++;
            y--;
        }
        break;

    case "nagore":
        otgoreStartIndex = nagoreRow;
        while(true){
            field[x][y] = numToFill;
            if(x == otgoreStartIndex){
                nagoreRow++;
                break;}
            numToFill++;
            x--;
        }
        break;

    
}


i++
if(i == 4){i=0;}
 flat = field.flat().filter(x => x=="0").length;   
}

field.forEach(x => console.log(x.join(" "))
)
//console.log(field);


}
solve(3, 3);