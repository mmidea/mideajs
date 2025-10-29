// Пъзел - 2.60 лв.

// · Говореща кукла - 3 лв.

// · Плюшено мече - 4.10 лв.

// · Миньон - 8.20 лв.

// · Камионче - 2 лв.
// Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от
// общата цена. От спечелените пари Петя трябва да даде 10% за наема на
// магазина. Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия

function toyShop(input) {
    let vacationPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);
    let totalCount = puzzlesCount + dollsCount + bearsCount + minionsCount;
    let totalPrice = puzzlesCount * 2.6 + dollsCount * 3 + bearsCount * 4.1 + minionsCount * 8.2 + trucksCount * 2;
  
  
  
    if (totalCount >= 50) totalPrice = totalPrice * 0.75;
    totalPrice = totalPrice * 0.9;
  
    if (totalPrice >= vacationPrice) {
      let moneyLeft = totalPrice - vacationPrice;
      console.log(`Yes! ${moneyLeft.toFixed(2)} lv left`);
    }
    else {
      let moneyNeeded = vacationPrice - totalPrice;
  
      console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
  }
  toyShop(["40.8",
  
  "20",
  
  "25",
  
  "30",
  
  "50",
  
  "10"]);