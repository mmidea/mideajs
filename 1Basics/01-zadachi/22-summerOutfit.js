function summerOutfit(input){

    let degrees = Number(input[0]);
    let partOfDay = input[1];
    let outfit ='';
    let shoes ='';
     
    
    switch (partOfDay) 
    {
        case 'Morning': 
        if(degrees <=18 && degrees>= 10)
        {
           outfit = 'sweatshirt';
           shoes = 'sneakers'; 
        } 
        else if(degrees > 18 && degrees <= 24) 
        {
            outfit = 'shirt';
           shoes = 'moccasins';
      
        } 
        else if (degrees >= 25)
        { outfit = 'T-shirt';
          shoes = 'sandals';
         }
        break;
    
        case 'Afternoon':
            if (degrees <=18 && degrees>= 10)
                {
                   outfit = 'shirt';
                   shoes = 'moccasins'; 
                } 
                else if(degrees > 18 && degrees <= 24) 
                {
                    outfit = 'T-shirt';
                   shoes = 'sandals';
              
                } 
                else if (degrees >= 25)
                { outfit = 'swim suit';
                  shoes = 'barefoot';
                 }   
        break;
    
        case 'Evening':
            if (degrees <=18 && degrees>= 10)
                {
                   outfit = 'shirt';
                   shoes = 'moccasins'; 
                } 
                else if(degrees > 18 && degrees <= 24) 
                {
                    outfit = 'shirt';
                   shoes = 'moccasins';
              
                } 
                else if (degrees >= 25)
                { outfit = 'shirt';
                  shoes = 'moccasins';
                 }     
        break;
    
        
        default:break;
    }
    
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
    
    }
    summerOutfit(["22",
    
        "Afternoon"]);