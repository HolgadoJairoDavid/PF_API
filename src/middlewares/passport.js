"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
// passport permite autenticar con redes sociales y otros
const passport_jwt_1 = require("passport-jwt");
const User_1 = __importDefault(require("../models/User"));
const JWT_SECRET = process.env.JWT_SECRET || '';
const options = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
};
exports.default = new passport_jwt_1.Strategy(options, (payload, done) => {
    const user = User_1.default.findById(payload.id);
    try {
        if (user) {
            // done(error, boolean)
            return done(null, user);
        }
        return done(null, false);
    }
    catch (err) {
        console.log(err);
    }
});
