function race(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);
    
    let sumSeconds = first + second + third;
    
    let mins = Math.floor(sumSeconds / 60);
    let seconds = (sumSeconds % 60);
    
    if (seconds < 10) {
    
        console.log(`${mins}:0${seconds}`);
    }
    else { console.log(`${mins}:${seconds}`)};
    }
    race(["50", "50", "49"]);