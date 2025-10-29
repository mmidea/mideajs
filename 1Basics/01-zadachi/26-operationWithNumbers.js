function mathOperations(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operation = input[2];
    let result = 0;
    let numberKind = '';

    if (operation === '+') {
        result = n1 + n2;

    } else if (operation === '-') {
        result = n1 - n2;

    } else if (operation === '*') {
        result = n1 * n2;

    } else if (operation === '/') {
        result = n1 / n2;

    } else if (operation === '%') {
        result = n1 % n2;

    }

    else if ((operation === '+') || (operation === '-') || (operation === '*')) {
        if (result % 2 == 0) { numberKind = 'even' }
        else { numberKind = 'odd'; }
        console.log(`${n1} ${operation} ${n2} = ${result} – ${numberKind}`)
    }


    else if (operation === '/') {
        if (n2 != 0) { console.log(`${n1} ${operation} ${n2} = ${result.toFixed(2)} `) }
        else { console.log(`Cannot divide ${n1} by zero`) }

    }




    else if (operation === '%') {
        if (n2 != 0) { console.log(`${n1} ${operation} ${n2} = ${result} `) }
        else { console.log(`Cannot divide ${n1} by zero`) }
    }






}
mathOperations(["7",

    "3",

    "*"]);

