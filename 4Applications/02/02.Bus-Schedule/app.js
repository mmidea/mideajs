function solve() {
    let stopName = "Depot";
    let stopId = "depot";
    const messageRef = document.getElementsByClassName("info")[0];
    const departBtnRef = document.getElementById("depart");
    const arriveBtnRef = document.getElementById("arrive");
        arriveBtnRef.disabled = true;
    


    async function depart() {
        

        let url = `http://localhost:3030/jsonstore/bus/schedule/${stopId}`
try {
       let p = await fetch(url);
       //debugger
       if(p.status != 200){
        throw new Error("Error");
        
       }
        let body = await p.json();

       
        stopId = body.next;
        stopName = body.name;
    
} catch (error) {
    messageRef.textContent = "Error";
    departBtnRef.disabled = true;
    arriveBtnRef.disabled = true;  
    return;
      
}
        

        

        messageRef.textContent = `Next stop ${stopName}`;
        departBtnRef.disabled = true;
        arriveBtnRef.disabled = false;
    }

    function arrive() {





        messageRef.textContent = `Arriving at ${stopName}`;
        departBtnRef.disabled = false;
        arriveBtnRef.disabled = true;
        
    }

    return {
        depart,
        arrive
    };
}

let result = solve();