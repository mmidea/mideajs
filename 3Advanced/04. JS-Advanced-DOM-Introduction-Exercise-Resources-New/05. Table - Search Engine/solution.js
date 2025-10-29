function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //debugger;
      let searchedText = document.getElementById("searchField").value;
      
      let tableRows = Array.from(document.querySelectorAll("tbody tr"));
      for(let row of tableRows){
         //console.log(row.textContent);
         let rowArr = Array.from(row.querySelectorAll("td"));
         for(let data of rowArr){
         if((data.textContent).includes(searchedText)){
            row.classList.add("select");
            break;
         }else{
         row.classList.remove("select");
         }
            
         
         }
         
         
      }
      document.getElementById("searchField").value = "";
   }
}