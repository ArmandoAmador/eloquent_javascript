/*
Reversing an Array
Arrays have a method reverse, which changes the array by inverting the
order in which its elements appear. For this exercise, write two functions,
reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
as an argument and produces a new array that has the same elements in
the inverse order. The second, reverseArrayInPlace, does what the reverse
method does: it modifies the array given as argument in order to reverse
its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situations?
Which one is more efficient?
*/

function reverseArray(array) {
  var newArray = [];

  for (var i = 1; i <= array.length; i++) {
    newArray.push(array[array.length - i]);
  }

  return newArray;
}

function reverseArrayInPlace(array) {
  var temp = 0;
  var count = array.length;

  for (var i = 0; i < count / 2; i++) {
    temp = array[i];
    array[i] = array[count - i - 1]
    array[count - i - 1] = temp
  }
}

var values = [1, 2, 3, 4] ;
console.log(reverseArray(values)); // [4, 3, 2, 1]
console.log(values) // [1, 2, 3, 4] values still has it's original values
reverseArrayInPlace(values);
console.log(values); // [4, 3, 2, 1] values has been modified by reverseArrayInPlace
