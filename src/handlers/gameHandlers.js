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
exports.reviveGameByIDHandler = exports.getGameByIDHandler = exports.findGameHandler = exports.deleteGameHandler = exports.updateGameHandler = exports.getAllGamesHandler = exports.createGameHandler = void 0;
const createGame_1 = __importDefault(require("../controllers/gameControllers/createGame"));
const getAllGames_1 = __importDefault(require("../controllers/gameControllers/getAllGames"));
const updateGame_1 = __importDefault(require("../controllers/gameControllers/updateGame"));
const deleteGame_1 = __importDefault(require("../controllers/gameControllers/deleteGame"));
const findGame_1 = __importDefault(require("../controllers/gameControllers/findGame"));
const getGameByID_1 = __importDefault(require("../controllers/gameControllers/getGameByID"));
const reviveGameByID_1 = __importDefault(require("../controllers/gameControllers/reviveGameByID"));
const createGameHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gameData = req.body;
    try {
        const newGame = yield (0, createGame_1.default)(gameData);
        res.status(200).json(newGame);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createGameHandler = createGameHandler;
const getAllGamesHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const games = yield (0, getAllGames_1.default)();
        res.status(200).json(games);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAllGamesHandler = getAllGamesHandler;
const updateGameHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gameData = req.body;
    try {
        const updatedGame = yield (0, updateGame_1.default)(gameData);
        res.status(200).json(updatedGame);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateGameHandler = updateGameHandler;
const deleteGameHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedGame = yield (0, deleteGame_1.default)(id);
        res.status(200).json(deletedGame);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteGameHandler = deleteGameHandler;
const findGameHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gameProps = req.body;
    try {
        const game = yield (0, findGame_1.default)(gameProps);
        res.status(200).json(game);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.findGameHandler = findGameHandler;
const getGameByIDHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const game = yield (0, getGameByID_1.default)(id);
        res.status(200).json(game);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getGameByIDHandler = getGameByIDHandler;
const reviveGameByIDHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const revivedGame = yield (0, reviveGameByID_1.default)(id);
        res.status(200).json(revivedGame);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.reviveGameByIDHandler = reviveGameByIDHandler;
