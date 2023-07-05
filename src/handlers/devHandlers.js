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
exports.updateManyHandler = exports.getProtectDevHandler = exports.getDevHandler = exports.postDevHandler = void 0;
const postDev_1 = __importDefault(require("../controllers/devControllers/postDev"));
const getDev_1 = __importDefault(require("../controllers/devControllers/getDev"));
const getProtectDev_1 = __importDefault(require("../controllers/devControllers/getProtectDev"));
const updateMany_1 = __importDefault(require("../controllers/devControllers/updateMany"));
const postDevHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const devData = req.body;
    try {
        // hacer las comprobaciones aqui
        const newGroup = yield (0, postDev_1.default)(devData);
        res.status(200).json(newGroup);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.postDevHandler = postDevHandler;
const getDevHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, getDev_1.default)(req.query);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getDevHandler = getDevHandler;
// ruta protegida
const getProtectDevHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, getProtectDev_1.default)();
        res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getProtectDevHandler = getProtectDevHandler;
const updateManyHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, updateMany_1.default)();
        res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateManyHandler = updateManyHandler;
