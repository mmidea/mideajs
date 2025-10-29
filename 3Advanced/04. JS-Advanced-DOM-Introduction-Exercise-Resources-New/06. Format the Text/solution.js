function solve() {
  let textInput = document.getElementById("input").value;
  let output = document.getElementById("output");
  if(textInput == ""){return;}
  let sentancesArr = textInput.split(".");
  //console.log(sentancesArr);  ["abc"]   [""]
  
  sentancesArr = sentancesArr.filter(x => x.length > 0); //["abc"] []
  //console.log(sentancesArr);

  sentancesArr = sentancesArr.map(x => x + ".");
  console.log(sentancesArr);
  let text = sentancesArr[0];
  let outputArr = [];
  for(let i = 0; i < sentancesArr.length; i ++){
    let first = sentancesArr[i] 
    i++;
    let second = sentancesArr[i] ? sentancesArr[i]: "";
    i++;
    let third = sentancesArr[i] ? sentancesArr[i]: "";
  let newElement = first + second + third;
  output.innerHTML += `<p>${newElement} </p>`
  //outputArr.push(newElement);
  }
  

 
  

}

/*JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a
language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside
HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web. JavaScript enables
interactive web pages and thus is an essential part of web applications. The vast majority of websites use it,
and all major web browsers have a dedicated JavaScript engine to execute it. As a multi-paradigm language,
JavaScript supports event-driven, functional, and imperative (including object-oriented and prototype-based)
programming styles. It has an API for working with text, arrays, dates, regular expressions, and basic
manipulation of the DOM, but the language itself does not include any I/O, such as networking, storage, or
graphics facilities, relying for these upon the host environment in which it is embedded.*/