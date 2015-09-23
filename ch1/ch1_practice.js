var total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}

console.log(total);


// strings
console.log("This is the first line\nAnd this is the second");
console.log("A newline character is written like \"\\n\".");
console.log("con" + "cat" + "e" + "nate");


// Unary Operators

console.log(typeof 4.5);
console.log(typeof "x");
console.log(typeof x);

// minus operator can be used as a binary and unary operator
console.log(- (10 -2))

// Boolean Values

console.log(3 > 2);
console.log(3 < 2);
console.log("Aardvark" < "Zoroaster");
console.log("Itchy" != "Scratchy");
console.log(NaN == NaN);

// logical operators

console.log(true && false); // false
console.log(true && true); // true

console.log(true || false); // true
console.log(false || false); //false


console.log(1 + 1 == 2 && 10 * 10 > 50);


// Automatic Type Conversion

console.log(8 * null); // 0
console.log("5" - 1); // 4
console.log("5" + 1); // 51
console.log("five" * 2); // NaN
console.log(false == 0) // true

console.log(null == undefined); // true
console.log(null == 0): //false

console.log(null || "user") // user
console.log("Karl" || "user") // Karl


