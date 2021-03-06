import { NumberSquareToEdge, Board } from "../Board";

function getLegalMoveBishop(e, arr) {
  let x = NumberSquareToEdge[e.position];
  for (let index = 1; index <= x.up_right; index++) {
    if (hasPiece(e.position - 7 * index)) {
      enemyPiece(e, e.position - 7 * index, arr);
      break;
    } else {
      arr.push(e.position - 7 * index);
    }
  }
  for (let index = 1; index <= x.up_left; index++) {
    if (hasPiece(e.position - 9 * index)) {
      enemyPiece(e, e.position - 9 * index, arr);
      break;
    } else {
      arr.push(e.position - 9 * index);
    }
  }
  for (let index = 1; index <= x.down_right; index++) {
    if (hasPiece(e.position + 9 * index)) {
      enemyPiece(e, e.position + 9 * index, arr);
      break;
    } else {
      arr.push(e.position + 9 * index);
    }
  }
  for (let index = 1; index <= x.down_left; index++) {
    if (hasPiece(e.position + 7 * index)) {
      enemyPiece(e, e.position + 7 * index, arr);
      break;
    } else {
      arr.push(e.position + 7 * index);
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
    // if (Board[pos].piece != 1) {
    //   sudo.$refs.square[pos].style = "border:solid red;";
    // }
  }
}
export { getLegalMoveBishop };
