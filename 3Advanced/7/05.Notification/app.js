function notify(message) {
  console.log('todo')
  const div = document.getElementById("notification");
  if(div.style.display == "block"){
    div.style.display = ""
  }else{
    div.style.display = "block"
  }
  //div.style.display = "block";
  div.textContent = message
 /* div.addEventListener("click", hideTheMessage);
  function hideTheMessage(e){
    e.target.textContent = "";
    e.target.style.display = "";
    
  }
    */
}