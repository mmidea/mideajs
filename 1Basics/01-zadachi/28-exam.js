function exam(input){
let examHour = Number(input[0]);
let examMinutes = Number(input[1]);
let arrivalHour = Number(input[2]);
let arrivalMinutes = Number(input[3]);
let sumMinutesExam = 0;
let sumMinutesArrival = 0;
let minutesEarlier = 0;

sumMinutesExam = examHour * 60 + examMinutes;
sumMinutesArrival = arrivalHour * 60 + arrivalMinutes;
if((sumMinutesArrival < sumMinutesExam)&&((sumMinutesExam-sumMinutesArrival)>30)){
   console.log('Early');
}else if((sumMinutesArrival <= sumMinutesExam)&&((sumMinutesExam-sumMinutesArrival)<=30)){
   console.log('On time');
}else {console.log('Late')}

if(sumMinutesArrival>sumMinutesExam){
let diference = sumMinutesArrival - sumMinutesExam;
if(diference<60){
   console.log(`${diference} minutes after the start`);
} else {
   let hour = Math.floor(diference/60);
   let minutes = diference%60;
   if (minutes < 10){
      console.log(`${hour}:0${minutes} hours after the start`);   
   }   
}
} else if(sumMinutesExam>sumMinutesArrival){
   let diference =sumMinutesExam - sumMinutesArrival;
   if(diference<60){
      console.log(`${diference} minutes before the start`);
   } else {
   let hour = Math.floor(diference/60);
   let minutes = diference%60;
   if (minutes < 10){
      console.log(`${hour}:0${minutes} hours before the start`);   
   }  
   }

}






}
   
   
   
   
//    {
// minutesEarlier = sumMinutesExam - sumMinutesArrival;
//  if (minutesEarlier <= 30){ 
//     console.log("On time");
//     console.log(`${minutesEarlier} minutes before the start`);    
//  } else if (minutesEarlier > 30){
//     console.log("Early");
//     if (minutesEarlier >= 60){
//      let hours = minutesEarlier / 60; 
//      let minutes = minutesEarlier % 60;
     
//         console.log(`${minutesEarlier} minutes before the start`);
//     }
    

//  }
// }


exam(["9", "00", "10", "30"]);