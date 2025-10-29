
class Storage{

    constructor(capacity){

    //storage, totalCost, addProduct, getProducts){
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;

    }
addProduct(newProduct){
this.storage.push(newProduct);
this.capacity -= newProduct.quantity;
this.totalCost += newProduct.price * newProduct.quantity;
} 
getProducts(){
    return JSON.stringify(this.storage);
}
    
}