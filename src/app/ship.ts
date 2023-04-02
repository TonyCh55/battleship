import { Service } from "typedi";

import { ShipType } from "../constants";
import { IShip } from "../types";

class Ship implements IShip {
  protected type: ShipType;
  protected size = 0;
  protected hits = 0;
  protected isSunk = false;

  public getType() {
    return this.type;
  }

  public getSize() {
    return this.size;
  }

  public getIsSunk() {
    if (this.size === this.hits) {
      this.isSunk = true;
    }

    return this.isSunk;
  }
}

@Service()
export class Battleship extends Ship {
  protected type = ShipType.Battleship;
  protected size = 4;
}

@Service()
export class Cruiser extends Ship {
  protected type = ShipType.Сruiser;
  protected size = 3;
}

@Service()
export class Destroyer extends Ship {
  protected type = ShipType.Destroyer;
  protected size = 2;
}

@Service()
export class Submarine extends Ship {
  protected type = ShipType.Submarine;
  protected size = 1;
}

@Service()
export class ShipFactory {
  private config: Record<ShipType, Ship> = {
    battleship: new Battleship(),
    cruiser: new Cruiser(),
    destroyer: new Destroyer(),
    submarine: new Submarine(),
  };

  public createShip(type: ShipType) {
    return this.config[type];
  }
}
