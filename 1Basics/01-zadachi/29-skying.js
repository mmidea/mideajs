function bansko(input) {
    let days = Number(input[0]);
    let room = input[1];
    let review = input[2];
    let sum = 0;
    let nights = days - 1;

    switch (room) {
        case 'room for one person': 
        sum = nights * 18;
            break;

        case 'apartment':
            sum = nights * 25; 
            if (nights < 10) { 
                sum = sum * 0.7;
              } else if (nights <= 15) {
                  sum =  sum * 0.65; 
              } else  {
                sum =  sum * 0.50;  
              }
            break;

        case 'president apartment':
            sum = nights * 35;  
            if (nights < 10) { 
                sum = sum * 0.9;
              } else if (nights <= 15) {
                  sum =  sum * 0.85; 
              } else  {
                sum =  sum * 0.80;  
              }
            break;
    }


    if (review === 'positive'){
        sum *= 1.25;
    } else {
        sum *= 0.90;
    }

    console.log(sum.toFixed(2));
}
bansko(["2", "apartment", "positive"]) ;