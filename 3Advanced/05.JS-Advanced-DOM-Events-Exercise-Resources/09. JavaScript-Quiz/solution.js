function solve() {
 let btnArr =  document.getElementsByClassName("answer-text");
 const sectionsArr = Array.from(document.querySelectorAll("section"));
 const corAnswersArr = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
 let indexAnswer = 0;
 let corAnswersCounter = 0;
 let index = 1;
for(let btn of btnArr){
  btn.addEventListener("click", nextQuetionFunc);
}

function nextQuetionFunc(event){
let curSection = event.target.parentElement.parentElement.parentElement.parentElement ;

let answerText = event.target.textContent;
let corText = corAnswersArr[indexAnswer];
indexAnswer++;
if(answerText == corText){corAnswersCounter++}

//showing new section and hidding the old one:
let newSection = sectionsArr[index];
if(!newSection){
  curSection.style.display = "none";
  gameOverFunc(corAnswersCounter);
  return;
}
curSection.style.display = "none";
newSection.style.display = "block";
index++;
}

function gameOverFunc(rightAnswers){
document.getElementById("results").style.display = "block"; 
if(corAnswersCounter == 3){
document.querySelectorAll("h1")[1].textContent = "You are recognized as top JavaScript fan!"
}else{
document.querySelectorAll("h1")[1].textContent = `You have ${rightAnswers} right answers`
}
}

}
