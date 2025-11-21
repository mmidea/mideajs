function getInfo() {
    //console.log("TODO...");
    const stopId = document.getElementById("stopId").value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
   try {
    myFunc(url);
   } catch (error) {
    document.getElementById("stopName").textContent  = "Error";
   } 
    
    async function myFunc(url){

    const p = await fetch(url);
    const body = await p.json();
    console.log(body);
    return body;

    }
    document.getElementById("stopName").textContent  = body.name;
    
    let arrayToProvide = Object.entries(body.buses).map(createElement);
    console.log(arrayToProvide);
    document.getElementById("buses").replaceChildren(...arrayToProvide);
    
    

    function createElement(array){
       let element = document.createElement("li");
       element.textContent = `Bus ${array[0]} arrives in ${array[1]} minutes`;
       return element;
    }

    
}