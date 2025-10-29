function palindrom(arr){

for(let el of arr){
 let elAsString = el.toString();
 let flag= true;
 
 function isPalindrom(a){
    for(i = 0; i < (a.length)/2; i++){
    
        if(a[i] != a[a.length - 1 - i]){
           flag = false;
           break;
        }
        }
       
        return flag ? true : false;
       
 }

 console.log(isPalindrom(elAsString));
 
}

//for(i=0; i< arr.length; i++){}



}
palindrom([32,2,232,1010]);