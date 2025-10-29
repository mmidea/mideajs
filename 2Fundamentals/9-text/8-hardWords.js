function solve(arr){
let textArr = arr[0].split(" ");
//console.log(text);

let  hardWords = arr[1];

for(let word of hardWords){
    let shablon = "_".repeat(word.length);
    for(let i =0; i < textArr.length; i++ ){
        if(textArr[i] == shablon){
            textArr[i] = word;
            
            break;
        }
    }
    
}

console.log(textArr.join(" "));

}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more.   Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']] );
  