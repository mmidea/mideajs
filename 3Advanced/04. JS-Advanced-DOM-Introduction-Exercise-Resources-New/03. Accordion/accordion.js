function toggle() {
    let textOfButtonRef = document.getElementsByClassName("button")[0];
    let textToShowHideRef = document.getElementById("extra");
    if(textOfButtonRef.textContent == "MORE"){
textOfButtonRef.textContent = "LESS";
document.getElementById("extra").style.display = "block";

    }else{
        textOfButtonRef.textContent = "MORE";
document.getElementById("extra").style.display = "none";

    }


    //textOfButtonRef.textContent = textOfButtonRef.textContent == "MORE" ? "LESS": "MORE";

}