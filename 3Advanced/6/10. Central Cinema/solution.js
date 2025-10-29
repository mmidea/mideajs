function solve() {
    const containerRef = document.getElementById("container");
    const [nameRef, hallRef, ticketPriceRef, btnOnScreenRef] = containerRef.children;
    const [onScreenListRef, arhiveListRef] = document.querySelectorAll("ul");
    const clearBtnRef = document.getElementById("archive").querySelector("button");
    clearBtnRef.addEventListener("click", clearFunc);
    btnOnScreenRef.addEventListener("click", allFilledCheck);

    function allFilledCheck(e) {
        e.preventDefault();
        if ((nameRef.value && hallRef.value && ticketPriceRef.value) && (typeof (Number(ticketPriceRef.value)) == "number") && (Number(ticketPriceRef.value))) {
            addOnScreen();
        }

    }

    function addOnScreen() {

        onScreenListRef.innerHTML += `<li>`
            + `<span>${nameRef.value}</span>`
            + `<strong>Hall: ${hallRef.value}</strong>`
            + `<div>`
            + `<strong>${(ticketPriceRef.value).toString(2)}</strong>`
            + `<input placeholder="Tickets Sold">` +
            `<button>Archive</button>`
            + `</div>`
            + `</li>`

        let btnsArhiveRef = document.querySelectorAll("ul")[0].querySelectorAll("button");

        btnsArhiveRef.forEach(btn => btn.addEventListener("click", checkFunc));

        nameRef.value = "";
        hallRef.value = "";
        ticketPriceRef.value = "";

    }

    function checkFunc(e){
        
        let ticketsCount = e.target.parentElement.children[1].value;
        if((typeof (Number(ticketsCount)) == "number") && (ticketsCount) &&(!isNaN(Number(ticketsCount)))){
        let curRowRef = e.target.parentElement.parentElement;
        archiveFunc(curRowRef, ticketsCount);
        //arhiveListRef.appendChild(curRowRef); 
        }
        
    }

    function archiveFunc(curRowRef, ticketsCount){
        
        let name = curRowRef.querySelector("span").textContent;
        let total =Number(curRowRef.querySelectorAll("strong")[1].textContent) * ticketsCount;
        
     arhiveListRef.innerHTML += `<li>`
     +`<span>${name}</span>`
     +`<strong>Total amount: ${total.toFixed(2)}</strong>`
     +`<button>Delete</button>`
     +`</li>`

     curRowRef.remove();

     let btnsRef = document.getElementById("archive").querySelectorAll("button");
     btnsRef.forEach(btn => { if(btn.textContent == "Delete"){btn.addEventListener("click", deleteFunc)}  })
    }

    function deleteFunc(e){
        debugger
        e.target.parentElement.remove();
    }

    function clearFunc(){
        let allListsRefs = document.getElementById("archive").querySelectorAll("li");
        allListsRefs.forEach(list => list.remove())
    }
}
