import "reflect-metadata";

import { App } from "./app/index";
import { BoardService } from "./app/boardService";
import { ShipService } from "./app/shipService";
import { BoardManager } from "./app/boardManager";
import { ShipFactory, Battleship } from "./app/ship";

const a = new App();
a.execute();

const board = new BoardService().createEmptyBoard();
console.log(board);

const shipManager = new BoardManager(board);
const battleship = new Battleship();
console.log(shipManager.placeShip(battleship, 1, 1, true));

const shipFactory = new ShipFactory();
const shipService = new ShipService(shipFactory);
console.log(shipService.getShips());
