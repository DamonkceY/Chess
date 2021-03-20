<template>
  <div id="app" style="margin-top:50px;">
    <div v-for="x in 8" :key="x" class="row">
      <div class="col-md-2" style="padding-top:44px;">
        <button @click="boardZero()" v-if="x == 1" style="margin-left:20px;">
          Initialize Board
        </button>
      </div>

      <div
        v-for="y in 8"
        :key="y"
        class="wrap"
        style="width:100px;height:100px;padding:0px;display: flex;"
      >
        <square
          ref="square"
          :position="(x - 1) * 8 + y - 1"
          :row="x"
          :col="y"
          :move="move"
          @clickSquare="clickSquare"
        ></square>
      </div>
    </div>
  </div>
</template>

<script>
import Square from "./components/Square";
import { Board } from "./Logic/Board";
import { WatchMen } from "./Logic/LegalMoves/WatchMen";
import { setNullSuggestedMoves } from "./Logic/SetNullSuggestedMoves";
import { getLegalMoveRook } from "./Logic/LegalMoves/Rook";
import { getLegalMoveKing } from "./Logic/LegalMoves/King";
import { getLegalMoveKnight } from "./Logic/LegalMoves/Knight";
import { getLegalMovePawn } from "./Logic/LegalMoves/Pawn";
import { getLegalMoveBishop } from "./Logic/LegalMoves/Bishop";
import { getLegalMoveQueen } from "./Logic/LegalMoves/Queen";
export default {
  data() {
    return {
      turn: 8,
      move: null,
      legal: [],
      samePosition: false,
    };
  },
  components: {
    Square,
  },
  mounted() {
    localStorage.removeItem("toMove");
    this.turn = 8;
    this.initialize(null,0);
  },
  watch: {
    move() {
      localStorage.setItem("board", JSON.stringify(Board));
      localStorage.setItem("turn", JSON.stringify(this.turn));
    },
  },
  methods: {
    boardZero() {
      localStorage.removeItem("board");
      localStorage.removeItem("turn");
      window.location.reload();
    },
    initialize(board, i) {
      if (board) {
        board.forEach((element, index) => {
          Board[index] = board[index];
          this.move = Board[index];
        });
      } else if (localStorage.getItem("board")) {
        JSON.parse(localStorage.getItem("board")).forEach((element, index) => {
          Board[index] = JSON.parse(localStorage.getItem("board"))[index];
          this.move = Board[index];
        });
      }
      if (i != 0) {
        this.turn = JSON.parse(localStorage.getItem("turn"));
      }
    },

    clickSquare(e) {
      let watch_men = null;
      setNullSuggestedMoves(this);
      this.samePosition = false;
      let mv = JSON.parse(localStorage.getItem("toMove"));
      if (mv) {
        if (e.piece) {
          if (e.position == mv.position) {
            setNullSuggestedMoves(this);
            localStorage.removeItem("toMove");
          } else if (
            this.legal.includes(e.position) &&
            this.stubMove(mv, e, 0)
          ) {
            this.makeMove(mv, e);
            watch_men = WatchMen();
          } else {
            localStorage.removeItem("toMove");
          }
        } else if (this.legal.includes(e.position) && this.stubMove(mv, e, 0)) {
          this.makeMove(mv, e);
          watch_men = WatchMen();
        } else {
          localStorage.removeItem("toMove");
        }
      } else if (e.piece) {
        if (e.piece.color == this.turn) {
          this.legalMoves(e, 0);
          localStorage.setItem("toMove", JSON.stringify(e));
        }
      }
      if (watch_men) {
        this.watchTower(watch_men);
      }
    },
    watchTower(watch_men) {
      if (watch_men.BlackPiecesLegalMoves.includes(watch_men.whiteKing)) {
        this.$refs.square[watch_men.whiteKing].style = "border:solid red;";
        this.checkMate(8);
      }

      if (watch_men.WhitePiecesLegalMoves.includes(watch_men.blackKing)) {
        this.$refs.square[watch_men.blackKing].style = "border:solid red;";
        this.checkMate(16);
      }
    },
    checkMate(color) {
      let checkmate = true;
      checkmate;
      let BPieces = [];
      let WPieces = [];
      Board.forEach((element, index) => {
        if (element) {
          if (element.color == 8) {
            WPieces.push({ piece: element, position: index });
          } else if (element.color == 16) {
            BPieces.push({ piece: element, position: index });
          }
        }
      });
      console.log(BPieces, WPieces);
      switch (color) {
        case 8:
          WPieces.forEach((element) => {
            this.legalMoves(element);
            this.legal.forEach((item) => {
              if (this.stubMove(element, { position: item })) {
                checkmate = false;
              }
            });
          });

          break;
        case 16:
          BPieces.forEach((element) => {
            this.legalMoves(element);
            this.legal.forEach((item) => {
              if (this.stubMove(element, { position: item })) {
                checkmate = false;
              }
            });
          });

          break;
      }
      if (checkmate) {
        let title = this.turn == 8 ? "Black" : "White";
        this.turn = 0;
        this.$swal.fire({
          title: title + " Won by checkmate !",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    },

    stubMove(mv, e, i) {
      let oldMove = Board[mv.position];
      let newMove = Board[e.position];
      Board[mv.position] = null;
      Board[e.position] = mv.piece;
      let wm = WatchMen();
      Board[mv.position] = oldMove;
      Board[e.position] = newMove;
      if (this.turn == 8) {
        if (wm.BlackPiecesLegalMoves.includes(wm.whiteKing)) {
          return false;
        } else {
          if (i == 0) this.$refs.square[wm.whiteKing].style = null;
          return true;
        }
      } else {
        if (wm.WhitePiecesLegalMoves.includes(wm.blackKing)) {
          return false;
        } else {
          if (i == 0) this.$refs.square[wm.blackKing].style = null;
          return true;
        }
      }
    },
    makeMove(mv, e) {
      Board[mv.position] = null;
      Board[e.position] = mv.piece;
      setNullSuggestedMoves(this);
      localStorage.removeItem("toMove");
      this.turn == 8 ? (this.turn = 16) : (this.turn = 8);
      this.move = Board[e.position];
    },
    legalMoves(e, i) {
      if (e.piece) {
        switch (e.piece.piece) {
          case 1:
            this.legal = getLegalMoveKing(e, []);
            break;
          case 2:
            this.legal = getLegalMovePawn(e, []);
            break;
          case 3:
            this.legal = getLegalMoveKnight(e, []);
            break;
          case 4:
            this.legal = getLegalMoveBishop(e, []);
            break;
          case 5:
            this.legal = getLegalMoveRook(e, []);
            break;
          case 6:
            this.legal = getLegalMoveQueen(e, []);
            break;

          default:
            break;
        }
        if (i == 0) {
          this.notify(this.legal);
        }
      }
    },
    notify(arr) {
      arr.forEach((item) => {
        if (Board[item] && Board[item].piece == 1) {
          // console.log("qsd");
        } else {
          this.$refs.square[item].style = "border:solid green;";
        }
      });
    },
  },
};
</script>

<style>
body {
  background-color: rgb(230, 221, 225);
}
</style>
