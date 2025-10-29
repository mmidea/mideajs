function towns(arr){

    for(let townInfo of arr){
    let tockens = townInfo.split(" | ");
    let townObject = {
        town: tockens[0],
        latitude:(Number(tockens[1])).toFixed(2),
        longitude:Number((tockens[2])).toFixed(2)
        
    }
    
    console.log(townObject);
    
    


    }

}
towns(['Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625']);