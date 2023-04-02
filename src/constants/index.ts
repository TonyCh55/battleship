export const ROWS = 10;
export const COLS = 10;

export enum CellStatus {
  Hidden = "hidden",
  Miss = "miss",
  Hit = "hit",
}

export enum ShipType {
  Carrier = "carrier",
  Battleship = "battleship",
  Submarine = "submarine",
  Destroyer = "destroyer",
  Boat = "boat",
}
