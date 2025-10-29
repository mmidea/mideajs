function solve(arr){


    arr.sort((a , b) => a.length - b.length || a.localCompare(b));



console.log(arr);

}
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);