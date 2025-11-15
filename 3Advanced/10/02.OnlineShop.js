
class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales =[];
    }

    loadingStore(product, quantity, spaceRequired){
        //spacereq * ?
        if(this.warehouseSpace < spaceRequired ){
     throw new Error("Not enough space in the warehouse.");
    }
    let newProduct ={
        "name": product,
        "quantity": quantity

    }
    
    this.products.push(newProduct)
    //dobavqne na kolichestvo ot syshtiq produkt? povtarqt li se

    this.warehouseSpace -= spaceRequired
    return `The ${product} has been successfully delivered in the warehouse.`
}

quantityCheck(product, minimalQuantity){
    let productFounded = false
    let curProduct;

    this.products.forEach(pr => {
        //console.log(Object.keys(pr)[0]); 
        if(pr.name == product){productFounded = true;curProduct = pr }})
    if(!productFounded){
        throw new Error(`There is no ${product} in the warehouse.`);  
    }
    if(minimalQuantity <= 0){
     throw new Error("The quantity cannot be zero or negative.");
    }
    if(minimalQuantity <= curProduct.quantity){
        return `You have enough from product ${product}.`
    }else{
        let difference =  minimalQuantity - curProduct.quantity;
        curProduct.quantity = minimalQuantity;
        return `You added ${difference} more from the ${product} products.`
    }
 

}

sellProduct(product){
    //
    let productFounded = false;
    let curProduct;

    this.products.forEach(pr => {
        //console.log(Object.keys(pr)[0]); 
        if(pr.name == product){productFounded = true;curProduct = pr }})
    if(!productFounded){
        debugger
        throw new Error(`There is no ${product} in the warehouse`);  
    }

    curProduct.quantity --;

    //povtarqt li se sales products?
    //if(this.sales){}
    let newProduct ={
        "name": product,
        "quantity": 1
    }
    this.sales.push(newProduct);

    return `The ${product} has been successfully sold.`

} 

revision(){
    if(this.sales.length == 0){
        return `There are no sales today!`;
    }
    let output = `You sold ${this.sales.length} products today!\n`
    output += `Products in the warehouse:\n`
    this.products.forEach(pr => {
        output += `${pr.name}-${pr.quantity} more left\n`
    })
    return output.trim();
}

}


//const myOnlineShop = new OnlineShop(500)

//console.log(myOnlineShop.loadingStore('headphones', 10, 200));

//console.log(myOnlineShop.loadingStore('laptop', 5, 200));

//console.log(myOnlineShop.loadingStore('TV', 40, 500))
/*
const myOnlineShop = new OnlineShop(500)

console.log(myOnlineShop.loadingStore('headphones', 10, 200))
console.log(myOnlineShop.loadingStore('laptop', 5, 200)); 
console.log(myOnlineShop.quantityCheck('headphones', 10)); 
console.log(myOnlineShop.quantityCheck('laptop', 10));
console.log(myOnlineShop.quantityCheck('TV', 40,));


const myOnlineShop = new OnlineShop(500)

console.log(myOnlineShop.loadingStore('headphones', 10, 200));

console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));

console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));

console.log(myOnlineShop.sellProduct('laptop'));

console.log(myOnlineShop.sellProduct('keyboard'));
*/

const myOnlineShop = new OnlineShop(500)

console.log(myOnlineShop.loadingStore('headphones', 10, 200));

console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));

console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));

console.log(myOnlineShop.sellProduct('laptop'));

console.log(myOnlineShop.revision());