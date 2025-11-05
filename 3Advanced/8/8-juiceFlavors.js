function juiceFlavors(arr){
    let flavorsObj = {};
    let bottlesArr = {};
for(let line of arr){
   let [flavor, qty] =  line.split(" => ");
   if(!flavorsObj.hasOwnProperty(flavor)){
    flavorsObj[flavor] = 0;
   }
   flavorsObj[flavor] += Number(qty);
   while(flavorsObj[flavor] >= 1000){
    flavorsObj[flavor] -= 1000;
    if(!bottlesArr.hasOwnProperty(flavor)){
        bottlesArr[flavor] = 0;
    }
    bottlesArr[flavor]++;
   }
   
   
}
Object.entries(bottlesArr).forEach(element => {
    console.log(`${element[0]} => ${element[1]}`);   
});


}
juiceFlavors(['Orange => 2000',

'Peach => 1432',

'Banana => 450',

'Peach => 600',

'Strawberry => 549'] );
console.log("-----------------------");

juiceFlavors(['Kiwi => 234',

'Pear => 2345',

'Watermelon => 3456',

'Kiwi => 4567',

'Pear => 5678',

'Watermelon => 6789'] );