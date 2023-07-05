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
exports.updateUserGameHandler = exports.reviveUserGameByIDHandler = exports.getUserGameByIDHandler = exports.getAllUserGameHandler = exports.findUserGameHandler = exports.deleteUserGameHandler = exports.createUserGameHandler = void 0;
const createUserGame_1 = __importDefault(require("../controllers/userGameControllers/createUserGame"));
const deleteUserGame_1 = __importDefault(require("../controllers/userGameControllers/deleteUserGame"));
const findUserGame_1 = __importDefault(require("../controllers/userGameControllers/findUserGame"));
const getAllUserGames_1 = __importDefault(require("../controllers/userGameControllers/getAllUserGames"));
const getUserGameById_1 = __importDefault(require("../controllers/userGameControllers/getUserGameById"));
const reviveUserGameByID_1 = __importDefault(require("../controllers/userGameControllers/reviveUserGameByID"));
const updateUserGame_1 = __importDefault(require("../controllers/userGameControllers/updateUserGame"));
const createUserGameHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userGameData = req.body;
    try {
        // hacer las comprobaciones aqui
        const newUserGame = yield (0, createUserGame_1.default)(userGameData);
        res.status(200).json(newUserGame);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createUserGameHandler = createUserGameHandler;
const deleteUserGameHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aqui
        const deletedUserGame = yield (0, deleteUserGame_1.default)(id);
        res.status(200).json(deletedUserGame);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteUserGameHandler = deleteUserGameHandler;
const findUserGameHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userGameProps = req.body;
    try {
        // hacer las comprobaciones aqui
        const userGame = yield (0, findUserGame_1.default)(userGameProps);
        res.status(200).json(userGame);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.findUserGameHandler = findUserGameHandler;
const getAllUserGameHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // hacer las comprobaciones aqui
        const userGames = yield (0, getAllUserGames_1.default)();
        res.status(200).json(userGames);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAllUserGameHandler = getAllUserGameHandler;
const getUserGameByIDHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aqui
        const userGame = yield (0, getUserGameById_1.default)(id);
        res.status(200).json(userGame);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getUserGameByIDHandler = getUserGameByIDHandler;
const reviveUserGameByIDHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aqui
        const revivedUserGame = yield (0, reviveUserGameByID_1.default)(id);
        res.status(200).json(revivedUserGame);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.reviveUserGameByIDHandler = reviveUserGameByIDHandler;
const updateUserGameHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userGameData = req.body;
    try {
        // hacer las comprobaciones aqui
        const updatedUserGame = yield (0, updateUserGame_1.default)(userGameData);
        res.status(200).json(updatedUserGame);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateUserGameHandler = updateUserGameHandler;
