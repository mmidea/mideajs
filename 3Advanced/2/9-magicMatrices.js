function solve(arr){
    let constSum = 0;
    let isMagic = true;
    let isFirstSum = true;

    for(let red = 0; red < arr.length; red++){
    let sum = 0;
    for(let col = 0; col < arr[red].length; col++){
        //console.log(arr[red][col]);
        sum += arr[red][col];
        
        
    
    }
    if(isFirstSum){
        constSum = sum;
        isFirstSum = false;
    }else{
       if(sum != constSum){
        isMagic = false;
        return false;
    } 
    }
    
    
}
    

isFirstSum = true;
for(let col = 0; col < arr[0].length; col++){
    let sum = 0;
    for(let red = 0; red < arr.length; red++){
        //console.log(arr[red][col]);
        sum += arr[red][col];
        
        
    
    }
    
    if(isFirstSum){
        constSum = sum;
        isFirstSum = false;
    }else{
       if(sum != constSum){
        isMagic = false;
        return false;
    } 
    }
    
    
}



return true;

}
console.log(solve([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));

