function trainers(input){
let juryCount = Number(input[0]);
let i = 1;
let curOperation = input[1];

let finalMarkSum = 0;
let presentationsCount = 0;

while(curOperation !== "Finish"){
let curNamePresentation = curOperation;
let sumMarksPresentations = 0;
let curMark = 0;


for (let m = 1 ; m <= juryCount; m++) {
    curMark =  Number(input[i+m]);
    sumMarksPresentations += curMark;  
}
finalMarkSum += (sumMarksPresentations/juryCount);

presentationsCount++;
console.log(`${curNamePresentation} - ${(sumMarksPresentations/juryCount).toFixed(2)}.`);

i += juryCount;
i++;
curOperation = input[i];

}

let finalAssessment = (finalMarkSum/presentationsCount).toFixed(2);
// finalAssessment = Number(finalAssessment);
console.log(`Student's final assessment is ${finalAssessment}.`);
}




// function trainTheTrainers(input) {
//     let index = 0;
    
//     let judgeCount = Number(input[index]);
//     index++;
    
//     let command = input[index];
//     index++;
    
//     let totalGradesSum = 0;
//     let totalGradesCount = 0;
    
//     while (command !== 'Finish') {
//         let presentationName = command;
//         let gradeSum = 0;
    
//         for (let i = 0; i < judgeCount; i++) {
//             let curGrade = Number(input[index]);
//             index++;
    
//             gradeSum += curGrade;
//         }
    
//         let avgGrade = gradeSum / judgeCount;
//         console.log(`${presentationName} - ${(avgGrade).toFixed(2)}.`);
    
//         totalGradesSum += avgGrade;
//         totalGradesCount++;
    
//         command = input[index];
//         index++;
//     }
    
//     let finalAvgGrade = totalGradesSum / totalGradesCount;
//     console.log(`Student's final assessment is ${finalAvgGrade.toFixed(2)}.`);
    
    
//     }

    trainers(["3",

    "Arrays",
    
    "4.53",
    
    "5.23",
    
    "5.00",
    
    "Lists",
    
    "5.83",
    
    "6.00",
    
    "5.42",
    
    "Finish"]);