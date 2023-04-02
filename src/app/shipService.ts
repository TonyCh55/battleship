import { Service } from "typedi";

import { ShipType } from "../constants/index";
import { ShipFactory } from "./ship";
import { IShip } from "../types";

interface IShipService {
  getShips: () => IShip[];
}
@Service()
export class ShipService implements IShipService {
  private ships: IShip[];

  constructor(private shipFactory: ShipFactory) {}

  private generateShips() {
    const battleship = this.shipFactory.createShip(ShipType.Battleship);
    const cruiser = this.shipFactory.createShip(ShipType.Сruiser);
    const destroyer = this.shipFactory.createShip(ShipType.Destroyer);
    const submarine = this.shipFactory.createShip(ShipType.Submarine);

    this.ships = [
      battleship,
      cruiser,
      cruiser,
      // destroyer,
      destroyer,
      destroyer,
      submarine,
      submarine,
      submarine,
      submarine,
    ];
  }

  public getShips() {
    this.generateShips();

    return this.ships;
  }
}
