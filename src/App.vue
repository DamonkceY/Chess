<template>
  <div id="app" style="margin-top:50px;">
    <div v-for="x in 8" :key="x" class="row">
      <div class="col-md-2" style="padding-top:44px;"></div>

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
    // this.watchTower(WatchMen(this))
  },
  methods: {
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
          } else if (this.legal.includes(e.position)) {
            this.makeMove(mv, e);
            watch_men = WatchMen();
          } else {
            localStorage.removeItem("toMove");
          }
        } else if (this.legal.includes(e.position)) {
          this.makeMove(mv, e);
          watch_men = WatchMen();
        } else {
          localStorage.removeItem("toMove");
        }
      } else if (e.piece) {
        if (e.piece.color == this.turn) {
          this.legalMoves(e);
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
      }

      if (watch_men.WhitePiecesLegalMoves.includes(watch_men.blackKing)) {
        this.$refs.square[watch_men.blackKing].style = "border:solid red;";
      }
    },
    makeMove(mv, e) {
      Board[mv.position] = null;
      Board[e.position] = mv.piece;
      this.move = Board[e.position];
      setNullSuggestedMoves(this);
      localStorage.removeItem("toMove");
      this.turn == 8 ? (this.turn = 16) : (this.turn = 8);
    },
    legalMoves(e) {
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
        this.notify(this.legal);
      }
    },
    notify(arr) {
      arr.forEach((item) => {
        if (Board[item] && Board[item].piece == 1) {
          console.log("qsd");
        } else {
          this.$refs.square[item].style = "border:solid green;";
        }
      });
    },
    error() {
      console.log("qsd");
    },
  },
};
</script>

<style>
body {
  background-color: rgb(230, 221, 225);
}
</style>
