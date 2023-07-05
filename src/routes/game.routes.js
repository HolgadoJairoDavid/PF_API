"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameHandlers_1 = require("../handlers/gameHandlers");
const gameRouter = (0, express_1.Router)();
// create Game
gameRouter.post("/", gameHandlers_1.createGameHandler);
gameRouter.get("/all", gameHandlers_1.getAllGamesHandler);
gameRouter.put("/update", gameHandlers_1.updateGameHandler);
gameRouter.delete("/:id", gameHandlers_1.deleteGameHandler);
gameRouter.get("/find", gameHandlers_1.findGameHandler);
gameRouter.get("/:id", gameHandlers_1.getGameByIDHandler);
gameRouter.post("/revive/:id", gameHandlers_1.reviveGameByIDHandler);
exports.default = gameRouter;
