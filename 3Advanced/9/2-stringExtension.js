(function(){
String.prototype.ensureStart = function (str){
   
    if(this.startsWith(str) ){
        
        return this.toString();
    }else{
        return str + this;
    }

}

String.prototype.ensureEnd = function (str){
if(this.slice(this.length - str.length) == str){
return this.toString();
}else{
return this + str;
}
}

String.prototype.isEmpty = function (){
    return this.length == 0 ? true : false
}

String.prototype.truncate = function (n){
    let output = "";
    if(this.length <= n){
        return this.toString();;
    }
    if(n < 4){
    return output.padEnd(n,".")
    }

    let words = this.split(" ");
    if(words.length > 1){
        let prevOutput ="";
        let i = 0;
        let firstTime = true;
     while(output.length <= n - 3 ){
       
        prevOutput = output;
        
         if(firstTime){
            firstTime = false;
        }else{
         output += " ";   
        }
     output += words[i];
     i++;
     }
     return prevOutput + "...";

    }else{
        //edna duma e nqma speisove
        return this.slice(0,n-3) + "...";
    }
 
}
//static method:
String.format = function(string, ...params){
    //debugger
    
    for(let i = 0; i < params.length; i++){
        
        let oldStr = `{${i}}`;
        let newStr = params[i];
       string = string.replace(oldStr, newStr);
    }
    return string;

}


})()




let str = 'my string';
str = str.ensureStart('my');
console.log(str);//my string
str = str.ensureStart('hello ');
console.log(str);//hello my string
str = str.truncate(16);
console.log(str);//hello my string // 15
str = str.truncate(14);
console.log(str);//hello my...
str = str.truncate(8);
console.log(str);//hello...
str = str.truncate(4);
console.log(str);//h...
str = str.truncate(2);
console.log(str);//..

str = String.format('The {0} {1} fox','quick', 'brown');
console.log(str);

str = String.format('jumps {0} {1}','dog'); 
console.log(str);
console.log("".isEmpty());

