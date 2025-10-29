function solve(str){
let pattern = /[a-zA-Z]+/gm;
let matches = str.match(pattern);
if(matches){
    
    //matches.forEach( match => console.log(match.toUpperCase()) );
    matches = matches.map(match => match.toUpperCase());
    console.log(matches.join(", "));

}

 

}
solve(' ')