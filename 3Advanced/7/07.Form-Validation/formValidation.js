function validate() {
    const regexName = /^[A-Za-z0-9]{3,20}$/;
    const regexPass = /^[A-Za-z0-9_]{5,15}$/;
    const regexEmail = /[^@]*?@[^.]*?\./gm;
    const regexCompanyNum = /^[1-9][0-9]{3}$/gm;

    

    const submitBtnRef = document.getElementById("submit");
    submitBtnRef.addEventListener("click", onValidate);

    const usernameRef = document.getElementById("username");
    const emailRef = document.getElementById("email");
    const passRef = document.getElementById("password");
    const confPassRef = document.getElementById("confirm-password");
    const checkboxRef = document.getElementById("company");
    const companyInfoRef = document.getElementById("companyInfo");
    const companyNumRef = document.getElementById("companyNumber");
    const visibleRef = document.getElementById("valid");

    checkboxRef.addEventListener("change", checkboxChanged);
    
    function onValidate(e){
      let isValid = true;
       // debugger
       if(regexName.test(usernameRef.value)){
      usernameRef.style = "border: none" 
       }else{
        usernameRef.style = "border-color: red" 
        isValid = false;
       }

       if(regexEmail.test(emailRef.value)){
        emailRef.style = "border: none" 
       }else{
        emailRef.style = "border-color: red" 
        isValid = false;
       }

        if(regexPass.test(passRef.value)){
        passRef.style = "border: none" 
       }else{
        passRef.style = "border-color: red" 
        isValid = false;
       }
       
         if(regexPass.test(confPassRef.value) && (confPassRef.value == passRef.value)){
        confPassRef.style = "border: none" 
       }else{
        confPassRef.style = "border-color: red"
        isValid = false; 
       }

       if(companyInfoRef.style.display == "block"){
       if(regexCompanyNum.test(companyNumRef.value)){
        companyNumRef.style = "border: none"
       }else{
        companyNumRef.style = "border-color: red"
        isValid = false;
       }
       }
        
       if(isValid){
       visibleRef.style.display = "block"
       }else{
       visibleRef.style.display = "none"
       }
       e.preventDefault();
    }

    function checkboxChanged(e){
     if(checkboxRef.checked){
    companyInfoRef.style.display = "block" 
     }else{
    companyInfoRef.style.display = "none" 
     }

    }

}
