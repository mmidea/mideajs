function attachEventsListeners() {
    const btnRef = document.getElementById("convert");

btnRef.addEventListener("click", convFunction);

function convFunction(){
  let num = Number(document.getElementById("inputDistance").value);
    let selIndexFrom = Number(document.getElementById("inputUnits").selectedIndex);
    let selIndexTo = Number(document.getElementById("outputUnits").selectedIndex);

    let convToMeters = convToMetersFunc(num, selIndexFrom);

    let convToSelected = convToSelectedFunc(convToMeters, selIndexTo);
    
    document.getElementById("outputDistance").value = convToSelected;

    function convToMetersFunc(n, index) {
        let result = 0;
        if (index == 0) {
            //km 
            result = n * 1000;
        } else if (index == 1) {
            result = n;
        } else if (index == 2) {
            result = n * 0.01;
        } else if (index == 3) {
            result = n * 0.001;
        } else if (index == 4) {
            result = n * 1609.34;
        } else if (index == 5) {
            result = n * 0.9144;
        } else if (index == 6) {
            result = n * 0.3048;
        } else if (index == 7) {
            result = n * 0.0254;
        }

        return result;
    }

    function convToSelectedFunc(n, index){
     let result = 0;
        if (index == 0) {
            //km 
            result = n / 1000;
        } else if (index == 1) {
            result = n;
        } else if (index == 2) {
            result = n / 0.01;
        } else if (index == 3) {
            result = n / 0.001;
        } else if (index == 4) {
            result = n / 1609.34;
        } else if (index == 5) {
            result = n / 0.9144;
        } else if (index == 6) {
            result = n / 0.3048;
        } else if (index == 7) {
            result = n / 0.0254;
        }

        return result;

    }

}

  
}