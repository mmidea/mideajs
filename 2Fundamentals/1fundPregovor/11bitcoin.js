function bitcoin(input) {
    let curDayGold = Number(input[0]);
    let i = 0;
    let allDays = input.length;
    let levSum = 0;
    let bitcoinCount = 0;
    let firstBitcoinDay = 0;
    
    for (i; i < allDays; i++) {
        curDayGold = Number(input[i]);
        if ((i + 1) % 3 == 0) {
            curDayGold *= 0.70;
        }

        levSum += curDayGold * 67.51;

        while (levSum >= 11949.16) {
            bitcoinCount++;
            levSum -= 11949.16;
            if (bitcoinCount == 1) {
                firstBitcoinDay = i + 1;
            }

        }

   


    }

    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if (firstBitcoinDay != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);

    }
    console.log(`Left money: ${levSum.toFixed(2)} lv.`);



}
bitcoin([3124.15, 504.212, 2511.124]);