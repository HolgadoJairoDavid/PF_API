import { Router } from "express";
import passport from "passport";
import {
  postDevHandler,
  getDevHandler,
  getProtectDevHandler,
  updateManyHandler,
} from "../handlers/devHandlers";

const devRouter = Router();


devRouter.post("/updatemany", updateManyHandler);

devRouter.post("/", postDevHandler);

// ruta protegida
// protegemos la ruta, pasar token por el header en Authorization
devRouter.get("/protect", passport.authenticate('jwt', {session: false}), getProtectDevHandler);

// puedes pasar datos por query
devRouter.get("/", getDevHandler);

export default devRouter;
