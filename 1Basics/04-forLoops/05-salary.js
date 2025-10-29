function salary(input){
let openedTabs = Number(input[0]);
let salary = Number(input[1]);
let totalFee = 0;



for (let i = 2; i < input.length; i++) {
  
    let curTab = input[i];
    switch (curTab) {
        case 'Facebook': salary -= 150;
            
        break;

        case 'Instagram': salary -= 100;
            
        break;

        case 'Reddit': salary -= 50;
            
        break;
    
    }

    if (salary <= 0){
        break;
          
    }
    
}

if (salary <= 0) {
    console.log('You have lost your salary.');
} else {
    console.log(salary);
    
}


}
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);