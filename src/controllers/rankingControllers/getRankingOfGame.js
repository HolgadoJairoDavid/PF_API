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
const Ranking_1 = __importDefault(require("../../models/Ranking"));
// Devuelve un ranking de los jugadores que obtuvieron más puntos en un juego
const getRankingOfGame = (gameID) => __awaiter(void 0, void 0, void 0, function* () {
    const rankings = yield Ranking_1.default.aggregate([
        {
            $match: {
                gameID: new ObjectId(gameID)
            }
        },
        {
            $group: {
                _id: "$userID",
                total: {
                    $sum: "$points",
                },
            },
        },
        {
            $lookup: {
                from: "users",
                localField: "_id",
                foreignField: "_id",
                as: "user",
            },
        },
    ]).sort({ total: -1 }).limit(10);
    return rankings;
});
exports.default = getRankingOfGame;
