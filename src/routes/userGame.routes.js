"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userGameHandlers_1 = require("../handlers/userGameHandlers");
const userGameRouter = (0, express_1.Router)();
// create UserGame
userGameRouter.post("/", userGameHandlers_1.createUserGameHandler);
userGameRouter.delete("/:id", userGameHandlers_1.deleteUserGameHandler);
userGameRouter.post("/find", userGameHandlers_1.findUserGameHandler);
userGameRouter.get("/all", userGameHandlers_1.getAllUserGameHandler);
userGameRouter.get("/:id", userGameHandlers_1.getUserGameByIDHandler);
userGameRouter.post("/revive/:id", userGameHandlers_1.reviveUserGameByIDHandler);
userGameRouter.post("/update", userGameHandlers_1.updateUserGameHandler);
exports.default = userGameRouter;
