function movies(array) {
    let list =[]
    
for (let i = 0; i < array.length; i++) {
   omega = array[i].split(' ')

   if(omega.includes('addMovie') ) { 
    [command, name] = array[i].split("addMovie ");
        obj={name}
      list.push(obj);

   }else if (omega.includes("directedBy")){ 
    [name, director] = array[i].split(" directedBy ")

    let movie = list.find(movie =>movie.name == name)
    if(movie){ 
        movie.director = director
    }

   }else{
    [name, date] = array[i].split(" onDate ")

    let movie = list.find(movie =>movie.name == name)
    if(movie){ 
        movie.date = date
    }
  

    }

    
}

console.log(list);


for (let movie of list){
    if(movie.name && movie.director && movie.date){
//console.log(JSON.stringify(movie));
}

}
}
movies([

    'addMovie Fast and Furious',
    
    'addMovie Godfather',
    
    'Inception directedBy Christopher Nolan',
    
    'Godfather directedBy Francis Ford Coppola',
    
    'Godfather onDate 29.07.2018',
    
    'Fast and Furious onDate 30.07.2018',
    
    'Batman onDate 01.08.2018',
    
    'Fast and Furious directedBy Rob Cohen'
    
    ]);