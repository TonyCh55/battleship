import { ShipType, CellStatus } from "../constants";

export type TCell = {
  status: CellStatus;
  ship?: ShipType;
};

export type TBoard = TCell[][];

export interface IShip {
  // type: ShipType;
  // size: number;
  // hits: number;
  // isSunk: boolean;
  getIsSunk: () => boolean;
}

export interface IPlayer {
  name: string;
  board: TBoard;
  ships: IShip[];
}

export interface IGameState {
  players: [IPlayer, IPlayer];
  currentPlayer: number;
  gameOver: boolean;
}
