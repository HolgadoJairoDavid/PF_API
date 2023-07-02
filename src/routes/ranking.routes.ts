import { Router } from "express";
import {
    createRankingHandler,
    getAllRankingHandler,
    getRankingByIDHandler,
    updateRankingHandler,
    deleteRankingHandler,
    reviveRankingByIDHandler,
    findRankingHandler,
    getGeneralRankingHandler,
    getCohortRankingHandler,
    getGroupRankingHandler,
    getRankingInGamesByUserHandler,
    createManyRankingsHandler,
    getTotalRankingOfUserHandler,
    createCountRankingHandler,
    getRankingOfGameHandler
} from "../handlers/rankingHandlers";

const rankingRouter = Router();

// create Ranking
rankingRouter.post("/", createRankingHandler);

// crea muchos rankings
rankingRouter.post("/many", createManyRankingsHandler);

rankingRouter.get("/all", getAllRankingHandler);

rankingRouter.get("/general", getGeneralRankingHandler);

rankingRouter.get("/cohort/:cohort", getCohortRankingHandler);

// query por el momento ?group=value&cohort=value
rankingRouter.get("/group", getGroupRankingHandler);

// puntos que obtuvo el usuario en cada juego
rankingRouter.get("/ingames/:userID", getRankingInGamesByUserHandler); // ! ////////////

// total de puntos que obtuvo el usuario (suma todos los juegos)
rankingRouter.get("/total/:userID", getTotalRankingOfUserHandler);

// ranking del juego
rankingRouter.get("/game/:gameID", getRankingOfGameHandler);

// cuenta un ranking para el juego de terceros
rankingRouter.post("/count", createCountRankingHandler);

rankingRouter.get("/:id", getRankingByIDHandler);

rankingRouter.post("/update", updateRankingHandler);

rankingRouter.delete("/:id", deleteRankingHandler);

rankingRouter.post("/revive/:id", reviveRankingByIDHandler);

rankingRouter.post("/find", findRankingHandler);

export default rankingRouter;