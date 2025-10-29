function pig(arr){
let foodGrams = Number(arr[0])* 1000;
let hayGrams = Number(arr[1])* 1000;
let coverGrams = Number(arr[2])* 1000;
let pigWeightGrams = Number(arr[3])* 1000;
let flag = true;

for(i = 1; i <=30; i++){
    foodGrams -= 300;
    if(foodGrams<=0){
        flag = false;
        break;
    }
    if(i%2==0){
        hayGrams -= 0.05*foodGrams;
    }
    if(hayGrams<=0){
        flag = false;
        break;
    }
    if(i%3==0){
        coverGrams -= pigWeightGrams/3;
    }
    if(coverGrams<=0){
        flag = false;
        break;
    }
}

if(flag == false){
    console.log("Merry must go to the pet store!");
    
}else{
    console.log(`Everything is fine! Puppy is happy! Food: ${(foodGrams/1000).toFixed(2)}, Hay: ${(hayGrams/1000).toFixed(2)}, Cover: ${(coverGrams/1000).toFixed(2)}.`);
    
}



//console.log(foodGrams);


}
pig(["1",

    "1.5",
    
    "3",
    
    "1.5"
    
    ]);

    