function date(year, month, day){
    //pyrvi variant:
//let stringDAte = year + ", " + month + ", " + day;
//console.log(stringDAte);

//let myDate = new Date(stringDAte);
let myDate = new Date(year, month-1, day);
console.log(myDate);

myDate.setDate(myDate.getDate() - 1);
console.log(myDate);
let day2 = myDate.getDate();
console.log(day2);
let month2 = myDate.getMonth() + 1;
console.log(month2);
let year2 = myDate.getFullYear();
console.log(year2);


 




}
date(2016, 9, 30);