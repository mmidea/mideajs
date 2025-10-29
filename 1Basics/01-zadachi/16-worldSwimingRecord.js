// Функцията получава: рекордът в секунди, който Иван трябва да подобри, разстоянието в метри, което трябва да 
// преплува и времето в секунди, за което плува разстояние от 1 м. Да се напише функция, която изчислява дали се 
// е справил със задачата, като се има предвид, че: съпротивлението на водата го забавя на всеки 15 м. с 12.5 
// секунди. Когато се изчислява колко пъти Иванчо ще се забави, в резултат на съпротивлението на водата, резултатът 
// трябва да се закръгли надолу до най-близкото цяло число.

// Да се изчисли времето в секунди, за което Иванчо ще преплува разстоянието и разликата спрямо Световния рекорд. 
// 1. Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
// 2. Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
// 3. Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]
// " Yes, he su"No, he failed! He wcceeded! The new world record is {времето на Иван} seconds."
// o as {недостигащите секунди} seconds slower." 

function worldSwimingRecord(input){
    let recordSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);
    
    let deleyCount = Math.floor(distanceMeters / 15);
    let secondsIvan = distanceMeters * secondsPerMeter + deleyCount*12.5;
    
    if (secondsIvan >= recordSeconds) {
        let nedostig = secondsIvan - recordSeconds;
    console.log(`No, he failed! He was ${nedostig.toFixed(2)} seconds slower.`);
    }
    else {
        console.log(`Yes, he succeeded! The new world record is ${secondsIvan.toFixed(2)} seconds`);
        console.log(`No, he failed! He was 20786.00 seconds slower.`);
    }
    
    
    }
    worldSwimingRecord(["55555.67","3017","5.03"]);