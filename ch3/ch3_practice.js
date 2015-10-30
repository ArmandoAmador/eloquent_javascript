var square = function(x) {
  return x * x;
}

console.log(square(2)); // 4
console.log(square(12)); // 144


var makeNoise = function() {
  console.log("Pling!");
}

makeNoise(); // Pling!


var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};

console.log(power(2, 10)); // 1024


// Parameters and Scopes

var x = "outside";

var f1 = function() {
  var x = "inside fi";
}

f1();
console.log(x); // outside;

var f2 = function() {
  x = "inside f2";
}

f2();
console.log(x); // inside f2;


// Nested Scopes

var landscape = function() {
  var result = "";

  var flat = function(size) {
    for(var count = 0; count < size; count++)
      result += "_";
  };

  var mountain = function(size) {
    result += "/";
    for(var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape()); // ___/''''\______/'\_

var something = 1;
{
  var something = 2;
  // Do stuff with variable something...
}

// Outside the block again;

console.log(something); // 2


// Declaration Notation

console.log("The future says:", future());

function future() {
  return "we STILL have no flying cars.";
}


// The Call Stack

function greet(who) {
  console.log("Hello " + who);
}

greet("Harry");
console.log("Bye");


// Optional Arguments

console.log("Hello", "Good Evening", "How do you do");


function power(base, exponent) {
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}

console.log(power(4)); // 16
console.log(power(4, 4));  //64


// Closure

function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1()); // 1
console.log(wrap2()); // 2



// Closure example

function multiplier(factor) {
  return function(number) {
    return number * factor;
  }
}

var twice = multiplier(2);
console.log(twice(5));




// Recursion example

function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));


// Consider this puzzle:
// By starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite amount of new numbers can be produced
// How would you write a function that, given a number, tries to find a sequence of such additions and multiplication that produce that number?

//For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all


function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)")
  }
  return find(1, "1");
}

console.log(findSolution(24)); // ((1 * 3) + 5) * 3)





