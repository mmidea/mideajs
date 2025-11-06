class Textbox {
  _elements;
        constructor(selector,regEx) {
     this.value;
     this._elements = document.querySelectorAll(selector) ;
     
     this._invalidSymbols = regEx;

        
    }
    get elements(){
        return this._elements
    }
    set elements(el){

    }

    isValid(){
      let elementsArr =  Array.from(this._elements);
      elementsArr.array.forEach(element => {
        let textContent = element.textContent;
        if(textContent.test(this._invalidSymbols)){
            return false;
        }
      });
      return true;

    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
