// We want to write a program that prints two numbers
// The numbers of cows and chickens on a farm
// With the words Cows and Chickens after them,
// and zeros padded beore both numbers so that they
// are always three digits long.


// 007 Cows
// 011 Chickens


function printFarmInventory(cows, chickens) {
  var cowString = String(cows);
  while (cowString.length < 3)
    cowString = "0" + cowString;
  console.log(cowString + " Cows");

  var chickenString = String(chickens);
  while (chickenString.length < 3)
    chickenString = "0" + chickenString;
  console.log(chickenString + " Chickens");
}

printFarmInventory(7, 11); // 007 Cows 011 Chickens
