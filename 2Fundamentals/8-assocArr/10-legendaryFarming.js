function solve(line){
let allItems = line.split(" ");

let collection ={};
let impCollection ={};
impCollection.fragments =0;
impCollection.motes =0;
impCollection.shards = 0;

for(let i = 0; i < allItems.length; i++){
let quantity =Number(allItems[i]);
i++;
let item = allItems[i].toLowerCase();

if(!collection.hasOwnProperty(item)){
    collection[item]=quantity;
}else{
    collection[item] += quantity;
}


if(collection.shards >= 250){
console.log("Shadowmourne obtained!");
collection.shards -= 250;
break;

}
if(collection.fragments >= 250){
    console.log("Valanyr obtained!");
    collection.fragments -= 250;
break;
    
}
if(collection.motes >= 250){
    console.log("Dragonwrath obtained!");
    collection.motes -= 250;
break;
}

}

if(collection.hasOwnProperty("fragments")){
impCollection.fragments += collection.fragments;
delete collection.fragments;
}
if(collection.hasOwnProperty("shards")){
    impCollection.shards += collection.shards;
    delete collection.shards;
}
if(collection.hasOwnProperty("motes")){
    impCollection.motes += collection.motes;
    delete collection.motes;
}

let kvps = Object.entries(impCollection).sort( (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
//|| (a[0]).localCompare(b[0])
for(let kvp of kvps){
console.log(`${kvp[0]}: ${kvp[1]}`);

}
kvps = Object.entries(collection).sort( (a, b) => a[0].localeCompare(b[0])) ;
for(let kvp of kvps){
    console.log(`${kvp[0]}: ${kvp[1]}`);
    
    }

}
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');