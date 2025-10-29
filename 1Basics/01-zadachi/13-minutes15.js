function minutesPlus (input){

    let hourNow = Number(input[0]);
    let minutesNow = Number(input[1]);
if (minutesNow+15 < 60) {
    console.log(`${hourNow}:${minutesNow + 15}`);
}
else { if(hourNow != 23){
    hourNow = hourNow + 1;
    minutesNow = (minutesNow + 15) - 60;
    if (minutesNow < 10){
        console.log(`${hourNow}:0${minutesNow}`)
    } else {
        console.log(`${hourNow}:${minutesNow}`)
    }
}
else
{
    hourNow = 0;
    minutesNow = (minutesNow + 15) - 60;
    if (minutesNow < 10){
        console.log(`${hourNow}:0${minutesNow}`)
    } else {
        console.log(`${hourNow}:${minutesNow}`)
    }
}
}

}
minutesPlus(["12", "49"]);