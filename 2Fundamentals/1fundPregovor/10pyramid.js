function pyramid(base, increment){
    let rowCounter = 0;
    let gold = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let rowCounterAll = 0;
    for( base; base>=3; base -= 2 ){
        rowCounterAll++;
        rowCounter++;
        stone += 1*1*increment*(base - 2)*(base - 2);
    if (rowCounter == 5){

        lapis += 1*1*increment*2*(base - 2) + 1*1*increment*base*2;
        rowCounter = 0;
        continue;
    }
    marble += 1*1*increment*2*(base - 2) + 1*1*increment*base*2;

    }

    gold = 1*1*increment*base*base;
    rowCounterAll++;
    let height = rowCounterAll*increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
    
    
    
    

}
pyramid(11,

    0.75);