function moving(input){
let apartmentSpace = Number(input[0])*Number(input[1])*Number(input[2]);
let i = 3
let curCartons = input[i];
i++
while (curCartons !== "Done" ) {
    apartmentSpace -= Number(curCartons);
    if (apartmentSpace <= 0 ) {
        console.log(`No more free space! You need ${Math.abs(apartmentSpace)} Cubic meters more.`);
        break;
    }
    curCartons = input[i];
    i++;
}

if (curCartons === "Done"){
    console.log(`${apartmentSpace} Cubic meters left.`);  
}

}
moving(["10",

    "1",
    
    "2",
    
    "4",
    
    "6",
    
    "Done"]);