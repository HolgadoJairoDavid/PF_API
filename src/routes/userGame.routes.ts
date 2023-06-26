import { Router } from "express";
import {
    createUserGameHandler,
    deleteUserGameHandler,
    findUserGameHandler,
    getAllUserGameHandler,
    getUserGameByIDHandler,
    reviveUserGameByIDHandler,
    updateUserGameHandler
} from "../handlers/userGameHandlers";

const userGameRouter = Router();

// create UserGame
userGameRouter.post("/", createUserGameHandler);

userGameRouter.delete("/:id", deleteUserGameHandler);

userGameRouter.post("/find", findUserGameHandler);

userGameRouter.get("/all", getAllUserGameHandler);

userGameRouter.get("/:id", getUserGameByIDHandler);

userGameRouter.post("/revive/:id", reviveUserGameByIDHandler);

userGameRouter.post("/update", updateUserGameHandler);

export default userGameRouter;