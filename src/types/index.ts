import { ShipType, CellStatus } from "../constants";

export type TCell = {
  status: CellStatus;
  ship?: IShip;
};

export type TBoard = TCell[][];

// export type TShip = {
//   type: ShipType;
//   size: number;
//   hits: number;
//   isSunk: boolean;
// };

export interface IShip {
  getIsSunk: () => boolean;
  getSize: () => number;
  getType: () => ShipType;
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
