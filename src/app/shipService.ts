import { Service } from "typedi";

import { ShipType } from "../constants/index";
import { ShipFactory, IShip } from "./ship";

@Service()
export class ShipService {
  private ships: IShip[];

  constructor(private shipFactory: ShipFactory) {}

  private generateShips() {
    const carier = this.shipFactory.createShip(ShipType.Carrier);
    const battleship = this.shipFactory.createShip(ShipType.Battleship);
    const submarine = this.shipFactory.createShip(ShipType.Submarine);
    const destroyer = this.shipFactory.createShip(ShipType.Destroyer);
    const boat = this.shipFactory.createShip(ShipType.Boat);

    this.ships = [carier, battleship, submarine, destroyer, boat];
  }

  public getShips() {
    this.generateShips();

    return this.ships;
  }
}
