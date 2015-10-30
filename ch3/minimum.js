var minimum = function(a, b) {
  if (a == b)
    return "Numbers equal"
  else if (a > b)
    return a
  else
    return b
}

console.log(minimum(1, 2)) // 2
console.log(minimum(2, 2)) // Numbers equal
console.log(minimum(3, 2)) // 3

