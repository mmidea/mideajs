function attachEventsListeners() {
  const buttonsREf = document.querySelectorAll("input[type='button']");
  for(let button of buttonsREf){
    button.addEventListener("click", myFunc);
    
  }

  function myFunc(event){
    //debugger
    let num = Number(event.currentTarget.parentElement.querySelector("input").value); 
    //console.log(num);
    let typeConv = event.currentTarget.id;
    let numInSec;
    switch (typeConv) {
        case "daysBtn":
            numInSec = num * 24 * 60 * 60;
            break;
    
         case "hoursBtn":
            numInSec = num * 60 * 60;
            break;
        case "minutesBtn":
            numInSec = num * 60;
            
            break;
        case "secondsBtn":
            numInSec = num;
            break;
    }
    
    document.getElementById("seconds").value  = numInSec;
    document.getElementById("minutes").value = numInSec/60;
    document.getElementById("hours").value = (numInSec/60)/60;
    document.getElementById("days").value = ((numInSec/60)/60)/24;

    console.log(numInSec);
    
    
  }

}