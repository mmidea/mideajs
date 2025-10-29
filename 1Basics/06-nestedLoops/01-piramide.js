function piramide(number){

let print = 1
let m = 1;

while(print <= number)
{
    let buf ="";
        for (let numbersPerRow = m ; numbersPerRow > 0; numbersPerRow--){
            if (print <= number){buf += print + " ";
            print++; }
            
        }
        console.log(buf);
        m++  

}
}
piramide(15);
