import { Router } from "express";
import {
    createRankingHandler,
    getAllRankingHandler,
    getRankingByIDHandler,
    updateRankingHandler,
    deleteRankingHandler,
    reviveRankingByIDHandler,
    findRankingHandler
} from "../handlers/rankingHandlers";

const rankingRouter = Router();

// create Ranking
rankingRouter.post("/", createRankingHandler);

rankingRouter.get("/all", getAllRankingHandler);

rankingRouter.get("/:id", getRankingByIDHandler);

rankingRouter.post("/update", updateRankingHandler);

rankingRouter.delete("/:id", deleteRankingHandler);

rankingRouter.post("/revive/:id", reviveRankingByIDHandler);

rankingRouter.post("/find", findRankingHandler);

export default rankingRouter;