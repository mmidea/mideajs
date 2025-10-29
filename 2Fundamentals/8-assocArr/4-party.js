function party(arr){
let guestList = {};
let i = 0;
let guest = arr[0];

while(guest != "PARTY"){
    guestList[guest] = 1;
    i++;
    guest = arr[i];
    
}

i++;
//console.log(arr[i]);
for(i; i < arr.length; i++){
guest = arr[i];
if(guestList.hasOwnProperty(guest)){
    delete guestList[guest];
}
}

let keys = Object.keys(guestList);
let vips = keys.filter(x => Number(x[0]))

let notVips = keys.filter(x => !(Number(x[0])))




console.log(keys.length);
if(vips.length != 0){


for(let key of vips){
    console.log(key);
    
}
}

if(notVips.length != 0){
for(let key of notVips){
    console.log(key);   
}
}

}
party(['m8rfQBvl', 'fc1oZCE0','UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ' ]);