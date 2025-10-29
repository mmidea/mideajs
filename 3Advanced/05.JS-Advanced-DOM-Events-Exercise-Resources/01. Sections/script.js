function create(words) {
   let mother = document.getElementById("content");
   for(let word of words){
      let newDiv = document.createElement("div");
      let newP = document.createElement("p");
      newP.textContent = word;
      newP.style.display = "none";
      newDiv.appendChild(newP);
      newDiv.addEventListener("click", myFunc);
      
      mother.appendChild(newDiv);

   }


   function myFunc(event){
      event.currentTarget.children[0].style.display ="";
  
  

   }
}