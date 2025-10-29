function ticTac(arr){
let dashboard = 
[[false, false, false],
 [false, false, false], 
 [false, false, false]];
 let haveWinner = false;
let counter = 0;
let turns =0;
let player = "";
for(let move of arr){
let [firstCord, secCord ]= move.split(" ");
if(dashboard[firstCord][secCord] != false){
    console.log("This place is already taken. Please choose another!");
    //console.log(firstCord, secCord);
    
    continue;}
    player = counter%2 == 0 ? "X":"O";
    //console.log(player);
    dashboard[firstCord][secCord] = player;
    for(let i = 0; i <=2; i++){
     //dashboard[i][0] == dashboard[i][1]  && dashboard[i][2] == player
     //dashboard[0][i] == dashboard[1][i]  && dashboard[2][i] == player
    // dashboard[0][0] == dashboard[1][1] == dashboard[2][2] player
    // dashboard[0][2] == dashboard[1][1] == dashboard[2][0] player
     
     if(player ==dashboard[i][0] && player ==dashboard[i][1] && player == dashboard[i][2]){
        console.log(`Player ${player} wins!`);
        haveWinner = true;
        break;}
     if(player == dashboard[0][i] && player == dashboard[1][i] && player == dashboard[2][i]){
        console.log(`Player ${player} wins!`);
        haveWinner = true;
        break;}
    }
    if(haveWinner){break;}


    if(player == dashboard[0][0] && player == dashboard[1][1] && player == dashboard[2][2]){
       console.log(`Player ${player} wins!`);
        break;}
     if(player == dashboard[0][2] && player == dashboard[1][1] && player == dashboard[2][0]){
       console.log(`Player ${player} wins!`);
        break;}
  

counter++;
turns++;
if(turns ==9){
    console.log("The game ended! Nobody wins :(");
    break;
    
}

}

dashboard.forEach(el => console.log(el.join("\t")));



}
ticTac(["0 1",

"0 0",

"0 2",

"2 0",

"1 0",

"1 2",

"1 1",

"2 1",

"2 2",

"0 0"]);