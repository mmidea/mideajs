function ticketsFunc(arr, sortingCriterion){

    class Ticket {
        constructor(destination, price, status) {
           this.destination = destination;
           this.price = price;
           this.status = status 
        }
    }

    let allTickets =[];
for(let el of arr){

    let [destination, price, status] = el.split("|");
    price = Number(price);
    let newTicket = new Ticket(destination, price, status);
    //let kvps1 = Object.en
    //console.log(newTicket);
    allTickets.push(newTicket);
    
}

//let kvps = Object.entries(allTickets);
//console.log(kvps);

let sortedTickets;

if(sortingCriterion != "price"){
 sortedTickets =  allTickets.sort((a, b) =>  a[sortingCriterion].localeCompare(b[sortingCriterion]))
        //console.log(sortedTickets);
        
}else{
     sortedTickets =  allTickets.sort((a, b) =>  a[sortingCriterion] - b[sortingCriterion])
}

return sortedTickets;
       
         
        
       

//let kvps = Object.entries(impCollection).sort((a, b) => b[1] - a[1]);


}

ticketsFunc(
['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price');