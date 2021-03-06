import { NumberSquareToEdge, Board } from "../Board";

function getLegalMoveKing(e, arr) {
  let x = NumberSquareToEdge[e.position];
  if (x.right > 0) {
    if (!Board[e.position + 1]) {
      arr.push(e.position + 1);
    } else {
      enemyPiece(e, e.position + 1, arr);
    }
  }
  if (x.left > 0) {
    if (!Board[e.position - 1]) {
      arr.push(e.position - 1);
    } else {
      enemyPiece(e, e.position - 1, arr);
    }
  }
  if (x.up > 0) {
    if (!Board[e.position - 8]) {
      arr.push(e.position - 8);
    } else {
      enemyPiece(e, e.position - 8, arr);
    }
  }
  if (x.down > 0) {
    if (!Board[e.position + 8]) {
      arr.push(e.position + 8);
    } else {
      enemyPiece(e, e.position + 8, arr);
    }
  }
  if (x.up_left > 0) {
    if (!Board[e.position - 9]) {
      arr.push(e.position - 9);
    } else {
      enemyPiece(e, e.position - 9, arr);
    }
  }
  if (x.up_right > 0) {
    if (!Board[e.position - 7]) {
      arr.push(e.position - 7);
    } else {
      enemyPiece(e, e.position - 7, arr);
    }
  }
  if (x.down_left > 0) {
    if (!Board[e.position + 7]) {
      arr.push(e.position + 7);
    } else {
      enemyPiece(e, e.position + 7, arr);
    }
  }
  if (x.down_right > 0) {
    if (!Board[e.position + 9]) {
      arr.push(e.position + 9);
    } else {
      enemyPiece(e, e.position + 9, arr);
    }
  }

  return arr;
}

function enemyPiece(e, pos, array) {
  if (Board[pos].color != e.piece.color) {
    array.push(pos);
    // sudo.$refs.square[pos].style = "border:solid red;";
  }
}

export { getLegalMoveKing };
