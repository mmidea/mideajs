function solve(arr){
arr = arr.map(x => JSON.parse(x));
//console.log(arr[1]);
let dictionary ={};
for(let el of arr){
let [word] = Object.keys(el);
let [discribtion] = Object.values(el);
if(word in dictionary){
   dictionary[word] = discribtion;
}else{
    dictionary[word] = discribtion;
}

}

let keysArr = Object.keys(dictionary).sort((a, b) =>  a.localeCompare(b));

keysArr.forEach(  key => console.log(`Term: ${key} => Definition: ${dictionary[key]}`)  );

//console.log(keysArr);


}
solve(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}','{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}','{"Boiler":"A fuel-burning apparatus or container for heating water."}','{"Tape":"A narrow strip of material, typically used to hold or fasten something."}','{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}']);