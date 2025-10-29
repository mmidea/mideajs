function party(arr){
let curGuestList = [];

for( let text of arr){
    let command = text.split(" ");
    //console.log(command);
    let name = command[0];
    if(command.length <= 3){
        if(curGuestList.includes(name)){
        console.log(`${name} is already in the list!`);
        
        }else{
            curGuestList.push(name);
        }
        
    }else{
        if(curGuestList.includes(name)){
           let index = curGuestList.indexOf(name);
           curGuestList.splice(index,1);
            
            }else{
                console.log(`${name} is not in the list!`);
            }


    }
    
}
console.log(curGuestList.join("\n"));


}
party(['Tom is going!',

    'Annie is going!',
    
    'Tom is going!',
    
    'Garry is going!',
    
    'Jerry is going!']);