function arrayToList(arr) {
  var list = {}
  var temp = list

  for (var i = 0; i < arr.length; i++) {
    temp.value = arr[i]
    temp.rest = {}
    temp = temp.rest;
  }

  return list
}


function listToArray(list) {
  var array = [];
  var temp = list;
  var status = true;

  while (status) {
    array.push(temp.value)
    if (!isEmptyObject(temp.rest)) {
      temp = temp.rest;
    } else {
      status = false
    }
  }
  return array;
}

function isEmptyObject(obj) {
    var name;
    for (name in obj) {
        return false;
    }
    return true;
}

array = [1, 2, 3];
list = { value: 1, rest: { value: 2, rest: { value: 3, rest: {} } } }

console.log(arrayToList(array));
console.log(listToArray(list));

