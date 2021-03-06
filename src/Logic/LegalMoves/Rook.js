import { NumberSquareToEdge, Board } from "../Board";

function getLegalMoveRook(e, arr) {
  let x = NumberSquareToEdge[e.position];
  for (let index = 1; index <= x.down; index++) {
    if (hasPiece(e.position + 8 * index)) {
      enemyPiece(e, e.position + 8 * index, arr);
      break;
    } else {
      arr.push(e.position + 8 * index);
    }
  }
  for (let index = 1; index <= x.up; index++) {
    if (hasPiece(e.position - 8 * index)) {
      enemyPiece(e, e.position - 8 * index, arr);
      break;
    } else {
      arr.push(e.position - 8 * index);
    }
  }
  for (let index = 1; index <= x.left; index++) {
    if (hasPiece(e.position - index)) {
      enemyPiece(e, e.position - index, arr);
      break;
    } else {
      arr.push(e.position - index);
    }
  }
  for (let index = 1; index <= x.right; index++) {
    if (hasPiece(e.position + index)) {
      enemyPiece(e, e.position + index, arr);
      break;
    } else {
      arr.push(e.position + index);
    }
  }

  return arr;
}

function hasPiece(pos) {
  return Board[pos];
}
function enemyPiece(e, pos, array) {
  if (Board[pos].color != e.piece.color) {
    array.push(pos);
  }
}

export { getLegalMoveRook };
