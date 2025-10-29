function lockedProfile() {
   const buttonsShowMoreRef = document.querySelectorAll("main button");
for(let button of buttonsShowMoreRef){
    button.addEventListener("click", myFunc);
}

function myFunc(event){
    //debugger;
   if( event.currentTarget.parentElement.children[4].checked ){
    //console.log("true");
    event.currentTarget.parentElement.children[9].style.display = "block"
    event.currentTarget.textContent = "Hide it"; 
   }else{
    //locked
    event.currentTarget.parentElement.children[9].style.display = "none"
    event.currentTarget.textContent = "Show more"; 
   }



}


}