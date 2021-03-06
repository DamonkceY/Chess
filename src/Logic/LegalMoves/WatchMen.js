import { getLegalMoveRook } from "./Rook";
import { getLegalMoveKing } from "./King";
import { getLegalMoveKnight } from "./Knight";
import { getLegalMovePawn } from "./Pawn";
import { getLegalMoveBishop } from "./Bishop";
import { getLegalMoveQueen } from "./Queen";
import { Board } from "../Board";
function WatchMen() {
  let whiteKing = Board.findIndex((e) => {
    if (e) {
      return e.piece == 1 && e.color == 8;
    }
  });
  let blackKing = Board.findIndex((e) => {
    if (e) {
      return e.piece == 1 && e.color == 16;
    }
  });
  let WhitePiecesLegalMoves = [];
  let BlackPiecesLegalMoves = [];
  Board.forEach((item, index) => {
    if (item) {
      let e = {
        position: index,
        piece: {
          piece: item.piece,
          color: item.color,
        },
      };
      if (item.color == 8) {
        switch (item.piece) {
          case 1:
            getLegalMoveKing(e, WhitePiecesLegalMoves);
            break;
          case 2:
            getLegalMovePawn(e, WhitePiecesLegalMoves);
            break;
          case 3:
            getLegalMoveKnight(e, WhitePiecesLegalMoves);
            break;
          case 4:
            getLegalMoveBishop(e, WhitePiecesLegalMoves);
            break;
          case 5:
            getLegalMoveRook(e, WhitePiecesLegalMoves);
            break;
          case 6:
            getLegalMoveQueen(e, WhitePiecesLegalMoves);
            break;

          default:
            break;
        }
      }
      if (item.color == 16) {
        switch (item.piece) {
          case 1:
            getLegalMoveKing(e, BlackPiecesLegalMoves);
            break;
          case 2:
            getLegalMovePawn(e, BlackPiecesLegalMoves);
            break;
          case 3:
            getLegalMoveKnight(e, BlackPiecesLegalMoves);
            break;
          case 4:
            getLegalMoveBishop(e, BlackPiecesLegalMoves);
            break;
          case 5:
            getLegalMoveRook(e, BlackPiecesLegalMoves);
            break;
          case 6:
            getLegalMoveQueen(e, BlackPiecesLegalMoves);
            break;

          default:
            break;
        }
      }
    }
  });

  return { whiteKing, blackKing, WhitePiecesLegalMoves, BlackPiecesLegalMoves };
}

export { WatchMen };
