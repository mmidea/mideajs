//vремето за обяд ще бъде 1/8 от времето за почивка, а времето за отдих ще бъде 1/4 от времето за почивка
// 1. Име на сериал – текст

// 2. Продължителност на епизод – цяло число в диапазона [10… 90]

// 3. Продължителност на почивката – цяло число в диапазона [10… 120
function lunchTime(input){

    let serialName = input[0];
    let episodeMinutes = Number(input[1]);
    let lunchMinutesAll = Number(input[2]);
   
    let lunchMinutes = lunchMinutesAll/8;
    let rehearselMinutes = lunchMinutesAll/4;
    let minutesLeft = lunchMinutes + rehearselMinutes + episodeMinutes
    if (lunchMinutesAll >= minutesLeft){
        console.log(`You have enough time to watch ${serialName} and left with ${(lunchMinutesAll - minutesLeft).toFixed(0)} minutes free time.`);
        
    }
    else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${(minutesLeft - lunchMinutesAll).toFixed(0)} more minutes.` );
        
    }
}
lunchTime(["Teen Wolf",

    "48",
    
    "60"]);