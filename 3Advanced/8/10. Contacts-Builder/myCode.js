window.addEventListener('load', solve);
function solve(){
class Contact {
    constructor(fName, lName, tel, email) {
       this.firstName = fName;
       this.lastName = lName;
       this.phone = tel;
       this.email = email; 
       this.online = false;
    }
    render(id){
        let newArticle = document.createElement("article");
        newArticle.innerHTML += `<div class="title">${this.firstName} ${this.lastName}<button>&#8505;</button></div>`;
        newArticle.innerHTML +=` <div class="info"><span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span></div>`

        let mainElement = document.getElementById(id);
        mainElement.appendChild(newArticle);
    }
}


let contacts = [

new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),

new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),

new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")

];

}

//contacts.forEach(c => c.render('main')); 