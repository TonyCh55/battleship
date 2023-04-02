import "reflect-metadata";

import { App } from "./app/index";
import { BoardService } from "./app/boardService";
import { ShipService } from "./app/shipService";
import { BoardManager } from "./app/boardManager";
import { ShipFactory, Battleship } from "./app/ship";

const a = new App();
a.execute();

const board = new BoardService().createEmptyBoard();
// console.log(board);

const boardManager = new BoardManager(board);
// const battleship = new Battleship();
// console.log(shipManager.placeShip(battleship, 1, 1));

const shipFactory = new ShipFactory();
const shipService = new ShipService(shipFactory);
const ships = shipService.getShips();
console.log("ships-config", ships);

console.log(boardManager.placeAllShips(ships));
