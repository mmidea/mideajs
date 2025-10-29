function solve() {
    
    const addBtnRef = document.getElementById("add");
    addBtnRef.addEventListener("click", validationFunc);



    function validationFunc(e) {
        e.preventDefault()
        const taskText = document.getElementById("task").value;
        const descrText = document.getElementById("description").value;
        const dateText = document.getElementById("date").value;
        if (taskText && descrText && dateText) {
        }
        addFunc(taskText, descrText, dateText);

    }

    function addFunc(taskText, descrText, dateText) {
    

        let divRef = document.querySelectorAll("section")[1].children[1];
        let newArticle = document.createElement("article");
        divRef.appendChild(newArticle);
        let newH3 = document.createElement("h3");
        newH3.textContent = taskText;
        newArticle.appendChild(newH3);

        let newP1 = document.createElement("p");
        let newP2 = document.createElement("p");

        newP1.textContent = "Description: " + descrText;
        newP2.textContent = "Due Date: " + dateText;

        newArticle.appendChild(newP1);
        newArticle.appendChild(newP2);

        let divWithBtns = document.createElement("div");
        divWithBtns.className = "flex";
        let btn1 = document.createElement("button");
        let btn2 = document.createElement("button");

        btn1.textContent = "Start";
        btn2.textContent = "Delete";

        btn1.addEventListener("click", movingToProgressFunc);
        //btn2.addEventListener("click", deleteFunc);

        btn1.className = "green";
        btn2.className = "red";

        divWithBtns.appendChild(btn1);
        divWithBtns.appendChild(btn2);

        newArticle.appendChild(divWithBtns);

    }

function movingToProgressFunc(ev){
let ref = ev.target;
debugger
}




}