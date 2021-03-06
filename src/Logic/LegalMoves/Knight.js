import { NumberSquareToEdge, Board } from "../Board";

function enemyPiece(e, pos, array) {
  if (Board[pos].color != e.piece.color) {
    array.push(pos);
  }
}

function getLegalMoveKnight(e, arr) {
  let x = NumberSquareToEdge[e.position];

  // UP___________RIGHT
  if (x.up_right >= 2) {
    // up right 1
    if (e.position - 16 + 1 < 64 && e.position - 16 + 1 >= 0) {
      if (Board[e.position - 16 + 1]) {
        enemyPiece(e, e.position - 16 + 1, arr);
      } else {
        arr.push(e.position - 16 + 1);
      }
    }
    //
    // up right 2
    if (e.position - 8 + 2 < 64 && e.position - 8 + 2 >= 0) {
      if (Board[e.position - 8 + 2]) {
        enemyPiece(e, e.position - 8 + 2, arr);
      } else {
        arr.push(e.position - 8 + 2);
      }
    }
    //
  } else if (x.up_right == 1 && x.right >= 2) {
    // up right 2
    if (e.position - 8 + 2 < 64 && e.position - 8 + 2 >= 0) {
      if (Board[e.position - 8 + 2]) {
        enemyPiece(e, e.position - 8 + 2, arr);
      } else {
        arr.push(e.position - 8 + 2);
      }
    }
    //
  } else if (x.up_right == 1 && x.up >= 2) {
    // up right 1
    if (e.position - 16 + 1 < 64 && e.position - 16 + 1 >= 0) {
      if (Board[e.position - 16 + 1]) {
        enemyPiece(e, e.position - 16 + 1, arr);
      } else {
        arr.push(e.position - 16 + 1);
      }
    }
    //
  }

  // UP___________LEFT
  if (x.up_left >= 2) {
    // up left 1
    if (e.position - 16 - 1 < 64 && e.position - 16 - 1 >= 0) {
      if (Board[e.position - 16 - 1]) {
        enemyPiece(e, e.position - 16 - 1, arr);
      } else {
        arr.push(e.position - 16 - 1);
      }
    }
    //
    // up left 2
    if (e.position - 8 - 2 < 64 && e.position - 8 - 2 >= 0) {
      if (Board[e.position - 8 - 2]) {
        enemyPiece(e, e.position - 8 - 2, arr);
      } else {
        arr.push(e.position - 8 - 2);
      }
    }
    //
  } else if (x.up_left == 1 && x.left >= 2) {
    // up left 2
    if (e.position - 8 - 2 < 64 && e.position - 8 - 2 >= 0) {
      if (Board[e.position - 8 - 2]) {
        enemyPiece(e, e.position - 8 - 2, arr);
      } else {
        arr.push(e.position - 8 - 2);
      }
    }
    //
  } else if (x.up_left == 1 && x.up >= 2) {
    // up left 1
    if (e.position - 16 - 1 < 64 && e.position - 16 - 1 >= 0) {
      if (Board[e.position - 16 - 1]) {
        enemyPiece(e, e.position - 16 - 1, arr);
      } else {
        arr.push(e.position - 16 - 1);
      }
    }
    //
  }

  // DOWN___________LEFT
  if (x.down_left >= 2) {
    // down left 1
    if (e.position + 16 - 1 < 64 && e.position + 16 - 1 >= 0) {
      if (Board[e.position + 16 - 1]) {
        enemyPiece(e, e.position + 16 - 1, arr);
      } else {
        arr.push(e.position + 16 - 1);
      }
    }
    //
    // down left 2
    if (e.position + 8 - 2 < 64 && e.position + 8 - 2 >= 0) {
      if (Board[e.position + 8 - 2]) {
        enemyPiece(e, e.position + 8 - 2, arr);
      } else {
        arr.push(e.position + 8 - 2);
      }
    }
    //
  } else if (x.down_left == 1 && x.left >= 2) {
    // down left 2
    if (e.position + 8 - 2 < 64 && e.position + 8 - 2 >= 0) {
      if (Board[e.position + 8 - 2]) {
        enemyPiece(e, e.position + 8 - 2, arr);
      } else {
        arr.push(e.position + 8 - 2);
      }
    }
    //
  } else if (x.down_left == 1 && x.down >= 2) {
    // down left 1
    if (e.position + 16 - 1 < 64 && e.position + 16 - 1 >= 0) {
      if (Board[e.position + 16 - 1]) {
        enemyPiece(e, e.position + 16 - 1, arr);
      } else {
        arr.push(e.position + 16 - 1);
      }
    }
    //
  }

  // DOWN___________Right
  if (x.down_right >= 2) {
    // down right 1
    if (e.position + 16 + 1 < 64 && e.position + 16 + 1 >= 0) {
      if (Board[e.position + 16 + 1]) {
        enemyPiece(e, e.position + 16 + 1, arr);
      } else {
        arr.push(e.position + 16 + 1);
      }
    }
    //
    // down right 2
    if (e.position + 8 + 2 < 64 && e.position + 8 + 2 >= 0) {
      if (Board[e.position + 8 + 2]) {
        enemyPiece(e, e.position + 8 + 2, arr);
      } else {
        arr.push(e.position + 8 + 2);
      }
    }
    //
  } else if (x.down_right == 1 && x.right >= 2) {
    // down right 2
    if (e.position + 8 + 2 < 64 && e.position + 8 + 2 >= 0) {
      if (Board[e.position + 8 + 2]) {
        enemyPiece(e, e.position + 8 + 2, arr);
      } else {
        arr.push(e.position + 8 + 2);
      }
    }
    //
  } else if (x.down_right == 1 && x.down >= 2) {
    // down right 1
    if (e.position + 16 + 1 < 64 && e.position + 16 + 1 >= 0) {
      if (Board[e.position + 16 + 1]) {
        enemyPiece(e, e.position + 16 + 1, arr);
      } else {
        arr.push(e.position + 16 + 1);
      }
    }
    //
  }

  return arr;
}

export { getLegalMoveKnight };
