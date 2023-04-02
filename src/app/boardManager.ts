import { Service } from "typedi";

import { ROWS, COLS } from "../constants";
import { TBoard, IShip, TCell } from "../types";
import { getRandomInt } from "../utils";

interface IBoardManager {
  placeShip: (
    ship: IShip,
    row: number,
    col: number,
    isHorizonatal?: boolean
  ) => void;
  placeAllShips: (ships: IShip[]) => TBoard;
}

@Service()
export class BoardManager implements IBoardManager {
  private board: TBoard;

  constructor(board: TBoard) {
    this.board = board;
  }

  public placeShip(
    ship: any,
    row: number,
    col: number,
    isHorizontal: boolean = true
  ) {
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

    return;
  }

  public placeAllShips(ships: IShip[]) {
    ships.forEach((ship) => {
      let isValid = false;

      while (!isValid) {
        const row = getRandomInt(0, ROWS);
        const col = getRandomInt(0, COLS);

        try {
          this.placeShip(ship, row, col);
          isValid = true;
        } catch (e) {
          console.error(e);
        }
      }
    });

    return this.board;
  }
}
