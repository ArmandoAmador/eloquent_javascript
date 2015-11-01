/*
Flattening
Use the reduce method in combination with the concat method
to “flatten” an array of arrays into a single array that has
all the elements of the input arrays.
*/

function flatten(array) {
  var flattened = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      flattened.push(array[i][j])
    }
  }
  return flattened
}

console.log(flatten([[1, 2, 3], [4, 5, 6]]));

