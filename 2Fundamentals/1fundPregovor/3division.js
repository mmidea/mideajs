function divition(num){

let output ='';

if(num % 2 == 0 ){ output = "2";}
if(num % 3 == 0 ){ output = "3"}
if(num % 6 == 0 ){ output = "6"}
if(num % 7 == 0 ){ output = "7"}
if(num % 10 == 0 ){ output = "10"}
if(output === ''){
    console.log("Not divisible");
    
}else{

    console.log(`The number is divisible by ${output}`);
}

}
divition(30);