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
exports.findCohortHandler = exports.getAllCohortsHandler = exports.reviveCohortByIDHandler = exports.deleteCohortHandler = exports.updateCohortHandler = exports.getCohortByIDHandler = exports.createCohortHandler = void 0;
const createCohort_1 = __importDefault(require("../controllers/cohortControllers/createCohort"));
const getCohortByID_1 = __importDefault(require("../controllers/cohortControllers/getCohortByID"));
const updateCohort_1 = __importDefault(require("../controllers/cohortControllers/updateCohort"));
const deleteCohort_1 = __importDefault(require("../controllers/cohortControllers/deleteCohort"));
const getAllCohorts_1 = __importDefault(require("../controllers/cohortControllers/getAllCohorts"));
const reviveCohortByID_1 = __importDefault(require("../controllers/cohortControllers/reviveCohortByID"));
const findCohort_1 = __importDefault(require("../controllers/cohortControllers/findCohort"));
const createCohortHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cohortData = req.body;
    try {
        // hacer las comprobaciones aqui
        const newCohort = yield (0, createCohort_1.default)(cohortData);
        res.status(200).json(newCohort);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createCohortHandler = createCohortHandler;
const getCohortByIDHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aqui
        const cohort = yield (0, getCohortByID_1.default)(id);
        res.status(200).json(cohort);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getCohortByIDHandler = getCohortByIDHandler;
const updateCohortHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cohortData = req.body;
    try {
        // hacer las comprobaciones aqui
        const updatedCohort = yield (0, updateCohort_1.default)(cohortData);
        res.status(200).json(updatedCohort);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.updateCohortHandler = updateCohortHandler;
const deleteCohortHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aqui
        const deletedCohort = yield (0, deleteCohort_1.default)(id);
        res.status(200).json(deletedCohort);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.deleteCohortHandler = deleteCohortHandler;
const reviveCohortByIDHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // hacer las comprobaciones aqui
        const revivedCohort = yield (0, reviveCohortByID_1.default)(id);
        res.status(200).json(revivedCohort);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.reviveCohortByIDHandler = reviveCohortByIDHandler;
const getAllCohortsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // hacer las comprobaciones aqui
        const cohorts = yield (0, getAllCohorts_1.default)();
        res.status(200).json(cohorts);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getAllCohortsHandler = getAllCohortsHandler;
const findCohortHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cohortProps = req.body;
    try {
        // hacer las comprobaciones aqui
        const cohort = yield (0, findCohort_1.default)(cohortProps);
        res.status(200).json(cohort);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.findCohortHandler = findCohortHandler;
