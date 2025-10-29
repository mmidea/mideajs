function cinema(input){

let i = 0;
let curLine = input[i];
let studentTickets = 0;
let standartTickets = 0;
let kidsTickets = 0;

while (curLine !== "Finish") {
    let curFilmName = curLine;
    i++;
    let seatsCount = Number(input[i]);
    let seatsPurchased = 0;
    let curFilmTicketsCounter = 0;
    

    for (let m = 1; m <= seatsCount ; m++) {
        curFilmTicketsCounter++;
        if(input[i+m] === "End"){
            break;}
        seatsPurchased++;

        switch (input[i + m]) {
            case 'student':studentTickets++;
                
                break;
        
            case 'standard':standartTickets++;

                break;
            
            case 'kid':kidsTickets++;
                break;
        }
          
    }
    
    let percentFull = Number(seatsPurchased * 100 /seatsCount);
    console.log(`${curFilmName} - ${(percentFull).toFixed(2)}% full.`);
    
    i++;
    i += curFilmTicketsCounter; 
    curLine = input[i];

}

let totalPurchasedTickets = studentTickets + standartTickets + kidsTickets;
console.log(`Total tickets: ${totalPurchasedTickets}`);

let percentStudents = (studentTickets * 100/ totalPurchasedTickets).toFixed(2);
let percentStandart = (standartTickets * 100/ totalPurchasedTickets).toFixed(2);
let percentKid = (kidsTickets * 100/ totalPurchasedTickets).toFixed(2);
console.log(`${percentStudents}% student tickets.`);
console.log(`${percentStandart}% standard tickets.`);
console.log(`${percentKid}% kids tickets.`);



}
cinema(["Taxi","10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);