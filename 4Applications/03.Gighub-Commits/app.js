const list = document.getElementById("commits");

function loadCommits() {
    // Try it with Fetch API
    console.log('TODO...');
    const username = document.getElementById("username").value;
const repo = document.getElementById("repo").value;
const url = `https://api.github.com/repos/${username}/${repo}/commits`

fetch(url)
.then(onHeaders)
.then(displayCommits)
.catch(onError)
} 

function onHeaders(response){
    if(!response.ok){ throw "Error"}
    return response.json();
}

function displayCommits(data){
    console.log(data);
    
}

function onError(error){
    console.log(error);
    
}

function createListItem(){
    const item = document.createElement("li")
}