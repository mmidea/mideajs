function arena(arr){
let gladiators ={};
let i =0;
let command = arr[i];
while(command != "Ave Cesar"){
    
   if(command.includes(" vs ")){
    let [gladiator1, gladiator2] = command.split(" vs ");
    if((gladiators.hasOwnProperty(gladiator1))&&(gladiators.hasOwnProperty(gladiator2))){
        let techniques1 = Object.keys(gladiators[gladiator1]); 
        let techniques2 = Object.keys(gladiators[gladiator2]);
        for(let technique of techniques1){
            if(techniques2.includes(technique)){
                if(gladiators[gladiator1][technique] > gladiators[gladiator2][technique]){
                   delete gladiators[gladiator2]; 
                }else{
                    delete gladiators[gladiator1];
                }
            }
        }
    }

   }else{
   let [gladiator, technique, skill] = command.split(" -> ");
   skill = Number(skill);
   //ako nqmame gladiatora - dobavqme vsichko:
   if(!gladiators.hasOwnProperty(gladiator)){
    gladiators[gladiator] = {};
    gladiators[gladiator][technique] = skill;
   }else{
    //imame gladiatora, no nqmame tehnikata:
    if(!gladiators[gladiator].hasOwnProperty(technique)){
        gladiators[gladiator][technique] = skill; 
    }else{
        //imame gladiatora i tehnikata, sravnqvame skilla silata:
        if(gladiators[gladiator][technique] < skill){
            gladiators[gladiator][technique] = skill;
        }
    }
   }
   
   }
    i++;
    command = arr[i];
}

let helpingObj ={};

let keys = Object.keys(gladiators);
for(let gladiator of keys){
let totalSkill = Object.values(gladiators[gladiator]).reduce((sum, el) => sum  + el, 0);
helpingObj[gladiator] = totalSkill;

}

let helpingArr = Object.entries(helpingObj).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]) );
for( let el of helpingArr){
    console.log(`${el[0]}: ${el[1]} skill`);
    let kvps = Object.entries(gladiators[el[0]]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]) );
    for(let kvp of kvps){
        console.log(`- ${kvp[0]} <!> ${kvp[1]}`);
        
    }
    
    
}

}
arena([ 'Peter -> Duck -> 400', 'Julius -> Shield -> 150', 'Gladius -> Heal -> 200', 'Gladius -> Support -> 250', 'Gladius -> Shield -> 250', 'Peter vs Gladius', 'Gladius vs Julius', 'Gladius vs Maximilian', 'Ave Cesar' ] );