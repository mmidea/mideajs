function serials(nameSerial, seasonsCount, episodesCount, episodeDuration){

// let nameSerial = input[0];
// let seasonsCount = Number(input[1]);
// let episodesCount = Number(input[2]);
// let episodeDuration = Number(input[3]);
 let totalTime = 0;
totalTime = seasonsCount*episodesCount*episodeDuration*1.2 + 10*seasonsCount; 
console.log(`Total time needed to watch the ${nameSerial} series is ${Math.floor(totalTime)} minutes.`);


}
serials(["Lucifer",

    "3",
    
    "18",
    
    "55"]); 