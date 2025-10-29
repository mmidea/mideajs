function solve(arr, info){
let newArr = arr.slice(0,info[0]);

newArr.splice(0,info[1]);

let counter = 0;

while(newArr.includes(info[2])){
    counter++;
    let inx = newArr.indexOf(info[2]);
    newArr.splice(inx,1);
}
console.log(`Number ${info[2]} occurs ${counter} times.`);

//console.log(newArr);
}
solve([5, 2, 3, 4, 1, 6],

    [5, 2, 3] );