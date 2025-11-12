function extensibleObject() {
let myObj = {
extend: function(template){
    debugger
 myObj = Object.setPrototypeOf(myObj, template)
 
return Object.assign(myObj, template);
}
}
return myObj;
}


const myObj = extensibleObject();
// myObj: { __proto__: {} extend: function () {…} }

const template = {

extensionMethod: function () {
    console.log("Hello");
    
},

extensionProperty: 'someString'

}

myObj.extend(template); 
console.log(myObj);
console.log(Object.getPrototypeOf(myObj));

let otherObj = {};
console.log(Object.getPrototypeOf(otherObj));


