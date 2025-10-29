function primeNumbers(input) {

    let command = input[0];
    let i = 0;
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (command !== "stop") {
        let curNum = Number(command);
        if (curNum < 0){
            console.log(`Number is negative.`);
            i++;
        command = input[i];
            continue;
        }
        let isPrime = true;

        for (let divider = 2; divider < curNum; divider++) {
            if (curNum == divider) continue;
            if (curNum % divider == 0) {
                isPrime = false;
                nonPrimeSum += curNum;
                break;
            }
        }

        if (isPrime == true) { primeSum += curNum; }

        i++;
        command = input[i];

    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}
primeNumbers(["30",

    "83",
    
    "33",
    
    "-1",
    
    "20",
    
    "stop"]);