import { Board } from "./Board";

function setNullSuggestedMoves(sudo) {
  for (let i = 0; i < 64; i++) {
    if (Board[i] && Board[i].piece == 1) {
      continue;
    } else {
      sudo.$refs.square[i].style = null;
    }
  }
}

export { setNullSuggestedMoves };
