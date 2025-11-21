const list = document.getElementById("commits");

function loadCommits() {
    
const username = document.getElementById("username").value;
const repo = document.getElementById("repo").value;
const url = `https://api.github.com/repos/${username}/${repo}/commits`

fetch(url)
.then(onHeaders)
.then(displayCommits)
.catch(onError)
} 

function onHeaders(response){
    console.log(response);
    
    if(!response.ok){ throw "Error"}
    return response.json();
}

function displayCommits(data){

    //console.log(data.map(createListItem));
    list.replaceChildren(...data.map(createListItem))
    
}

function onError(error){
    console.log(error);
    
}

function createListItem({  commit: {author: {name}, message}   }){
    const item = document.createElement("li");
    item.textContent = `${name}: ${message}`;
    return item;
}