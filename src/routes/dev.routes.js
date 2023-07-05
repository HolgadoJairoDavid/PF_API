"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const devHandlers_1 = require("../handlers/devHandlers");
const devRouter = (0, express_1.Router)();
devRouter.post("/updatemany", devHandlers_1.updateManyHandler);
devRouter.post("/", devHandlers_1.postDevHandler);
// ruta protegida
// protegemos la ruta, pasar token por el header en Authorization
devRouter.get("/protect", passport_1.default.authenticate('jwt', { session: false }), devHandlers_1.getProtectDevHandler);
// puedes pasar datos por query
devRouter.get("/", devHandlers_1.getDevHandler);
exports.default = devRouter;
