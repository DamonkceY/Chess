const Board = [];
const NumberSquareToEdge = [];

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    let pos = row * 8 + col;
    let down = 7 - row;
    let up = row;
    let left = col;
    let right = 7 - col;
    let up_left = up < left ? up : left;
    let up_right = up < right ? up : right;
    let down_left = down < left ? down : left;
    let down_right = down < right ? down : right;
    NumberSquareToEdge[pos] = {
      up,
      down,
      right,
      left,
      up_left,
      up_right,
      down_left,
      down_right,
    };
  }
}
// Test
// Board[0] = {
//   piece: 1,
//   color: 16,
// };

// Board[40] = {
//   piece: 6,
//   color: 8,
// };
// ********

Board.length = 64;
// Starting Black Pieces...
Board[0] = {
  piece: 5,
  color: 16,
};
Board[1] = {
  piece: 3,
  color: 16,
};
Board[2] = {
  piece: 4,
  color: 16,
};
Board[3] = {
  piece: 6,
  color: 16,
};
Board[4] = {
  piece: 1,
  color: 16,
};
Board[5] = {
  piece: 4,
  color: 16,
};
Board[6] = {
  piece: 3,
  color: 16,
};
Board[7] = {
  piece: 5,
  color: 16,
};
Board[8] = {
  piece: 2,
  color: 16,
};
Board[9] = {
  piece: 2,
  color: 16,
};
Board[10] = {
  piece: 2,
  color: 16,
};
Board[11] = {
  piece: 2,
  color: 16,
};
Board[12] = {
  piece: 2,
  color: 16,
};
Board[13] = {
  piece: 2,
  color: 16,
};
Board[14] = {
  piece: 2,
  color: 16,
};
Board[15] = {
  piece: 2,
  color: 16,
};
// // // //  // // // // //
// Starting White Pieces...
Board[48] = {
  piece: 2,
  color: 8,
};
Board[49] = {
  piece: 2,
  color: 8,
};
Board[50] = {
  piece: 2,
  color: 8,
};
Board[51] = {
  piece: 2,
  color: 8,
};
Board[52] = {
  piece: 2,
  color: 8,
};
Board[53] = {
  piece: 2,
  color: 8,
};
Board[54] = {
  piece: 2,
  color: 8,
};
Board[55] = {
  piece: 2,
  color: 8,
};
Board[56] = {
  piece: 5,
  color: 8,
};
Board[57] = {
  piece: 3,
  color: 8,
};
Board[58] = {
  piece: 4,
  color: 8,
};
Board[59] = {
  piece: 6,
  color: 8,
};
Board[60] = {
  piece: 1,
  color: 8,
};
Board[61] = {
  piece: 4,
  color: 8,
};
Board[62] = {
  piece: 3,
  color: 8,
};
Board[63] = {
  piece: 5,
  color: 8,
};

export { Board, NumberSquareToEdge };
