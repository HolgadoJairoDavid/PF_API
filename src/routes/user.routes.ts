import { Router } from "express";
import {
  updateUserHandler,
  deleteUserHandler,
  getUserByIDHandler,
  findUserHandler,
  getAllUsersHandler,
  existsUserEmailHandler,
  reviveUserByIDHandler,
  findUsersGroupByEmailHandler,
  searchUsersHandler,
  banUserHandler,
  unBanUserHandler,
  changePasswordHandler
} from "../handlers/userHandlers";

const userRouter = Router();

//cambiar contraseña
userRouter.post("/password", changePasswordHandler)
// se usa tambien para banear 
userRouter.delete("/:id", deleteUserHandler);

// se usa sólo para banear
userRouter.delete("/ban/:id", banUserHandler);

// se usa al desbanear
userRouter.post("/unBan/:id", unBanUserHandler);

userRouter.post("/revive/:id", reviveUserByIDHandler);


userRouter.get("/all", getAllUsersHandler);

userRouter.post("/find", findUserHandler);

userRouter.post("/:id", updateUserHandler);

// pregunta si existe un email por query
userRouter.get("/exists", existsUserEmailHandler);


// devuelve un grupo de usuarios segun email por params
userRouter.get("/group", findUsersGroupByEmailHandler);

userRouter.get("/search", searchUsersHandler);

userRouter.get("/:id", getUserByIDHandler);



export default userRouter;
