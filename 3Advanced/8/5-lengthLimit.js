class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
        this.constLength = this.innerString.length;
    }

    increase(length){
     this.innerLength += length;
    } 
    decrease(length){
        this.innerLength = this.innerLength - length >= 0 ? this.innerLength - length : 0;

    }
    toString(){
        let output = this.innerString;
        if(this.innerLength < this.constLength){
            output =  output.slice(0, this.innerLength );
            output = output + "..."
        }
       
           
        
        return output
    }


}

let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test 