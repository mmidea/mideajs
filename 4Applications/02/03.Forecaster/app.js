const unicodes = {
Sunny: "&#x2600",
"Partly sunny": "&#x26C5",
Overcast: "&#x2601",
Rain: "&#x2614",
Degrees: "&#176"
        }

        const div = document.getElementById("forecast");


function attachEvents() {
    //console.log("TODO...");
    
    const getBtn = document.getElementById("submit");
    getBtn.addEventListener("click", weatherSearch);
    }

async function weatherSearch() {
        const locationInput = document.getElementById("location");
        const locationName = locationInput.value;
        const url =  "http://localhost:3030/jsonstore/forecaster/locations";
       let p = await fetch(url);
       //debugger
       if(p.status != 200){
        throw new Error("Error"); 
       }
        let body = await p.json();
        let result = body.find(obj => obj.name == locationName);
       // if(!result){
            //result.code

            let urlCurrentWeather = `http://localhost:3030/jsonstore/forecaster/today/${result.code}`
            let url3DaysWeather = `http://localhost:3030/jsonstore/forecaster/upcoming/${result.code}`

            
            div.style.display = "block";
            loadCurrentWeather(urlCurrentWeather);
            load3DaysWeather(url3DaysWeather);
        }

    async function loadCurrentWeather(url){

       let p = await fetch(url);
       //debugger
       if(p.status != 200){
        throw new Error("Error"); 
       }
        let body = await p.json();

        
        debugger;

        let condition = body.forecast.condition ;

        let unicodeCondition = unicodes[condition]
        let divCurrent  = document.getElementById("current");
        let newDiv = document.createElement("div");
        newDiv.className = "forecast";
        let newSpan = document.createElement("span");
        newSpan.className = "condition symbol";
        newSpan.innerHTML = unicodeCondition;
        newDiv.appendChild(newSpan);

        let spanMain = document.createElement("span");
        spanMain.className = "condition";
         
        let span1 = document.createElement("span");
        span1.className = "forecast-data";
        span1.textContent = body.name;
        spanMain.appendChild(span1);

        let span2 = document.createElement("span");
        span1.className = "forecast-data";
        span2.innerHTML = `${body.forecast.high}${unicodes.Degrees}/${body.forecast.low}${unicodes.Degrees}`
        spanMain.appendChild(span2);

        let span3 = document.createElement("span");
        span1.className = "forecast-data";
        span3.textContent = body.forecast.condition;
        spanMain.appendChild(span3);

       newDiv.appendChild(spanMain);

        
        divCurrent.appendChild(newDiv);
  
        }

    async function load3DaysWeather(url){
       let p = await fetch(url);
       //debugger
       if(p.status != 200){
        throw new Error("Error"); 
       }
        let body = await p.json();
// TO DO let condition = body.forecast.condition ;
        let  = unicodes[condition]

        const divUpcoming = document.getElementById("upcoming")
        const divForecastInfo = document.createElement("div");
        divForecastInfo.classList.add = "forecast-info";
        divUpcoming.appendChild(divForecastInfo);

        const spanUpcoming = document.createElement("span");
        spanUpcoming.classList.add = "upcoming";
        divForecastInfo.appendChild(spanUpcoming);
        const spanSymbol = document.createElement("span");
        spanSymbol.classList.add = "symbol";
        spanSymbol.innerHTML = unicodeCondition

         

        


        }




attachEvents();