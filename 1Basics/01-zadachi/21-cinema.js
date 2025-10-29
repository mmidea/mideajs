function cinema(input){

    let filmType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let ticketPrice = 0;

    switch(filmType){

        case 'Premiere': ticketPrice = 12; break;
        case 'Normal': ticketPrice = 7.5; break;
        case 'Discount': ticketPrice = 5; break;
    }
    let profit = 0;
    profit = ((rows * cols * ticketPrice).toFixed(2));

    
    console.log(`${profit} leva`);
    
}
cinema(["Discount", "12", "30"]);