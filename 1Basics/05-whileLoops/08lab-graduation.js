function graduetion(input) {
    let name = input[0];
    let grade = 1;
    let i = 1;
    let ocenka = Number(input[i]);
    let sumOcenki = 0;
    let izkliuchvane = 0;


    while (grade <= 12) {
        sumOcenki += ocenka;
        if (ocenka < 4) { izkliuchvane++ }
        if (izkliuchvane === 2) { break; }
        i++;
        ocenka = Number(input[i]);
        grade++
    }

if(izkliuchvane === 2){
    console.log(`${name} has been excluded at ${grade-1} grade`); 
} else {
    console.log(`${name} graduated. Average grade: ${(sumOcenki/12).toFixed(2)}`);
}
}
graduetion(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"]);