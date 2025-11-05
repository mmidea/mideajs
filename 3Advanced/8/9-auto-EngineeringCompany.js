function autoEngineeringCompany(arr){
 let brandsObj = {};
    
for(let line of arr){
   let [brand, model, qty] =  line.split(" | ");
   if(!brandsObj.hasOwnProperty(brand)){
    brandsObj[brand] = {};
   }
   if(!brandsObj[brand].hasOwnProperty(model)){
   brandsObj[brand][model] = 0;
   }

   brandsObj[brand][model] += Number(qty);
     
}

let brandsArr = Object.entries(brandsObj);
brandsArr.forEach(element => {
    let curBrand = element[0];
    let curObj = element[1];
    console.log(curBrand);
    Object.entries(curObj).forEach(el => {
        console.log(`###${el[0]} -> ${el[1]}`);
        
    });
    
});


}

autoEngineeringCompany(['Audi | Q7 | 1000',

'Audi | Q6 | 100',

'BMW | X5 | 1000',

'BMW | X6 | 100',

'Citroen | C4 | 123',

'Volga | GAZ-24 | 1000000',

'Lada | Niva | 1000000',

'Lada | Jigula | 1000000',

'Citroen | C4 | 22',

'Citroen | C5 | 10']);
