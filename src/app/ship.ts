import { Service } from "typedi";

import { ShipType } from "../constants";

export interface IShip {
  getIsSunk: () => boolean;
}

class Ship implements IShip {
  protected type: ShipType;
  protected size = 0;
  protected hits = 0;
  protected isSunk = false;

  public getIsSunk() {
    if (this.size === this.hits) {
      this.isSunk = true;
    }

    return this.isSunk;
  }
}

@Service()
export class Carrier extends Ship {
  protected type = ShipType.Carrier;
  protected size = 5;
}

@Service()
export class Battleship extends Ship {
  protected type = ShipType.Battleship;
  protected size = 4;
}

@Service()
export class Submarine extends Ship {
  protected type = ShipType.Submarine;
  protected size = 3;
}

@Service()
export class Destroyer extends Ship {
  protected type = ShipType.Destroyer;
  protected size = 2;
}

@Service()
export class Boat extends Ship {
  protected type = ShipType.Boat;
  protected size = 1;
}

@Service()
export class ShipFactory {
  private config: Record<ShipType, Ship> = {
    carrier: new Carrier(),
    battleship: new Battleship(),
    submarine: new Submarine(),
    destroyer: new Destroyer(),
    boat: new Boat(),
  };

  public createShip(type: ShipType) {
    return this.config[type];
  }
}
