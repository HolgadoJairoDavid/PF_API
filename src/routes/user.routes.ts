import { Router } from "express";
import {
  updateUserHandler,
  deleteUserHandler,
  getUserByIDHandler,
  findUserHandler,
  getAllUsersHandler,
  existsUserEmailHandler,
  reviveUserByIDHandler,
  findUsersGroupByEmailHandler
} from "../handlers/userHandlers";

const userRouter = Router();
// se usa tambien para banear 
userRouter.delete("/:id", deleteUserHandler);
// se usa al desbanear
userRouter.post("/revive/:id", reviveUserByIDHandler);

userRouter.get("/all", getAllUsersHandler);

userRouter.post("/find", findUserHandler);

userRouter.post("/:id", updateUserHandler);

// pregunta si existe un email por query
userRouter.get("/exists", existsUserEmailHandler);


// devuelve un grupo de usuarios segun email por params
userRouter.get("/group", findUsersGroupByEmailHandler);

userRouter.get("/:id", getUserByIDHandler);



export default userRouter;
