function equalSums(first, last) {

    // let first = Number(input[0]);
    // let last = Number(input[1]);
    first = Number(first);
    last = Number(last);
    let buf = "";


    for (let curNum = first; curNum <= last; curNum++) {

        let count = 0;
        
        let c = curNum;
        while (c >= 1) {
            c /= 10;
            count++;
        }
        
        let chetniSum = 0;
        let nechetniSum = 0;
        
        curNum = curNum.toString();

        for (let m = 1; m <= count; m++) {
            if (m % 2 == 0) { chetniSum += Number(curNum[m - 1]) }
            else { nechetniSum += Number(curNum[m - 1]) }
        }

        if (chetniSum == nechetniSum){
            buf += `${curNum} `;
            
        }


    }
console.log(buf);


}
equalSums(100000,

    100050);