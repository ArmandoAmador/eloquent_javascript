var listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers) // [2, 3, 5, 7, 11]
console.log(listOfNumbers[1]) // 3
console.log(listOfNumbers[1 - 1]); // 2


console.log(listOfNumbers["length"]);
console.log(listOfNumbers.length)

var doh = "Doh";
console.log(typeof doh.toUpperCase); // function
console.log(doh.toUpperCase()); // DOH

//array methods

var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack); // ["Mack", "the", "Knife"]
console.log(mack.join(" ")); // Mack the Knife
console.log(mack.pop()); // Knife
console.log(mack); // ["Mack", "the"]

// objects

var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running", "television"]
};

console.log(day1); // { squirrel: false, events: [ 'work', 'touched tree', 'pizza', 'running', 'television' ] }
console.log(day1.squirrel); // false
console.log(day1.wolf); // undefined
day1.wolf = false;
console.log(day1.wolf); // false

// object example

var anObject = { left: 1, right: 2};
console.log(anObject);
console.log(anObject.left); // 1
delete anObject.left; // 1
console.log(anObject.left); // undefined
console.log("left" in anObject); // false
console.log("right" in anObject); // true


// Jacques's journal as an array of objects.

var journal = [
  { events: ["work", "touched tree", "pizza", "running","television"], squirrel: false},
  { events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], squirrel: false },
  { events: ["weekend", "cycling", "break", "peanuts", "beer"], squirrel: true }
]

// Object Mutability

var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};

console.log(object1 == object2); // true
console.log(object1 == object3); // false

object1.value = 15;
console.log(object2.value); // 15
console.log(object3.value); // 10


var map = {};

function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map);
console.log(map["touched tree"])

for (var event in map)
  console.log("The correlation for '" + event + "' is " + map[event]);



// array methods for shift and unshift

var todoList = [];
function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  return todoList.shift();
}
function urgentlyRememberTo(task) {
  todoList.unshift(task);
}

console.log([1, 2, 3, 2, 1].indexOf(2)); // ◃ 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // ◃ 3


console.log([0, 1, 2, 3, 4].slice(2, 4)); //[2, 3]
console.log([0, 1, 2, 3, 4].slice(2)); //[2, 3, 4]

function remove(array, index) {
  return array.slice(0, index)
          .concat(array.slice(index + 1));
}


console.log(remove(["a", "b", "c", "d", "e", ], 2));
// ["a", "b", "d", "e"]


var myString = "Fido";
myString.myProperty = "value";
console.log(myString.myProperty);


console.log("coconuts".slice(4, 7)) // nut
console.log("coconut".indexOf("u")) // 5

console.log("one two three".indexOf("ee")); // 11


console.log("     okay \n ".trim());// okay


var string = "abc";
console.log(string.length); // 3
console.log(string.charAt(0)) // a
console.log(string[1]); // b



function noArguments() {}
noArguments(1, 2, 3); // this is okay

function threeArguments(a, b, c) {}
threeArguments(); // and so is this


function argumentCounter() {
  console.log("You gave me", arguments.length, "arguments.");
}

argumentCounter("Straw man", "Tautology", "Ad hominem");
// You gave me 3 arguments


function addEntry(squirrel) {
  var entry = { events: [], squirrel: squirrel };
  for (var i = 1; i < arguments.length; i++)
    entry.events.push(arguments[i]);
  journal.push(entry);
}

addEntry(true, "work", "touched tree", "pizza", "running", "television");


// Math objects

function randomPointOnCircle(radius) {
  var angle = Math.random() * 2 * Math.PI;
  return { x: radius * Math.cos(angle),
           y: radius * Math.sin(angle) };

}

console.log(randomPointOnCircle(2));


