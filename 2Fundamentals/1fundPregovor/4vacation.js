function vacation(number, type, weekday){

let price = 0; 
let totalSum = 0;

switch (type) {
    case "Students":
        if(weekday == "Friday"){price = 8.45;}
        else if(weekday == "Saturday"){price = 9.80;}
        else {price = 10.46;}
        totalSum = price * number;
        if ( number >= 30){totalSum *= 0.85;}
        break;
    case "Business":
        if(weekday == "Friday"){price = 10.90;}
        else if(weekday == "Saturday"){price = 15.60;}
        else {price = 16;}

        if(number >=100){number -= 10}
        totalSum = price * number;
    break;

    case "Regular":
        if(weekday == "Friday"){price = 15;}
        else if(weekday == "Saturday"){price = 20;}
        else {price = 22.50;}
        totalSum = price * number;
        if(number >= 10 && number <= 20){
        totalSum *= 0.95;
        }
    break;

}


console.log(`Total price: ${totalSum.toFixed(2)}`);



}
vacation(30, "Students",  "Sunday");