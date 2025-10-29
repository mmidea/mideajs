function solve(n){
    let buff = "";
    let curCube1 = "";
    let curCube2 = "";
    for(i = 1; i <= n; i++){
        if(curCube1 == "#"){curCube1 = " "}
        else{curCube1 = "#"}
        

for(j = 1; j <= n; j++){ 
   buff += curCube1;
   if(curCube1 == "#"){curCube1 = " "}
        else{curCube1 = "#"}

}
   buff += "\n"
   
    }
console.log(buff);

}
//solve(3);
solve(8);