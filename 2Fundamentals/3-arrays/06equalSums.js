function solve(arr) {
    let magicNum = 0;
    if (arr.length == 1) {
        console.log("0");
        return;
    } else {

        for (let i = 1; i < arr.length - 1; i++) {
            let leftArr = arr.slice(0, i);
            //console.log(leftArr);
            
            let sumLeft = 0;
            let sumRight = 0;
            if(leftArr.length == 0){
                sumLeft = 0;
            }else{
                for (el of leftArr) {
                    sumLeft += el;
                }
            }
            
            //console.log(i + 1);
            //console.log(arr.length - 1);
            
            
            let rightArr = arr.slice((i + 1), (arr.length));
            //console.log(rightArr);
            

            for (el of rightArr) {
                sumRight += el;
            }

            if (sumLeft == sumRight) {
                magicNum = i;

            }

        }

        if (magicNum == 0) {
            console.log("no");

        } else {
            console.log(magicNum);

        }
        //magicNum == 0 ? "no" : console.log(magicNum);
    }

}
//solve([10, 5, 5, 99, 3, 4, 2, 5, 1,1, 4] );
solve([1, 2]);