function validate() {
    const inputRef = document.getElementById("email");
    inputRef.addEventListener("change", onValidate);
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/gm

   function onValidate(e){

        let emailText = e.target.value;
        if(pattern.test(emailText)){
           e.target.classList.remove("error");
        }else{
          e.target.classList.add("error");
        }


    }
   

    

}