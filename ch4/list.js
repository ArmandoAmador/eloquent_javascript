function arrayToList(array) {
  var list = null

  for (var i = 0; i < array.length; i++) {
    list = { value: array[array.length - i - 1], rest: list };
  }

  return list
}


function listToArray(list) {
  var array = [];

  for (var object = list; object; object = object.rest) {
    array.push(object.value);
  }

  return array;
}

array = [1, 2, 3];
list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

console.log(arrayToList(array));
console.log(listToArray(list));

