function solve(arr){
let inventory = (arr[0]).split(" ");
arr.shift();

for(el of arr){
    let commands = el.split(" ");
    let command = commands[0];
    let item = commands[1];

    if(command == "Buy"){
      if(!inventory.includes(item)){
        inventory.push(item);
      }
    }
    else if(command == "Trash"){
        if(inventory.includes(item)){
            let index = inventory.indexOf(item);
            inventory.splice(index, 1);
          }

    }
    else if(command == "Repair"){
        if(inventory.includes(item)){
            let index = inventory.indexOf(item);
            let itemToMove = inventory.splice(index, 1);
            //console.log(itemToMove);
            
            inventory.push(itemToMove[0]);
          }


    }
    else if(command == "Upgrade"){

      let items = item.split("-");
      if(inventory.includes(items[0])){
        let index = inventory.indexOf(items[0]);
        let itemToInsert = items[0] + ":" + items[1];
        inventory.splice(index+1,0,itemToInsert);
      }

      
      
      
    }
    
}

console.log(inventory.join(" "));
}
solve(['SWORD Shield Spear',
  
  'Buy Bag',
  
  'Trash Shield',
  
  'Repair Spear',
  
  'Upgrade SWORD-Steel']);