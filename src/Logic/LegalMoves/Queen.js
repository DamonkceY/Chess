import { getLegalMoveBishop } from "./Bishop";
import { getLegalMoveRook } from "./Rook";

function getLegalMoveQueen(e, arr) {
  arr = getLegalMoveBishop(e, arr);
  arr = getLegalMoveRook(e, arr);
  return arr;
}

export { getLegalMoveQueen };
