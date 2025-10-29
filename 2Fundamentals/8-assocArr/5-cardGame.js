function cardGame(arr){
let players ={};

for(let line of arr){
let [name, cards]= line.split(": ");
cards = cards.split(", ");

if(!players.hasOwnProperty(name)){
players[name] = [];}

for(let card of cards){
if(!players[name].includes(card)){
    players[name].push(card);
}    
}
}

let allPlayers = Object.keys(players);

for(let player of allPlayers){
let cardValue =0;
let valueAllCArds = 0;
    for(let card of players[player]){
        //izchislqvane power na vsqka karta v edin player
        let realPower = 0;
        if(card.length == 2){
        let power =card[0];
        if(Number(power)>=2 && Number(power)<=9){
          realPower = Number(power); 
        }else{
          switch (power) {
            case "J": realPower = 11;break;
            case "Q": realPower = 12;break;
            case "K": realPower = 13;break;
            case "A": realPower = 14;break;
            
          }
        }  
    }else{realPower=10;}
//izchislqvane multi na vsqka karta za edin player
let typeCard = card[card.length -1];
let multi = 0;
switch (typeCard) {
    case "S": multi = 4;break;
    case "H": multi = 3;break;
    case "D": multi = 2;break;
    case "C": multi = 1;break;  
}

 cardValue = realPower * multi;
 valueAllCArds += cardValue;

}

console.log(`${player}: ${valueAllCArds}`);

}
}
cardGame([

    'John: 2C, 4H, 9H, AS, QS',
    
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'John: JD, JD, JD, JD'
    
    ]);