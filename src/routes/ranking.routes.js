"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rankingHandlers_1 = require("../handlers/rankingHandlers");
const rankingRouter = (0, express_1.Router)();
// create Ranking
rankingRouter.post("/", rankingHandlers_1.createRankingHandler);
// crea muchos rankings
rankingRouter.post("/many", rankingHandlers_1.createManyRankingsHandler);
rankingRouter.get("/all", rankingHandlers_1.getAllRankingHandler);
rankingRouter.get("/general", rankingHandlers_1.getGeneralRankingHandler);
rankingRouter.get("/cohort/:cohort", rankingHandlers_1.getCohortRankingHandler);
// query por el momento ?group=value&cohort=value
rankingRouter.get("/group", rankingHandlers_1.getGroupRankingHandler);
// puntos que obtuvo el usuario en cada juego
rankingRouter.get("/ingames/:userID", rankingHandlers_1.getRankingInGamesByUserHandler); // ! ////////////
// total de puntos que obtuvo el usuario (suma todos los juegos)
rankingRouter.get("/total/:userID", rankingHandlers_1.getTotalRankingOfUserHandler);
// ranking del juego
rankingRouter.get("/game/:gameID", rankingHandlers_1.getRankingOfGameHandler);
// cuenta un ranking para el juego de terceros
rankingRouter.post("/count", rankingHandlers_1.createCountRankingHandler);
rankingRouter.get("/:id", rankingHandlers_1.getRankingByIDHandler);
rankingRouter.post("/update", rankingHandlers_1.updateRankingHandler);
rankingRouter.delete("/:id", rankingHandlers_1.deleteRankingHandler);
rankingRouter.post("/revive/:id", rankingHandlers_1.reviveRankingByIDHandler);
rankingRouter.post("/find", rankingHandlers_1.findRankingHandler);
exports.default = rankingRouter;
