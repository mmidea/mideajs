function prepareForExam(input){
let numberOfPoors = Number(input[0]);
let poorsCounter = 0;
let i = 1;
let b = 2;
let curZadacha = input[i];
let curOcenka = Number(input[b]);
let tooMuchPoors = false;
let sumOcenki = 0;
let ocenkiCounter = 0;


while (curZadacha !== "Enough") {
  if(curOcenka <= 4){
poorsCounter++ 
  }
  if (poorsCounter == numberOfPoors){
    tooMuchPoors = true;
    break;
  }
  sumOcenki += curOcenka;
  ocenkiCounter++;

  b += 2;
  i += 2;
   curZadacha = input[i];
   curOcenka =Number(input[b]);
}

if(tooMuchPoors){
    console.log(`You need a break, ${poorsCounter} poor grades.`);
} else {
    console.log(`Average score: ${(sumOcenki/ocenkiCounter).toFixed(2)}`);
    console.log(`Number of problems: ${ocenkiCounter}`);
    console.log(`Last problem: ${input[i-2]}`);
     
}


}
prepareForExam(["3",

    "Money",
    
    "6",
    
    "Story",
    
    "4",
    
    "Spring Time",
    
    "5",
    
    "Bus",
    
    "6",
    
    "Enough"]);