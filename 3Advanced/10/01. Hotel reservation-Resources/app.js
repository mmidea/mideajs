window.addEventListener('load', solve);

function solve() {
const nextBtnRef = document.getElementById("next-btn");
const firstNameRef = document.getElementById("first-name");
const lastNameRef = document.getElementById("last-name");
const dateInRef = document.getElementById("date-in");
const dateOutRef = document.getElementById("date-out");
const peopleCountRef = document.getElementById("people-count");
const reservationULref = document.querySelectorAll("ul")[0];


let oldFirstName;
let oldLastName;
let oldDateIn;
let oldDateOut;
let oldPeopleCount;

nextBtnRef.addEventListener("click", infoChecking);


function infoChecking(e){
    e.preventDefault();

    let dateIn = dateInRef.value.split("-").join("");
    let dateOut = dateOutRef.value.split("-").join("");
//console.log("yes1");

if(firstNameRef.value && lastNameRef.value && dateInRef.value && dateOutRef.value && peopleCountRef.value && ((dateOut-dateIn) > 0)){
 reservationStep(firstNameRef.value , lastNameRef.value , dateInRef.value ,dateOutRef.value , peopleCountRef.value );
//console.log("all have values");
}
}

function reservationStep(firstName, lastName, dateIn, dateOut, peopleCount){
  
reservationULref.innerHTML += `<li class="reservation-content">
                             <article>
                              <h3>Name: ${firstName} ${lastName}</h3>
                             <p>From date: ${dateIn}</p>
                             <p>To date: ${dateOut}</p>
 <p>For ${peopleCount} people</p>
</article>
<button class="edit-btn">Edit</button>
 <button class="continue-btn">Continue</button>
 </li>`


oldFirstName = firstNameRef.value
 oldLastName =lastNameRef.value
 oldDateIn =dateInRef.value
 oldDateOut= dateOutRef.value 
oldPeopleCount =peopleCountRef.value

nextBtnRef.disabled = true;
firstNameRef.value ="";
lastNameRef.value =""; 
dateInRef.value ="";
dateOutRef.value ="";
peopleCountRef.value =""; 

const editBtnRef = document.querySelectorAll("button")[1];
editBtnRef.addEventListener("click", editFunc)

const continueBtnRef = document.getElementsByClassName("continue-btn")[0];
continueBtnRef.addEventListener("click", continueReservation);

}


function editFunc(e){
nextBtnRef.disabled = false;
firstNameRef.value =oldFirstName
lastNameRef.value =oldLastName 
dateInRef.value =oldDateIn
dateOutRef.value =oldDateOut
peopleCountRef.value =oldPeopleCount

reservationULref.innerHTML = "";

}

function continueReservation(){
    const listRef = document.getElementsByClassName("reservation-content")[0];
    const confirmSectionRef = document.getElementsByClassName("confirm-list")[0];
    confirmSectionRef.appendChild(listRef);
    const editBtnRef = document.getElementsByClassName("edit-btn")[0]
    editBtnRef.className = "confirm-btn";
    editBtnRef.textContent = "Confirm"
    editBtnRef.removeEventListener("click", editFunc)
    const confirmBtnRef = editBtnRef;
    confirmBtnRef.addEventListener("click", finalConfirmFunc);

    const continueBtnRef = document.getElementsByClassName("continue-btn")[0];
    continueBtnRef.className = "cancel-btn";
    continueBtnRef.textContent = "Cancel";
    continueBtnRef.removeEventListener("click", continueReservation);
    const cancelBtnRef = continueBtnRef;
    cancelBtnRef.addEventListener("click", cancelReservFunc)
}

function finalConfirmFunc(){
nextBtnRef.disabled = false;
const listRef = document.getElementsByClassName("reservation-content")[0];
listRef.remove();

const outputRef = document.getElementById("verification");
outputRef.textContent = "Confirmed."
outputRef.className = "reservation-confirmed";

}

function cancelReservFunc(){
nextBtnRef.disabled = false;
const listRef = document.getElementsByClassName("reservation-content")[0];
listRef.remove();

const outputRef = document.getElementById("verification");
outputRef.textContent = "Cancelled."
outputRef.className = "reservation-cancelled" ;

}

    }



    
  
