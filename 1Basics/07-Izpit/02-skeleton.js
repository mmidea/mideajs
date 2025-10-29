function skeleton(controlMinutes, controlSeconds, roadMeters, secondsPer100meters ){

    let sumControlSeconds = controlMinutes*60 + controlSeconds;

   let marinSeconds = roadMeters / 100 * secondsPer100meters;
   let minusSecondPer120Meters = roadMeters / 120 * 2.5;
   marinSeconds -= minusSecondPer120Meters;

   if(marinSeconds<= sumControlSeconds ){
    console.log("Marin Bangiev won an Olympic quota!");
    console.log(`His time is ${(marinSeconds).toFixed(3)}.`);
    
    
   } else{
    console.log(`No, Marin failed! He was ${(marinSeconds - sumControlSeconds).toFixed(3)} second slower.`);
    
   }
    
}
skeleton(1,

    20,
    
    1546,
    
    12);