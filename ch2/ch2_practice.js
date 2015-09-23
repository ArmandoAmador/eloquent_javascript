var caught = 5 * 5;
console.log(caught);
// 10

var ten = 10;
console.log(ten * ten);
// 100

var mood = "light";
console.log(mood);
// light

mood = "dark";
console.log(mood);


var luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// 105

var one = 1, two = 2;
console.log(one + two);
// 3

var x = 30;
console.log("the value of x is", x);
// the value of x is 30

console.log(Math.max(2, 4));
// 4

console.log(Math.min(2, 4) + 100);
// 102


console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);


var number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}


var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}

console.log(result);
//1024


for (var number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
//1024


for (var current = 20; ; current++) {
  if (current % 7 == 0)
    break;
}

console.log(current);
// 21


for (var number = 0; number <= 12; number += 2) {
  console.log(number);
}


switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
    break;
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
