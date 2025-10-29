function building(floorsCount, roomsInFloor) {
    // let floorsCount = Number(input[0]);
    // let roomsInFloor = Number(input[1]);
    let roomKind;
    let curFloor;
    let buff ="";

    for (let f = floorsCount; f > 0; f--) {

        curFloor = f;
        if (curFloor % 2 == 0) { roomKind = "O" }
        else { roomKind = "A" }

        if (curFloor == floorsCount) { roomKind = "L" }

        for (let r = 0; r < roomsInFloor; r++) {
            buff += `${roomKind}${curFloor}${r} `;
            //console.log(`${roomKind}${curFloor}${r}`);
        }
        console.log(buff);
        buff = "";
        
    }

}
building(4, 4);