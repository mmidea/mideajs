function search() {
   let searchedText = document.getElementById("searchText").value;
   let townsArr = Array.from(document.querySelectorAll("li"));
   let counter = 0;
  
   for(let i = 0; i < townsArr.length; i++){
      let content = townsArr[i].textContent;
      let all = (townsArr[i].textContent).includes(searchedText);
      
     if((townsArr[i].textContent).includes(searchedText) ){
      counter++;
      //document.querySelectorAll("li")[i].textContent
      //mainList[i].style.fontWeight = "bold";
      //mainList[i].style.textDecoration = "underline";
      document.querySelectorAll("li")[i].style.textDecoration = "underline";
      document.querySelectorAll("li")[i].style.fontWeight = "bold"; 
      //textdecoration ""
      
   }else{
      document.querySelectorAll("li")[i].style.textDecoration = "";
      document.querySelectorAll("li")[i].style.fontWeight = "";
   }
}
//`${matches} matches found`
document.querySelector("div").textContent = `${counter} matches found`
}