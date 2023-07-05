"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ObjectId } = require('mongodb');
// Game history
// Devuelve la puntuacion que obtuvo un usuario en cada juego
const Ranking_1 = __importDefault(require("../../models/Ranking"));
// este tambien de contar la cantidad de veces que se jugo
const getRankingInGameByUser = (userID) => __awaiter(void 0, void 0, void 0, function* () {
    const rankings = yield Ranking_1.default.aggregate([
        {
            $match: {
                userID: new ObjectId(userID)
            }
        },
        {
            $group: {
                _id: "$gameID",
                total: {
                    $sum: "$points",
                },
                timesPlayed: {
                    $sum: 1,
                }
            },
        },
        {
            $lookup: {
                from: "games",
                localField: "_id",
                foreignField: "_id",
                as: "game",
            },
        },
    ]).sort({ timesPlayed: -1 });
    rankings.sort((r1, r2) => r2.total - r1.total);
    return rankings;
});
exports.default = getRankingInGameByUser;
