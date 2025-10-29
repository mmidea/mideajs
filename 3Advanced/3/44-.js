function heroic(array) {
  let heroes = [];
  for (let element of array) {
    let [name, level, items] = element.split(" / ");

    let obj = {
      name: name,
      level: Number(level),
      items: items ? items.split(", ") : [],
    };
    heroes.push(obj);
  }
  console.log(JSON.stringify(heroes));
}


console.log(solve(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara']));