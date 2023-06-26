import { Router } from "express";
import {
  createGameHandler,
  getAllGamesHandler,
  updateGameHandler,
  deleteGameHandler,
  findGameHandler,
  getGameByIDHandler,
  reviveGameByIDHandler
} from "../handlers/gameHandlers";

const gameRouter = Router();

// create Game

gameRouter.post("/", createGameHandler);

gameRouter.get("/all", getAllGamesHandler);

gameRouter.put("/update", updateGameHandler);

gameRouter.delete("/:id", deleteGameHandler);

gameRouter.get("/find", findGameHandler);

gameRouter.get("/:id", getGameByIDHandler);

gameRouter.post("/revive/:id", reviveGameByIDHandler);


export default gameRouter;
