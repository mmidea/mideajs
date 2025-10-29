function oldBookShelf(input){
let searchedBook = input[0];
let curBook = input[1];
let i = 1;

while (curBook !== 'No More Books') {
    if(curBook == searchedBook){
        console.log(`You checked ${i-1} books and found it.`);
        break; 
    }
    i++;
    curBook = input[i];
}

if(curBook == 'No More Books'){
    console.log("The book you search is not here!");
    console.log(`You checked ${i-1} books.`); 
}
}
oldBookShelf(["Bourne",

    "True Story",
    
    "Forever",
    
    "More Space",
    
    "The Girl",
    
    "Spaceship",
    
    "Strongest",
    
    "Profit",
    
    "Tripple",
    
    "Stella",
    
    "The Matrix",
    
    "Bourne"]);