import { Router } from "express";
import {
  ownSignInHandler,
  thirdSignInHandler,
  signUpHandler,
  logOutHandler,
  checkThirdHandler,
  thirdSignUpHandler
} from "../handlers/authHandlers";

const authRouter = Router();

// create user
authRouter.post("/signup", signUpHandler);

// own login
authRouter.post("/ownsignin", ownSignInHandler);

//third login
authRouter.post("/thirdsignin", thirdSignInHandler);

// ! //////

// ' Por ahora no hace nada esta ruta, así que usaré la que tengo en el socket en app.ts

// cerrar sesion
// authRouter.post("/logout", logOutHandler);

// ! //////

authRouter.post("/checkthird", checkThirdHandler);

authRouter.post("/thirdsignup", thirdSignUpHandler)

export default authRouter;
