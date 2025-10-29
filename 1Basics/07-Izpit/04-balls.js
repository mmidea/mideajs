function balls(input) {

    let points = 0;
    let numBalls = Number(input[0]);
    let i = 1;
    let curBall = input[i];
    let orange = 0;
    let red = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
    let other = 0;

    for (let index = 1; index <= numBalls; index++) {

        switch (curBall) {
            case "red":
                points += 5;
                red++;
                break;
            case "orange":
                points += 10;
                orange++;
                break;

            case "yellow":
                points += 15;
                yellow++;
                break;

            case "white":
                points += 20;
                white++;
                break;

            case "black":
                points = Math.trunc(points / 2);
                black++;
                break;


            default:
                other++;
                break;
        }


        i++;
        curBall = input[i];
    }


    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${other}`);
    console.log(`Divides from black balls: ${black}`);

}
balls(["5",

    "red",
    
    "red",
    
    "ddd",
    
    "ddd",

    "ddd"]);