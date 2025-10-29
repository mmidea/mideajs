function calculator() {
     let num1 ;
    let num2 ;
    let result;
  
    function init(selector1, selector2, resultSelector) {
      num1 = document.querySelector(selector1);
      num2 = document.querySelector(selector2);
      result = document.querySelector(resultSelector);
    }
  
    function add() {
      const sum = Number(num1.value )+ Number(num2.value);
      result.value = sum;
    }
  
    function subtract() {
      const subtraction = Number(num1.value) - Number(num2.value)
      result.value = subtraction
    }
  
    return {
      init: init,
      add: add,
      subtract: subtract
    };
}




