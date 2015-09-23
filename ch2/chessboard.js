// Write a program that creates a string that represents an 8 x 8 grid
// Using line characters to seperate lines. At eacht position of the grid
// there is either a space or a # character
// The characters should form a chess board
// Passing this string to console.log should show something like this:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

// When you a program that generates this pattern, define a variable
// size = 8 and change the program so that it works for any size, outputting
// a grid of the given width and height.

var board = "";
var size = 8;

for (var x = 0; x < size; x++) {
  for (var y = 0; y < size; y++) {
    if ( x % 2 == 0) {
      if ( y % 2 == 0) {
        board += "#";
      } else {
        board += " ";
      }
    } else {
      if (y % 2 == 0) {
        board += " ";
      }
      else {
        board += "#";
      }
    }
  }
  board += "\n";
}

console.log(board);
