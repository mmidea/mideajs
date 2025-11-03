class List {
    constructor() {
      this.arr =[];
      this.size = this.arr.length;  
    }

    add(el){
    if(typeof(el) == "number" && !(isNaN(el))){
        this.arr.push(el);
        this.arr.sort((a, b) => a - b);
    
    }else{
        throw new Error("Type must be number!");
        
    }
    }
}



let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1)); 
list.remove(1); 
console.log(list.get(1));