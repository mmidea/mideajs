function createSortedList(){
    
let newObject ={
    myList: [],
    add(numToAdd){
        this.myList.push(Number(numToAdd));
        this.myList.sort((a, b) => a - b);
        this.size = this.myList.length;
    }, 

    get(index){

    if(index>=0 && index< this.myList.length){
        return this.myList[index]
    }
    },
    remove(index){
        if(this.myList[index]){
            this.myList.splice(index,1);
            this.size = this.myList.length;
        }
         
    },
    size: 0

}

return newObject;


}

let list = createSortedList();

list.add(5);

list.add(6);

list.add(7); 

//list.add(4);
//list.add(10);
console.log(list.myList);

console.log(list.get(1)); 
list.remove(1); 
console.log(list.get(1));
console.log(list.myList);
console.log("----");

console.log(list.size);

