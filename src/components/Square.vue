<template>
  <div style="width:100px; height:100px;" :class="color" @click="clicked">
    <!-- {{ position }} -->
    <img
      :style="style"
      :class="rotate"
      :src="piece_bind"
      width="100"
      height="100"
    />
  </div>
</template>

<script>
import { Board } from "../Logic/Board";
export default {
  props: ["row", "col", "position", "move"],
  data() {
    return {
      style: null,
      color: null,
      piece_bind: null,
      rotate: null,
    };
  },
  mounted() {
    if ((this.row + this.col) % 2 == 0) {
      this.color = "white";
    } else {
      this.color = "black";
    }
    this.getPiece(Board[this.position]);
  },
  watch: {
    move() {
      this.getPiece(Board[this.position]);

      Board[this.position] && Board[this.position].color == 16
        ? (this.rotate = "rotate180")
        : (this.rotate = null);
    },
  },
  methods: {
    clicked() {
      let move = {
        row: this.row,
        col: this.col,
        position: this.position,
        piece: Board[this.position],
      };
      this.$emit("clickSquare", move);
    },
    getPiece(piece) {
      if (piece != undefined) {
        switch (piece.piece) {
          case 0:
            this.piece_bind = require("../assets/empty.svg.png");
            break;
          case 1:
            if (piece.color == 8) {
              this.piece_bind = require("../assets/Chess_klt45.svg");
            } else {
              this.piece_bind = require("../assets/Chess_kdt45.svg");
              this.rotate = "rotate180";
            }
            break;
          case 2:
            if (piece.color == 8) {
              this.piece_bind = require("../assets/Chess_plt45.svg");
            } else {
              this.piece_bind = require("../assets/Chess_pdt45.svg");
              this.rotate = "rotate180";
            }
            break;
          case 3:
            if (piece.color == 8) {
              this.piece_bind = require("../assets/Chess_nlt45.svg");
            } else {
              this.piece_bind = require("../assets/Chess_ndt45.svg");
              this.rotate = "rotate180";
            }
            break;
          case 4:
            if (piece.color == 8) {
              this.piece_bind = require("../assets/Chess_blt45.svg");
            } else {
              this.piece_bind = require("../assets/Chess_bdt45.svg");
              this.rotate = "rotate180";
            }
            break;
          case 5:
            if (piece.color == 8) {
              this.piece_bind = require("../assets/Chess_rlt45.svg");
            } else {
              this.piece_bind = require("../assets/Chess_rdt45.svg");
              this.rotate = "rotate180";
            }
            break;
          case 6:
            if (piece.color == 8) {
              this.piece_bind = require("../assets/Chess_qlt45.svg");
            } else {
              this.piece_bind = require("../assets/Chess_qdt45.svg");
              this.rotate = "rotate180";
            }
            break;

          default:
            this.piece_bind = require("../assets/empty.svg.png");
            break;
        }
      } else {
        this.piece_bind = require("../assets/empty.svg.png");
      }
    },
  },
};
</script>

<style>
.rotate180 {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.black {
  background-color: tan;
}
.white {
  background-color: whitesmoke;
}
</style>
