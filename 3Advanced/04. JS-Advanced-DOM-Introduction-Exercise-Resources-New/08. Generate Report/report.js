function generateReport() {
    let allCheckBoxes = document.querySelectorAll("thead input"); //[1].checked
    let rowsRef = document.querySelectorAll("tbody tr");
  let arr = [];

  for(let row of rowsRef){
    
    let newObj = {};

for(let i= 0; i < allCheckBoxes.length; i++){
        if(allCheckBoxes[i].checked){
         newObj[allCheckBoxes[i].name] = row.children[i].textContent;

        }
    }

    arr.push(newObj);
    
    
  }

  document.getElementById("output").textContent = JSON.stringify(arr);
   //console.log(arr);
   
  
}