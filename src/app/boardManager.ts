import { Service } from "typedi";

import { ROWS, COLS } from "../constants";
import { TBoard, IShip, TCell } from "../types";

interface IBoardManager {
  placeShip: (
    ship: IShip,
    row: number,
    col: number,
    isHorizonatal: boolean,
    xui: boolean
  ) => void;
}

@Service()
export class BoardManager implements IBoardManager {
  private board: TBoard;

  constructor(board: TBoard) {
    this.board = board;
  }

  public placeShip(ship: any, row: number, col: number, isHorizontal: boolean) {
    const { size } = ship;
    const cells: TCell[] = [];

    for (let i = 0; i < size; i++) {
      const cellRow = isHorizontal ? row : row + i;
      const cellCol = isHorizontal ? col + i : col;

      cells.push((this.board[cellRow][cellCol].ship = ship));
    }

    const isValid = cells.every((cell) => cell.ship === undefined);

    if (!isValid) {
      throw new Error("Invalid ship placement.");
    }

    if (row > ROWS || row < 0 || col > COLS || col < 0) {
      throw new Error("Row and Col value must be from 0 to 9");
    }

    this.board[row].splice(col, 0, ...cells);
    this.board[row].splice(10);

    return this.board;
  }
}
