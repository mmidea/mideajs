function solve(...arr){
let num = Number(arr.shift());

for(let i = 1; i<=5; i++){
    let command = arr.shift();
switch (command) {
    case "chop": num /= 2;
        console.log(num);
        break;
        case "dice": num = Math.sqrt(num);
        console.log(num);
        break;
        case "spice": num += 1;
        console.log(num);
        break;
        case "bake": num *= 3;
        console.log(num);
        break;
        case "fillet": num *= 0.8;
        console.log(num);
        break;


}
}
}
solve('9', 'dice', 'spice', 'chop', 'bake','fillet');