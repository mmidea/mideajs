function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const inputAreaRef = document.querySelector("body section div textarea");
   function onClick () {
      let inputTextArr = JSON.parse(inputAreaRef.value);
      let allRestaurants ={};
      
      for(let line of inputTextArr){
       let [restaurant, workers] = line.split(" - ");
       //console.log(restaurant);
       workers = workers.split(", ");

       
       if(!allRestaurants.hasOwnProperty(restaurant)){
        allRestaurants[restaurant] = {
        avgSalary: 0,
        bestSalary: 0,
        countWorkers: 0,
        workers: {}
       }
       }
       
       
       for(let otherLine of workers){
        let [name, salary] = otherLine.split(" ");
        salary = Number(salary);

       
        allRestaurants[restaurant]["workers"][name] = salary;
        if(salary > allRestaurants[restaurant].bestSalary){
         allRestaurants[restaurant].bestSalary = salary;
        }
        allRestaurants[restaurant].countWorkers += 1;
        allRestaurants[restaurant].avgSalary = (allRestaurants[restaurant].avgSalary + salary)/ allRestaurants[restaurant].countWorkers;
       }

          //[ "PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660" ]
      
     }
     console.log(allRestaurants);
  let namesOfRestaurants = Object.keys(allRestaurants);
  for(let restaurant of namesOfRestaurants){

  }
debugger;
     let theBestRestaurant = Object.entries(allRestaurants).sort((a, b) => b[1].avgSalary - a[1].avgSalary);
     
    let RealtheBestRestaurant = theBestRestaurant[0]; // shte vyrne masiva s restoranta
    

  }


}