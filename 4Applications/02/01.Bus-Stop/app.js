async function getInfo() {
    
    const stopId = document.getElementById("stopId").value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
   try {
    const p = await fetch(url);
    const body = await p.json();
     
    document.getElementById("buses").textContent = "";
    document.getElementById("stopName").textContent  = body.name;
    
    let arrayToProvide = Object.entries(body.buses).map(createElement);
    
    document.getElementById("buses").replaceChildren(...arrayToProvide);
    
   } catch (error) {
     document.getElementById("buses").textContent = "";
    document.getElementById("stopName").textContent  = "Error";
   } 
    
    function createElement(array){
       let element = document.createElement("li");
       element.textContent = `Bus ${array[0]} arrives in ${array[1]} minutes`;
       return element;
    }

    
}