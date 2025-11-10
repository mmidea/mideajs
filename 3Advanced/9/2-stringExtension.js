(function(){
String.prototype.ensureStart = function (str){
if(this.slice(0, str.length) == str){
return this
}else{
return str + this;
}
}

String.prototype.ensureEnd = function (str){
if(this.slice(this.length - str.length) == str){
return this
}else{
return this + str;
}
}

String.prototype.isEmpty = function (){
    return this.length == 0 ? true : false
}

String.prototype.truncate = function (n){
    let output = "";
    if(this.length < n){
        return this;
    }
    if(n < 3){
    return output.padEnd(n,".")
  }

    let words = this.split(" ");
    if(words.length > 1){
        let prevOutput;
     while(output.length <= n - 3 ){
        prevOutput = output;
     output += words;
     }
     return prevOutput + "...";

    }else{
        //edna duma e nqma speisove
        return this.slice(0,n-3) + "...";
    }


   
}


})();




let str = 'my string';
console.log(str);

str = str.ensureStart('my');
console.log(str);

str = str.ensureStart('hello ');
console.log(str);

str = str.truncate(16);
console.log(str);


str = str.truncate(14);
console.log(str);

str = str.truncate(8);
console.log(str);

str = str.truncate(4);
console.log(str);

str = str.truncate(2);
console.log(str);

//str = String.format('The {0} {1} fox','quick', 'brown');

//str = String.format('jumps {0} {1}','dog'); 