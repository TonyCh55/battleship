import { Service } from "typedi";

import { ROWS, COLS, CellStatus } from "../constants/index";
import { TBoard, TCell } from "../types/index";

interface IBoard {
  createEmptyBoard: () => TBoard;
}

@Service()
export class BoardService implements IBoard {
  private board: TCell[][] = [];
  private emptyCell: TCell = { status: CellStatus.Hidden };

  public createEmptyBoard() {
    for (let i = 0; i < ROWS; i++) {
      const row = [];

      for (let j = 0; j < COLS; j++) {
        row.push(this.emptyCell);
      }

      this.board.push(row);
    }

    return this.board;
  }
}
