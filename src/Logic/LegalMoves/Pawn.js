import { NumberSquareToEdge, Board } from "../Board";

function enemyPiece(e, pos, array) {
  if (Board[pos].color != e.piece.color) {
    array.push(pos);
  }
}

function getLegalMovePawn(e, arr) {
  let x = NumberSquareToEdge[e.position];

  switch (e.piece.color) {
    case 8:
      if ([48, 49, 50, 51, 52, 53, 54, 55].includes(e.position)) {
        if (!Board[e.position - 16] && !Board[e.position - 8]) {
          arr.push(e.position - 16);
        }
      }
      if (
        Board[e.position - 7] != null &&
        Board[e.position - 7].color != e.piece.color
      ) {
        enemyPiece(e, e.position - 7, arr);
      }
      if (
        Board[e.position - 9] != null &&
        Board[e.position - 9].color != e.piece.color
      ) {
        enemyPiece(e, e.position - 9, arr);
      }
      if (x.up == 0) {
        console.log("promote");
      }
      if (x.up > 0) {
        arr.push(e.position - 8);
      }

      if (Board[e.position - 8]) {
        arr.pop();
      }
      break;

    case 16:
      if ([8, 9, 10, 11, 12, 13, 14, 15].includes(e.position)) {
        if (!Board[e.position + 16] && !Board[e.position + 8]) {
          arr.push(e.position + 16);
        }
      }
      if (
        Board[e.position + 7] != null &&
        Board[e.position + 7].color != e.piece.color
      ) {
        enemyPiece(e, e.position + 7, arr);
      }
      if (
        Board[e.position + 9] != null &&
        Board[e.position + 9].color != e.piece.color
      ) {
        enemyPiece(e, e.position + 9, arr);
      }
      if (x.down == 0) {
        console.log("promote");
      }
      if (x.down > 0) {
        arr.push(e.position + 8);
      }

      if (Board[e.position + 8]) {
        arr.pop();
      }
      break;

    default:
      break;
  }
  return arr;
}

export { getLegalMovePawn };
