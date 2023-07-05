"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authHandlers_1 = require("../handlers/authHandlers");
const authRouter = (0, express_1.Router)();
//send email
authRouter.post("/passwordcode", authHandlers_1.codeHandler);
// create user
authRouter.post("/signup", authHandlers_1.signUpHandler);
// own login
authRouter.post("/ownsignin", authHandlers_1.ownSignInHandler);
//third login
authRouter.post("/thirdsignin", authHandlers_1.thirdSignInHandler);
// ! //////
// ' Por ahora no hace nada esta ruta, así que usaré la que tengo en el socket en app.ts
// cerrar sesion
// authRouter.post("/logout", logOutHandler);
// ! //////
authRouter.post("/checkthird", authHandlers_1.checkThirdHandler);
authRouter.post("/thirdsignup", authHandlers_1.thirdSignUpHandler);
exports.default = authRouter;
