class Textbox {
  _elements;
        constructor(selector,regEx) {
     this.value;
     this.selector = selector ;
     
     this._invalidSymbols = regEx;

        
    }
    get elements(){
        return this._elements
    }
    set elements(el){

    }

    isValid(){
      let selected = document.querySelectorAll(this.selector);
      let elementsArr =  Array.from(selected);
      elementsArr.array.forEach(element => {
        let textContent = element.value;
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
