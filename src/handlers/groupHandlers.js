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
exports.findGroupHandler = exports.getAllGroupsHandler = exports.reviveGroupByIDHandler = exports.deleteGroupHandler = exports.updateGroupHandler = exports.getGroupByIDHandler = exports.createGroupHandler = void 0;
const createGroup_1 = __importDefault(require("../controllers/groupControllers/createGroup"));
const getGroupByID_1 = __importDefault(require("../controllers/groupControllers/getGroupByID"));
const updateGroup_1 = __importDefault(require("../controllers/groupControllers/updateGroup"));
const deleteGroup_1 = __importDefault(require("../controllers/groupControllers/deleteGroup"));
const getAllGroups_1 = __importDefault(require("../controllers/groupControllers/getAllGroups"));
const reviveGroupByID_1 = __importDefault(require("../controllers/groupControllers/reviveGroupByID"));
const findGroup_1 = __importDefault(require("../controllers/groupControllers/findGroup"));
const createGroupHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const groupData = req.body;
    try {
        // hacer las comprobaciones aqui
        const newGroup = yield (0, createGroup_1.default)(groupData);
        res.status(200).json(newGroup);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createGroupHandler = createGroupHandler;
const getGroupByIDHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aqui
        const group = yield (0, getGroupByID_1.default)(id);
        res.status(200).json(group);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getGroupByIDHandler = getGroupByIDHandler;
const updateGroupHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const groupData = req.body;
    try {
        // hacer las comprobaciones aqui
        const updatedGroup = yield (0, updateGroup_1.default)(groupData);
        res.status(200).json(updatedGroup);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateGroupHandler = updateGroupHandler;
const deleteGroupHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aqui
        const deletedGroup = yield (0, deleteGroup_1.default)(id);
        res.status(200).json(deletedGroup);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteGroupHandler = deleteGroupHandler;
const reviveGroupByIDHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aqui
        const revivedGroup = yield (0, reviveGroupByID_1.default)(id);
        res.status(200).json(revivedGroup);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.reviveGroupByIDHandler = reviveGroupByIDHandler;
const getAllGroupsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cohort } = req.query;
    try {
        // hacer las comprobaciones aqui
        const groups = yield (0, getAllGroups_1.default)(cohort);
        res.status(200).json(groups);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAllGroupsHandler = getAllGroupsHandler;
// busca según un criterio
const findGroupHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const groupProps = req.body;
    try {
        // hacer las comprobaciones aqui
        const group = yield (0, findGroup_1.default)(groupProps);
        res.status(200).json(group);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.findGroupHandler = findGroupHandler;
